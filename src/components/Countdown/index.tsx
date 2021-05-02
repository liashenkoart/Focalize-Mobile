import React, { useState, useEffect, useRef } from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { formatTime, minutesToMillis } from "../../utils/functions";
import CustomText from "../CustomText";
import { CountdownWrapper, CountdowtTex } from "./Countdown.styles";

interface CountdownProps {
    minutes: number;
    isPaused: boolean;
}

const Countdown: React.FC<CountdownProps> = ({
    minutes = 20,
    isPaused = true,
}) => {
    const [millis, setMillis] = useState(minutesToMillis(minutes));
    const [fill, setFill] = useState(100);
    const minute = Math.floor(millis / 1000 / 60) % 60;
    const seconds = Math.floor(millis / 1000) % 60;

    const interval = useRef(0);

    const countdown = () => {
        setMillis((time) => {
            if (time === 0) {
                return time;
            }

            const timeLeft = time - 1000;
            setFill((timeLeft / minutesToMillis(minutes)) * 100);
            return timeLeft;
        });
    };

    useEffect(() => {
        interval.current = setInterval(countdown, 1000);
        return () => clearInterval(interval.current);
    }, []);

    return (
        <CountdownWrapper>
            <AnimatedCircularProgress
                size={200}
                width={7}
                rotation={1}
                fill={fill}
                tintColor="#FF7900"
                backgroundColor="#3d5875"
            >
                {(fill) => (
                    <CountdowtTex>
                        {formatTime(minute)}:{formatTime(seconds)}
                    </CountdowtTex>
                )}
            </AnimatedCircularProgress>
        </CountdownWrapper>
    );
};
export default Countdown;
