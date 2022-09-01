export const durationToHhMmSs = (duration : number) => {
    let hours = Math.floor(duration / 3600);
    let minutes : string | number = Math.floor((duration - hours * 3600) / 60);
    let seconds : string | number = duration - hours * 3600 - minutes * 60;

    if (minutes < 10) minutes = `0${minutes}`;
    if (seconds < 10) seconds = `0${seconds}`;

    if (hours !== 0) return `${hours}:${minutes}:${seconds}`;
    else return `${minutes}:${seconds}`;
}