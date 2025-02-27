import React, { useEffect, useRef } from 'react';

const AnimatedBlock = ({ children }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Deja de observar después de activarse
        }
      },
      {
        root: null, // Observa en toda la ventana
        threshold: 0.1, // El 10% del elemento debe ser visible para activarse
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div ref={elementRef} className="animated-block">
      {children}
    </div>
  );
};

export default AnimatedBlock;
