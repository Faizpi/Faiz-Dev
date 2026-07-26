const GITHUB_API_URL = "https://api.github.com/graphql";
const GITHUB_USERNAME = "Faizpi";
const FIRST_CONTRIBUTION_YEAR = 2023;

const CONTRIBUTIONS_QUERY = `
  query Contributions($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
              weekday
            }
          }
        }
      }
    }
  }
`;

function getYearRange(year) {
  return {
    from: new Date(Date.UTC(year, 0, 1)).toISOString(),
    to: new Date(Date.UTC(year, 11, 31, 23, 59, 59)).toISOString(),
  };
}

module.exports = async function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    return response.status(405).json({ error: "Method not allowed" });
  }

  const currentYear = new Date().getUTCFullYear();
  const year = Number(request.query.year ?? currentYear);

  if (!Number.isInteger(year) || year < FIRST_CONTRIBUTION_YEAR || year > currentYear) {
    return response.status(400).json({ error: "Invalid contribution year" });
  }

  if (!process.env.GITHUB_TOKEN) {
    return response.status(503).json({ error: "GitHub integration is not configured" });
  }

  try {
    const githubResponse = await fetch(GITHUB_API_URL, {
      method: "POST",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
        "User-Agent": "Faizpi-portfolio",
      },
      body: JSON.stringify({
        query: CONTRIBUTIONS_QUERY,
        variables: {
          login: GITHUB_USERNAME,
          ...getYearRange(year),
        },
      }),
    });

    const payload = await githubResponse.json();

    if (!githubResponse.ok || payload.errors?.length) {
      console.error("GitHub GraphQL request failed", payload.errors ?? payload);
      return response.status(502).json({ error: "Unable to load GitHub contributions" });
    }

    const calendar = payload.data?.user?.contributionsCollection?.contributionCalendar;

    if (!calendar) {
      return response.status(404).json({ error: "GitHub user was not found" });
    }

    response.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
    return response.status(200).json({
      username: GITHUB_USERNAME,
      year,
      totalContributions: calendar.totalContributions,
      weeks: calendar.weeks,
    });
  } catch (error) {
    console.error("GitHub contributions endpoint failed", error);
    return response.status(500).json({ error: "Unable to load GitHub contributions" });
  }
};
