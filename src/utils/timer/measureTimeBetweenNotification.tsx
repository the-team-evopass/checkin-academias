export default function MeasureTimeBetweenNotification(
  lastCheckinTime: number,
  preset: number
) {
  const localTime = new Date().getTime();

  const dif = localTime - lastCheckinTime;

  return dif < preset;
}
