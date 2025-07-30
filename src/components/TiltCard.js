import React, { useRef, useEffect } from 'react';
import './TiltCard.css'; // optional external CSS

const TiltCard = () => {
  const containerRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const bg = bgRef.current;

    const handleMouseMove = (e) => {
      const { offsetWidth: w, offsetHeight: h } = container;
      const { offsetX: x, offsetY: y } = e;

      const rotateX = (y / h - 0.5) * 20;
      const rotateY = (x / w - 0.5) * -20;

      bg.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      bg.style.transform = 'rotateX(0deg) rotateY(0deg)';
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="tilt-container" ref={containerRef}>
      <div className="background-3d" ref={bgRef}>
        {/* Your content or background image here */}
      </div>
    </div>
  );
};

export default TiltCard;
