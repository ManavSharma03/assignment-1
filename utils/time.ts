export function getTwentyFourHourTime(s: string) {
    var time: string[] | number[] = s.toLowerCase().split(':');
    var hours = parseInt(time[0]);
    var _ampm = time[2];
    if (_ampm.indexOf('am') != -1 && hours == 12) {
        time[0] = '00';
    }
    if (_ampm.indexOf('pm') != -1 && hours < 12) {
        time[0] = String(hours + 12);
    }
    return time.join(':').replace(/(am|pm)/, '');
}