import { useState, useEffect } from 'react';
import { Geolocation } from 'types/geolocation';

export function useGeoLocation() {
  const [coords, setCoords] = useState<Geolocation | null>(null)

  useEffect(() => {
    if("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoords({lat: position.coords.latitude, lon: position.coords.longitude})
        
      })
    }
  },[])
  
  return coords
}