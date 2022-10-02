
export const getDayofTheWeek = (day) => {
  const weekDay = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ];
  return weekDay[day]
}
export const getMonth = (month) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  return months[month]
}

export const addZeros = (numb) => numb < 10 ? '0' + numb : numb;


export async function getCityName(coords) {
  const result = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${coords.latitude}&lon=${coords.longitude}&limit=5&appid=b6681e3f0446bc62f33527efc7b781c5`)
  const data = await result.json()
  return data[0].name
}

export function checkDayTime(str) {
  const time = str[str.length - 1]
  return time === 'd' ? 'day' : 'night'
}