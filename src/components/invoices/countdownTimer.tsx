'use client'

import { useEffect, useState } from "react";

interface countdownTimerProp {
    expired: string;
    time: number;
}

const CountdownTimer = ({ expired, time }: countdownTimerProp) => {
    const expiryTime = new Date(expired).getTime();
    const [timeLeft, setTimeLeft] = useState(() => {
        const currentTime = time;
        return Math.max(0, Math.floor((expiryTime - currentTime) / 1000));
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            if (timeLeft > 0) {
                setTimeLeft(timeLeft - 1);
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft, expiryTime]);

    const formatTime = (time: number): string => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        return `${hours.toString().padStart(2, '0')} Hours, ${minutes
        .toString()
        .padStart(2, '0')} minutes, ${seconds.toString().padStart(2, '0')} seconds left`;
    };

    return (
        <p className="text-[#e53e60] font-semibold">{formatTime(timeLeft)}</p>
    );
};

export default CountdownTimer