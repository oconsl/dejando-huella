import { useEffect, useState } from 'react';
// HOOKS
import useToken from './useToken';

const useAutoLogout = (startTime) => {
  const [timer, setTimer] = useState(startTime);
  const { token, logOut } = useToken();

  useEffect(() => {
    const timeInterval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else if (timer === 0) {
        logOut();
      }
    }, 1000);

    const resetTimeout = () => {
      if (token) setTimer(startTime);
    };

    const events = [
      'load',
      'mousedown',
      'mousemove',
      'click',
      'scroll',
      'keypress',
    ];

    events.forEach((event) => window.addEventListener(event, resetTimeout));

    return () => {
      clearInterval(timeInterval);
      events.forEach((event) =>
        window.removeEventListener(event, resetTimeout)
      );
    };
  });

  return timer;
};

export default useAutoLogout;
