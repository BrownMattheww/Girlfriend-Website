import { useState, useEffect } from "react"
import '../time.css'

export default function TimePage() {
  const [elapsed, setElapsed] = useState("days: 0, hours: 0, minutes: 0, seconds: 0")

  useEffect(() => {
    const dateMet = new Date("2024-05-18");

    const updateElapsed = () => {
      const now = Date.now();
      const diff = now - dateMet.getTime();

      const totalSeconds = Math.floor(diff / 1000);
      const days = Math.floor(totalSeconds / (60 * 60 * 24));
      const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setElapsed({ days, hours, minutes, seconds });
    };

    updateElapsed();
    const interval = setInterval(updateElapsed, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <div id="timeComponent">
        <h1>I met you on the 18th of may!</h1>
        <h2>Or more specifically i have known you for:</h2>
        <p>{elapsed.days} Days, {elapsed.hours} Hours, {elapsed.minutes} Minutes, {elapsed.seconds} Seconds</p>
      </div>
    </>
  )
}