export function getHHMMSSFromSeconds($seconds: number) {
    if (!$seconds) {
        return '00:00:00';
    }
    const hours = Math.floor($seconds / 3600);
    const minutes = Math.floor(($seconds % 3600) / 60);
    const seconds = $seconds % 60;
    const hhmmss = padTo2(hours) + ':' + padTo2(minutes) + ':' + padTo2(seconds);
    return hhmmss;
}

// function to convert single digit to double digit
function padTo2(value: number) {
    if (!value) {
        return '00';
    }
    return value < 10 ? String(value).padStart(2, '0') : value;
}
