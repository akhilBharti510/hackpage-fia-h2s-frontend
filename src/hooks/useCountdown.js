import { useEffect, useMemo, useState } from "react";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

function getRemaining(deadline) {
  const distance = Math.max(new Date(deadline).getTime() - Date.now(), 0);

  return {
    total: distance,
    days: Math.floor(distance / DAY),
    hours: Math.floor((distance % DAY) / HOUR),
    minutes: Math.floor((distance % HOUR) / MINUTE),
    seconds: Math.floor((distance % MINUTE) / SECOND),
  };
}

export default function useCountdown(deadline) {
  const [remaining, setRemaining] = useState(() => getRemaining(deadline));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRemaining(getRemaining(deadline));
    }, SECOND);

    return () => window.clearInterval(timer);
  }, [deadline]);

  return useMemo(
    () => ({
      ...remaining,
      isExpired: remaining.total <= 0,
      label:
        remaining.total <= 0
          ? "Registration Closed"
          : `${remaining.days}d ${remaining.hours}h ${remaining.minutes}m ${remaining.seconds}s`,
    }),
    [remaining],
  );
}
