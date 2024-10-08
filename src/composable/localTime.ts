export function getLocalTime (timezone: number) {        
    const timezoneOffsetInSeconds = timezone;
    const timezoneOffsetInHours = timezoneOffsetInSeconds / 3600;
    const currentDate = new Date();
    const utcHours = currentDate.getUTCHours();
    const localHours = utcHours + timezoneOffsetInHours;
    const adjustedHours = (localHours + 24) % 24;
    return `UTC+4: ${adjustedHours}:00`;
}