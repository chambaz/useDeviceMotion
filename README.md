# usedevicemotion

**Installation**

```
npm install --save usedevicemotion
```

**Usage**

```js
import { useDeviceMotion } from 'usedevicemotion'

function Home() {
  const deviceMotion = useDeviceMotion()
  let deviceMotionData

  if (deviceMotion.acceleration) {
    deviceMotionData = (
      <ul>
        <li>X: {deviceMotion.acceleration.x}</li>
        <li>Y: {deviceMotion.acceleration.y}</li>
        <li>Z: {deviceMotion.acceleration.z}</li>
      </ul>
    )
  }

  return <div>{deviceMotionData}</div>
}

export default Home
```
