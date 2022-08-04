type Weather = {
  description: string,
  icon: string,
  id: number,
  main: string
}

export interface WeatherData {
  id: number,
  main: {
    temp: number
  },
  name: string,
  visibility: number,
  weather: Weather[],
  wind: {
    speed: number,
    deg: number,
    gust: number
  }
}