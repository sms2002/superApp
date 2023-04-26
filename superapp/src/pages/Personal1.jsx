import React from 'react'
import Personal from '../components/Personal/Personal';
import Weather from "../components/Weather/Weather";
import News from "../components/News/News";
import Note from '../components/Note/Note'
import Time from '../components/Time/Time'
import '../styles.css'
import {useNavigate} from 'react-router-dom'
function Personal1() {
  const navigate=useNavigate();
  function handleClick()
  {
   navigate("/entertainment");
  }
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
      <div><button onClick={handleClick}className='nextPersonalButton'>Browse</button></div>
      </div>
    </div>
  )
}

export default Personal1
