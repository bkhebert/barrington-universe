import React, { useEffect, useState } from "react";
import dayjs from 'dayjs';

// The purpose of this component is to show the current time for the user
const Time = () => {
  // State variables to hold time stamps
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");

  // Updates state variables to current time based on dayjs
  const updateTime = () => {
  const now = dayjs();
  setTime(now.format("h:mm:ss A"));
  setDay(now.format(`dddd`));
  setDate(now.format(`MMMM D, YYYY`))
  };


  // Starts timer on mount, 
  useEffect(() => {
    updateTime(); // Update immediately on mount
    const startTimer = setInterval(updateTime, 1000);

    // Removes interval on unmount to prevent memory leak
    return () => {
      clearInterval(startTimer)
    }
  });

  return (
    <>
     <h1 className="text-white text-8xl font-bold">{time}</h1>
     <h1 className="text-white text-7xl font-light">{day}</h1>
     <h1 className="text-white text-7xl font-light">{date}</h1>
    </>
  )
}

export default Time;