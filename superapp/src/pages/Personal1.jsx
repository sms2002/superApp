import React from 'react'
import Personal from '../components/Personal/Personal';
import Weather from "../components/Weather/Weather";
import News from "../components/News/News";
import Note from '../components/Note/Note'
import Time from '../components/Time/Time'
import '../styles.css'
function Personal1() {
  return (
    <div className='personalWholeDiv'>
      
      <div className="halfSectionLeft">
      <div className="topLeftDiv">
      <Personal/>
      <Weather/>
      <Time/>
      </div>
      <div className="topMiddleDiv">
        <Note/>
      </div>
      </div>
      <div className="topRightDiv">
      <News/>
      </div>
    </div>
  )
}

export default Personal1
