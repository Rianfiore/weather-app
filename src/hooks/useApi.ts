import { Geolocation } from 'types/geolocation';
import axios from 'axios';
import { useQuery } from "@tanstack/react-query";
import { WeatherData } from 'types/weatherData';

export function useApi(coords : Geolocation) {
  const baseUrl = "https://api.openweathermap.org/data/2.5/weather?"
  const params = {
    appid: "fd98fb948847d910aaa88cd881e1d17f",
  }
  const {data: dataWeather} = useQuery<WeatherData>(['weather'],async () => {
      const response = await axios.get(`${baseUrl}lat=${coords.lat}&lon=${coords.lon}&units=metric`,
      {params: params})
      return response.data
  }, {
    refetchInterval: 1000 * 15,
  })
  return dataWeather
}