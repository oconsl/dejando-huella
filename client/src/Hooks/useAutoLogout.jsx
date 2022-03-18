import { useEffect, useState } from 'react';

const useLogout = (startTime) => {
  const [timer, setTimer] = useState(startTime);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 5000);

    const resetTimeout = () => {
      setTimer(startTime);
    };

    const events = [
      'load',
      'mousemove',
      'mousedown',
      'click',
      'scroll',
      'keypress',
    ];

    events.forEach(event => window.addEventListener(event,resetTimeout));

    return () => {
      clearInterval(timeInterval);
      events.forEach(event => window.removeEventListener(event,resetTimeout));
    };
  });

  return timer;
};

export default useLogout;
