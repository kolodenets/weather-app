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
  const result = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${coords.latitude}&lon=${coords.longitude}&limit=5&appid=b6681e3f0446bc62f33527efc7b781c5`)
  const data = await result.json()
  return data[0].name
}

export function checkDayTime(weatherIconCode) {
  const time = weatherIconCode[weatherIconCode.length - 1]
  return time === 'd' ? 'day' : 'night'
}

export const choseMainImage = (string) => {
  const weather = string.split(' ');
  return weather[weather.length - 1].toLowerCase()
}

export const isTaskDateEqualToday = (key) => {
  return (key.substring(8,10) + key.substring(5,7) + key.substring(0,5)) === (new Date().toISOString().substring(8,10) + new Date().toISOString().substring(5,7) + new Date().toISOString().substring(0,5))
}