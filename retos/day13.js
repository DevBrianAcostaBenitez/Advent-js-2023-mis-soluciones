function calculateTime(deliveries) {
  const limit = 7 * 60 * 60;
  const total = deliveries.reduce((acc, curr) => {
    const [h, m, s] = curr.split(':').map(Number);
    return acc + h * 3600 + m * 60 + s;
  }, 0);
  const remaining = limit - total;
  const sign = remaining > 0 ? '-' : '';
  const absRemainSec = Math.abs(remaining);
  const hours = String(Math.floor(absRemainSec / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((absRemainSec % 3600) / 60)).padStart(2, '0');
  const seconds = String(absRemainSec % 60).padStart(2, '0');
  return `${sign}${hours}:${minutes}:${seconds}`;
}

console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00'])); // '-02:20:00'
console.log(calculateTime(['02:00:00', '05:00:00', '00:30:00'])); // '00:30:00'
console.log(calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30'])); // '-05:29:00'
  