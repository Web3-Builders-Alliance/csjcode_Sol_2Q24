import { DateTime } from 'luxon';

// calculateTimeLeft function
// formatDateTaskDetail function
// generateShortDateTime

export const calculateTimeLeft = (expires:string) => {
   const difference = +new Date(expires) - +new Date();
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export const formatDateTaskDetail = (timestamp: number | null | undefined): string => {
  return timestamp
    ? DateTime.fromSeconds(timestamp).toFormat("LLL. d, yyyy (h:mm a 'CST')")
    : 'n/a';
};


export const generateShortDateTime = () => {
  // Get the current date and time
  const now = new Date();

  // Format the date as YYMMDD
  const year = now.getFullYear().toString().slice(-2);
  const month = ('0' + (now.getMonth() + 1)).slice(-2);
  const day = ('0' + now.getDate()).slice(-2);
  const dateStr = `${year}${month}${day}`;

  // Calculate the number of seconds since midnight
  const secondsSinceMidnight = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();

  // Convert the seconds since midnight to a base-36 string
  const secondsBase36 = secondsSinceMidnight.toString(36);

  // Concatenate the date and the base-36 seconds string
  const shortNumber = `${dateStr}${secondsBase36}`;

  return shortNumber;
}
