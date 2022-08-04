import {Clock, Title, Paragraph} from "components"

import { Geolocation } from "types/geolocation"
import "./weather.scss"
import { useApi } from "hooks/useApi"
import { useEffect, useState } from "react"

export function Weather({lat, lon}: Geolocation) {
  const api = useApi({lat, lon})
  const [hour, setHour] = useState<number>(24)
  const [nextHour, setNextHour] = useState<number>(0)
  const [fadeEffect, setFadeEffect] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setHour(hour + 1)
      setNextHour(nextHour + 1)
      setFadeEffect(!fadeEffect)
      hour >= 24 && setHour(0)
      nextHour >= 24 && setNextHour(0)
    }, 1000 * 10)
  }, [hour, fadeEffect, nextHour])

  return (
  <>
    {api !== undefined ? (
      <div className="content">
        <Title>{api.main.temp.toFixed(0)}°C</Title>
        <Clock/>
        <Paragraph>{api.name}</Paragraph>
      </div>
    ) : null}
    <div className={`weather weather--${(hour).toString().padStart(2, "0")}`}>
    <div className={`weather ${fadeEffect ? "weather--fadeIn" : "weather--fadeOut"} weather--${(nextHour).toString().padStart(2, "0")}`}>
    </div>
    <div className={`weather ${fadeEffect ? "weather--fadeOut" : "weather--fadeIn"} weather--${(hour).toString().padStart(2, "0")}`}>
    </div>
    </div>
  </>


  )
}