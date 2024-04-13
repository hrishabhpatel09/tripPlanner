import React, { useState } from 'react'
import { useRef } from 'react'
function HomePage() {
  const [location,setLocation] = useState(null)
  navigator.geolocation.getCurrentPosition((res)=>{
    setLocation(res)
  },()=>{},{enableHighAccuracy:true})
  return (
    <div className='bg-black h-[100vh] text-white'>
      Latitude: {location?.coords?.latitude}
      <br />
      Longitude: {location?.coords?.longitude}
    </div>
  )
}

export default HomePage
