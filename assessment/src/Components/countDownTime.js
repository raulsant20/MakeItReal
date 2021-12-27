import { useState, useEffect, useRef } from 'react';

export default function CountDownTime(seconds) {
  const [time, setTime] = useState(seconds);
  const [disabled, setDisabled] = useState(false);

  const intervalRef = useRef();
  function decreaseTime() {
    setTime((timeprev) => {
      if (timeprev <= 1) {
        /* clearInterval(setInterval(decreaseTime,1000)) */
        setDisabled(true);
        clearInterval(intervalRef.current);
        return 0;
      }

      return timeprev - 1;
    });
  }

  useEffect(() => {
    intervalRef.current = setInterval(decreaseTime, 1000);
    /* const time = setInterval(decreaseTime, 1000) */
    return () => clearInterval(time);
  }, []);

  return { time, disabled };
}
