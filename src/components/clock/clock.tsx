import { Paragraph } from "components";
import React, {useEffect, useState} from "react"

export function Clock() {
  const initialDate = new Date().toLocaleTimeString()
  const [clockState, setClockState] = useState<string>(initialDate);

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString())
    }, 1000)
  },[])

  return (
    <Paragraph>
      {clockState}
    </Paragraph>
  )
}