import { useState, useEffect } from "react";

function digitalClock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="flipTimebox">
            <div className="clock clock-fix">{time}</div>
        </div>
    );
}

export default digitalClock;