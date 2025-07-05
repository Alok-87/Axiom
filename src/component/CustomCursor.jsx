import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      {/* Outer circle */}
      <div
        className="fixed z-[9999] pointer-events-none rounded-full border border-euclid"
        style={{
          width: '50px',
          height: '50px',
          left: position.x - 25,
          top: position.y - 25,
          transition: 'transform 0.1s ease-out',
          transform: 'translate3d(0, 0, 0)',
        }}
      ></div>

      {/* Inner dot */}
      <div
        className="fixed z-[9999] pointer-events-none rounded-full bg-euclid"
        style={{
          width: '6px',
          height: '6px',
          left: position.x - 3,
          top: position.y - 3,
        }}
      ></div>
    </>
  );
};

export default CustomCursor;
