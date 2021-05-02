export const minutesToMillis = (min: number) => min * 1000 * 60;

export const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

export const timerColor = (minutes: number): string => {
    switch (minutes) {
        case 10:
            return "#FF7900";
        case 20:
            return "#779BE7";
        case 30:
            return "#b69121";
        default:
            return "#FF7900";
    }
};
