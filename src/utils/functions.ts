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

export const status = {
    COMPLETED: 1,
    CANCELED: 2,
    PAUSED: 3,
};

export const handleStatusColor = (stats: number): string => {
    switch (stats) {
        case 1:
            return "rgba(56, 176, 0, 0.54)";
        case 2:
            return "rgba(255, 90, 95, 0.54)";
        case 3:
            return "rgba(245, 250, 0, 0.54)";
        default:
            return "rgba(56, 176, 0, 0.54)";
    }
};

export const handleStatusText = (stats: number): string => {
    switch (stats) {
        case 1:
            return "Completed";
        case 2:
            return "Canceled";
        case 3:
            return "Paused";
        default:
            return "-";
    }
};

export const trimTitle = (title: string): string => {
    return title.length > 30 ? title.slice(0, 30) + "..." : title;
};
