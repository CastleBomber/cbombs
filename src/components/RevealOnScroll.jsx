import React, { useRef, useEffect, useState } from 'react';

const RevealOnScroll = ({ children, className = '', threshold = 0.1 }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`${className} ${visible ? 'reveal-show' : 'reveal-hidden'}`}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
