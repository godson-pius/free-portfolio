import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Work = () => {
    const location = useLocation()
    console.log(location);
  return (
    <div>
        Path to send is: { `http://localhost:5174${location.pathname}` }
    </div>
    
  )
}

export default Work