import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { useLang } from "../context/LanguageContext";
import translations from "../context/translations";

const GITHUB_USERNAME = "Faizpi";
const FIRST_CONTRIBUTION_YEAR = 2023;
const MONTH_FORMATTERS = {
  en: new Intl.DateTimeFormat("en-US", { month: "short", timeZone: "UTC" }),
  id: new Intl.DateTimeFormat("id-ID", { month: "short", timeZone: "UTC" }),
};
const DATE_FORMATTERS = {
  en: new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeZone: "UTC" }),
  id: new Intl.DateTimeFormat("id-ID", { dateStyle: "long", timeZone: "UTC" }),
};
const LEVEL_CLASSES = [
  "bg-gray-100 dark:bg-white/[0.06]",
  "bg-gray-300 dark:bg-white/20",
  "bg-gray-400 dark:bg-white/40",
  "bg-gray-600 dark:bg-white/60",
  "bg-gray-900 dark:bg-white/90",
];

function getContributionLevel(count, maximum) {
  if (count === 0 || maximum === 0) return 0;
  return Math.min(4, Math.ceil((count / maximum) * 4));
}

function getMonthLabels(weeks, lang) {
  let previousMonth = -1;

  return weeks.map((week) => {
    const firstDay = week.contributionDays[0];
    if (!firstDay) return "";

    const month = new Date(`${firstDay.date}T00:00:00Z`).getUTCMonth();
    if (month === previousMonth) return "";

    previousMonth = month;
    return MONTH_FORMATTERS[lang].format(new Date(`${firstDay.date}T00:00:00Z`));
  });
}

function ContributionSkeleton() {
  return (
    <div className="space-y-2" aria-hidden="true">
      <div className="h-3 w-3/4 animate-pulse rounded bg-black/10 dark:bg-white/10" />
      <div className="grid grid-flow-col grid-rows-7 gap-1 overflow-hidden">
        {Array.from({ length: 112 }, (_, index) => (
          <span key={index} className="h-2.5 w-2.5 animate-pulse rounded-[2px] bg-black/10 dark:bg-white/10" />
        ))}
      </div>
    </div>
  );
}

function GitHubContributions() {
  const currentYear = new Date().getFullYear();
  const years = useMemo(
    () => Array.from({ length: currentYear - FIRST_CONTRIBUTION_YEAR + 1 }, (_, index) => currentYear - index),
    [currentYear],
  );
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [calendar, setCalendar] = useState(null);
  const [status, setStatus] = useState("loading");
  const [retryCount, setRetryCount] = useState(0);
  const { lang } = useLang();
  const t = translations[lang].contributions;

  useEffect(() => {
    const controller = new AbortController();

    async function loadContributions() {
      setStatus("loading");

      try {
        const response = await fetch(`/api/github-contributions?year=${selectedYear}`, {
          signal: controller.signal,
        });

        if (!response.ok) throw new Error("Unable to load contributions");

        setCalendar(await response.json());
        setStatus("success");
      } catch (error) {
        if (error.name !== "AbortError") {
          setCalendar(null);
          setStatus("error");
        }
      }
    }

    loadContributions();
    return () => controller.abort();
  }, [selectedYear, retryCount]);

  const weeks = calendar?.weeks ?? [];
  const maximum = Math.max(0, ...weeks.flatMap((week) => week.contributionDays.map((day) => day.contributionCount)));
  const monthLabels = getMonthLabels(weeks, lang);

  return (
    <section className="space-y-5">
      <Reveal>
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-sm font-bold text-black dark:text-white">{t.title}</h2>
          <span className="text-right text-xs text-gray-400 dark:text-gray-500" aria-live="polite">
            {status === "success" ? t.total(calendar.totalContributions) : t.activity}
          </span>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="flex gap-1.5 overflow-x-auto pb-1" role="group" aria-label={t.yearFilter}>
          {years.map((year) => {
            const isSelected = year === selectedYear;
            return (
              <button
                key={year}
                type="button"
                onClick={() => setSelectedYear(year)}
                aria-pressed={isSelected}
                className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
                  isSelected
                    ? "bg-black/10 font-semibold text-black dark:bg-white/15 dark:text-white"
                    : "text-gray-500 hover:bg-black/5 hover:text-black dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white"
                }`}
              >
                {year}
              </button>
            );
          })}
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="rounded-xl border border-black/10 bg-black/[0.02] p-3 dark:border-white/10 dark:bg-white/[0.03]">
          {status === "loading" && <ContributionSkeleton />}

          {status === "error" && (
            <div className="py-5 text-center">
              <p className="text-xs text-gray-600 dark:text-gray-400">{t.error}</p>
              <button
                type="button"
                onClick={() => setRetryCount((count) => count + 1)}
                className="mt-2 rounded-sm text-xs font-medium text-blue-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                {t.retry}
              </button>
            </div>
          )}

          {status === "success" && (
            <>
              <div className="overflow-x-auto pb-2">
                <div className="min-w-[430px]">
                  <div
                    className="mb-1 grid gap-1 pl-4 text-[9px] text-gray-400 dark:text-gray-500"
                    style={{ gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))` }}
                    aria-hidden="true"
                  >
                    {monthLabels.map((month, index) => (
                      <span key={`${month}-${index}`} className="whitespace-nowrap">{month}</span>
                    ))}
                  </div>

                  <div className="flex gap-1">
                    <div className="grid grid-rows-7 gap-1 pt-[1px] text-[8px] text-gray-400 dark:text-gray-500" aria-hidden="true">
                      <span />
                      <span>{t.monday}</span>
                      <span />
                      <span>{t.wednesday}</span>
                      <span />
                      <span>{t.friday}</span>
                      <span />
                    </div>
                    <div className="grid flex-1 grid-flow-col grid-rows-7 gap-1" role="grid" aria-label={t.calendar(selectedYear)}>
                      {weeks.flatMap((week) => week.contributionDays).map((day) => {
                        const level = getContributionLevel(day.contributionCount, maximum);
                        const label = t.day(day.contributionCount, DATE_FORMATTERS[lang].format(new Date(`${day.date}T00:00:00Z`)));
                        return (
                          <span
                            key={day.date}
                            role="gridcell"
                            tabIndex={0}
                            aria-label={label}
                            title={label}
                            className={`aspect-square min-h-2 min-w-2 rounded-[2px] ${LEVEL_CLASSES[level]} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-1 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black`}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-black/10 pt-3 dark:border-white/10">
                <p className="text-[10px] text-gray-500 dark:text-gray-400">{t.summary(calendar.totalContributions, selectedYear)}</p>
                <div className="flex shrink-0 items-center gap-1 text-[9px] text-gray-400 dark:text-gray-500" aria-label={t.intensity}>
                  <span>{t.less}</span>
                  {LEVEL_CLASSES.map((className, index) => (
                    <span key={index} className={`h-2.5 w-2.5 rounded-[2px] ${className}`} />
                  ))}
                  <span>{t.more}</span>
                </div>
              </div>
            </>
          )}
        </div>
      </Reveal>

      <Reveal delay={0.16}>
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-sm text-xs font-medium text-blue-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
        >
          {t.profile}
          <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      </Reveal>
    </section>
  );
}

export default GitHubContributions;
