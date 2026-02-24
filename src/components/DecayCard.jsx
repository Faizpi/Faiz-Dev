import { useState } from 'react';

const DecayCard = ({ width = 300, height = 400, image = 'https://picsum.photos/300/400?grayscale', children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden"
      style={{ width: `${width}px`, height: `${height}px` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={image}
        alt="About"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
          transition: 'filter 0.5s ease-in-out',
        }}
      />
      <div className="absolute bottom-[1.2em] left-[1em] tracking-[-0.5px] font-black text-[2.5rem] leading-[1.5em] first-line:text-[6rem]">
        {children}
      </div>
    </div>
  );
};

export default DecayCard;