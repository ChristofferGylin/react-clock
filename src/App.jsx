import { useEffect, useState } from "react";
import "./App.css";


function App() {

  return (
    <Clock city="Stockholm" timeZone="Stockholm/Grrenwitch" />
  )

}

const Clock = (props) => {

  const [time, setTime] = useState('00:00:00');

  const updateClock = () => {

    const newTime = new Date().toLocaleTimeString();

    if (newTime !== time) {

      setTime(newTime);

    }

    requestAnimationFrame(updateClock);

  }

  useEffect(() => {

    //setTime(date.toLocaleTimeString('en-GB', { timeZone: 'Europe/London' }));
    requestAnimationFrame(updateClock);

  }, [])

  return <div className="clock"><div className="location">{props.city}</div><div className="time"><span className="timeDigit">{time[0]}</span><span className="timeDigit">{time[1]}</span><span className="timeDivider">{time[2]}</span><span className="timeDigit">{time[3]}</span><span className="timeDigit">{time[4]}</span><span className="timeDivider">{time[5]}</span><span className="timeDigit">{time[6]}</span><span className="timeDigit">{time[7]}</span></div></div>;

}

export default App;
