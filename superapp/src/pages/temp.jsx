import React from 'react'
import Timer from '../components/Time/Time'
function temp() {
  return (
    <div>
      <Timer onComplete={() => console.log("Countdown complete!")} />
    </div>
  )
}

export default temp
