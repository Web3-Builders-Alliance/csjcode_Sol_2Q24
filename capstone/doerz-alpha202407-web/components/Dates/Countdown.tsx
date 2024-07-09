import { calculateTimeLeft } from "@/utils/dates";
import React, { useState, useEffect } from "react";

interface CountdownProps {
  expires: string;
}

const Countdown: React.FC<CountdownProps> = ({ expires }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(expires));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(expires));
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <>
      {timeLeft.days > 0 && `${timeLeft.days} days, `}
      {timeLeft.hours > 0 && `${timeLeft.hours} hours, `}
      {timeLeft.minutes > 0 && `${timeLeft.minutes} minutes, `}
      {timeLeft.seconds > 0 && `${timeLeft.seconds} seconds`}
      {timeLeft.days === 0 &&
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0 && <span className="font-bold text-red-600">EXPIRED</span>}
    </>
  );
};

export default Countdown;
