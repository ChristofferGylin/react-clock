import { useEffect, useState } from "react";
import Button from "./Button";

let localTime = true;
let currentTimeZone = 0;
let freeze = false;

const Clock = (props) => {

    const timeZones = [
        {
            city: 'Stockholm',
            zone: 'Europe/Stockholm'
        },
        {
            city: 'London',
            zone: 'Europe/London'
        },
        {
            city: 'Tokyo',
            zone: 'Asia/Tokyo'
        },
        {
            city: 'New York',
            zone: 'America/New_York'
        }
    ]

    const [time, setTime] = useState('00:00:00');
    const [city, setCity] = useState('LOCAL TIME');
    const [freezeTitle, setFreezeTitle] = useState('FREEZE');

    const updateClock = () => {

        if (!freeze) {

            let newTime;

            if (localTime) {

                newTime = new Date().toLocaleTimeString('en-GB');

            } else {

                newTime = new Date().toLocaleTimeString('en-GB', { timeZone: timeZones[currentTimeZone].zone });

            }

            if (newTime !== time) {

                setTime(newTime);

            }

        }

        requestAnimationFrame(updateClock);

    }

    const changeTimezone = () => {

        if (localTime) {

            localTime = false;
            setCity(timeZones[currentTimeZone].city);

        } else {

            currentTimeZone++;
            if (currentTimeZone > timeZones.length - 1) currentTimeZone = 0;
            setCity(timeZones[currentTimeZone].city);

        }

        console.log(currentTimeZone)

    }

    const freezeTime = () => {

        if (freeze) {

            freeze = false;
            setFreezeTitle('FREEZE');

        } else {

            freeze = true;
            setFreezeTitle('UNFREEZE');

        }

        console.log(freeze);

    }

    const changeLocalTime = () => {

        localTime = true;
        setCity('LOCAL TIME');

    }

    useEffect(() => {

        requestAnimationFrame(updateClock);

    }, [])

    return (
        <div className="clock">
            <div className="clockButtons">
                <Button title="LOCAL TIME" onClick={changeLocalTime} />
                <Button title="TIME ZONE" onClick={changeTimezone} />
                <Button title={freezeTitle} onClick={freezeTime} />
            </div>
            <div className="clockDisplay">
                <div className="location">{city}</div>
                <div className="time"><span className="timeDigit">{time[0]}</span><span className="timeDigit">{time[1]}</span><span className="timeDivider">{time[2]}</span><span className="timeDigit">{time[3]}</span><span className="timeDigit">{time[4]}</span><span className="timeDivider">{time[5]}</span><span className="timeDigit">{time[6]}</span><span className="timeDigit">{time[7]}</span></div>
            </div>
        </div>
    );


}

export default Clock;