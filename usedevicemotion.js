import { useState, useEffect } from 'react'

export function useDeviceMotion() {
  const [deviceMotion, setDeviceMotion] = useState({})
  useEffect(() => {
    window.ondevicemotion = function(event) {
      setDeviceMotion(event)
    }
  }, [])

  return deviceMotion
}
