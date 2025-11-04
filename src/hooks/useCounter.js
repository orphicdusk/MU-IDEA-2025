import { useState, useEffect } from 'react';

const useCounter = (target, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (!isAnimated) {
      const targetNumber = parseInt(target.toString().replace('+', '')) || 0;
      const step = targetNumber / (duration / 16);
      
      let current = 0;
      const timer = setInterval(() => {
        current += step;
        
        if (current >= targetNumber) {
          clearInterval(timer);
          setCount(targetNumber);
          setIsAnimated(true);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [target, duration, isAnimated]);

  return count;
};

export default useCounter;