import React from 'react'
import Personal from '../components/Personal/Personal';
import Weather from "../components/Weather/Weather";
import News from "../components/News/News";
import Note from '../components/Note/Note'
import '../styles.css'
function Personal1() {
  return (
    <div className='personalWholeDiv'>
      <div className="topLeftDiv">
      <Personal/>
      <Weather/>
      </div>
      <div className="topMiddleDiv">
        <Note/>
      </div>
      <div className="topRightDiv">
      <News/>
      </div>
    </div>
  )
}

export default Personal1
