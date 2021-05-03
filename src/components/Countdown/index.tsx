import React, { useState, useEffect, useRef } from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { formatTime, minutesToMillis, timerColor } from "../../utils/functions";
import { CountdownWrapper, CountdowtTex } from "./Countdown.styles";
import AsyncStorage from "@react-native-community/async-storage";

interface CountdownProps {
    minutes: number;
    isPaused: boolean;
    onEnd: () => any;
    navigation: any;
    focusID: string;
}

const Countdown: React.FC<CountdownProps> = ({
    minutes = 20,
    isPaused = true,
    onEnd,
    navigation,
    focusID,
}) => {
    const [millis, setMillis] = useState(minutesToMillis(minutes));
    const [fill, setFill] = useState(100);
    const minute = Math.floor(millis / 1000 / 60) % 60;
    const seconds = Math.floor(millis / 1000) % 60;

    const interval = useRef(0);

    const countdown = () => {
        setMillis((time) => {
            if (time === 0) {
                clearInterval(interval.current);
                return time;
            }

            const timeLeft = time - 1000;
            setFill((timeLeft / minutesToMillis(minutes)) * 100);
            return timeLeft;
        });
    };

    useEffect(() => {
        if (millis === 0) {
            onEnd();
            navigation.replace("Home");
        }
    }, [millis]);

    useEffect(() => {
        setMillis(minutesToMillis(minutes));
        setFill(100);
    }, [minutes]);

    useEffect(() => {
        if (isPaused) {
            if (interval.current) clearInterval(interval.current);
            return;
        }
        interval.current = setInterval(countdown, 1000);
        return () => clearInterval(interval.current);
    }, [isPaused]);

    return (
        <CountdownWrapper>
            <AnimatedCircularProgress
                size={200}
                width={7}
                rotation={1}
                fill={fill}
                tintColor={timerColor(minutes)}
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
