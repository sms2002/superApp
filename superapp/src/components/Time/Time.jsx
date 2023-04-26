import React, { useState, useEffect,useRef } from "react";
import "./Time.css";
import up from "../../assets/up.png";
import down from "../../assets/down.png";
import sound from '../../audio/alarm.mp3'
const Time = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [countdown, setCountdown] = useState(0);
  const [final, setFinal] = useState(0);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const audioRef = useRef(null);
  const temp=final;
  function handleClick()
  {
    const countdownFinal = hours*3600+minutes*60+seconds;
    const initialCountdown = countdownFinal < 0 ? 0 : countdownFinal;
    setButtonPressed(true);
    setAnimationKey(animationKey + 1);
    setCountdown(initialCountdown);
    setFinal(initialCountdown);
    audioRef.current.pause()
    audioRef.current.currentTime=0
  }
  function handleAnimationEnd()
  {
    audioRef.current.play();
  }
  const increaseSecond = () => {
    if (seconds === 59) {
      return;
    }
    setSeconds((sec) => sec + 1);
  };
  const increaseMinute = () => {
    if (minutes === 59) {
      return;
    }
    setMinutes((min) => min + 1);
  };
  const increaseHour = () => {
    setHours((hours) => hours + 1);
  };
  const decreaseSecond = () => {
    if (seconds === 0) {
      return;
    }
    setSeconds((sec) => sec - 1);
  };
  const decreaseMinute = () => {
    if (minutes === 0) {
      return;
    }
    setMinutes((min) => min - 1);
  };
  const decreaseHour = () => {
    if (hours === 0) {
      return;
    }
    setHours((hours) => hours - 1);
  };
  
  const countdownStyles = {
    animation: buttonPressed ? `countdown ${temp}s linear 1 forwards` : "none"
  };
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown((countdown) =>
        countdown <= 0 ? 0 : countdown - 1
      );
      
    }, 1000);
    
    return () => clearInterval(intervalId);
  }, [final]);
  
  const formatTime = () => {
    const hours = Math.floor(countdown / 3600);
    const minutes = Math.floor((countdown % 3600) / 60);
    const seconds = countdown % 60;
    return `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`;
  };
  return (
    <div className="timerContainer">
      <div id="countdown">
        <div className="surroundCircle">
          <div id="countdown-number">{formatTime()}</div>
          <svg>
            <circle key={animationKey} style={countdownStyles} onAnimationEnd={handleAnimationEnd} r="18" cx="20" cy="20"></circle>
          </svg>
        </div>
      </div>
      <div className="timerData">
        <div className="timerLeftSection">
          <div>
            <h1 className="timertimes">Hours</h1>
          </div>
          <div>
            <img onClick={increaseHour}src={up} alt="" className="upImage" />
          </div>
          <div>
            <h1 className="dataTime">{hours}</h1>
          </div>
          <div>
            <img onClick={decreaseHour}src={down} alt="" className="downImage" />
          </div>
        </div>
        <div className="colon1">:</div>
        <div className="timerMiddleSection">
          <div>
            <h1 className="timertimes">Minutes</h1>
          </div>
          <div>
            <img onClick={increaseMinute}src={up} alt="" className="upImage" />
          </div>
          <div>
            <h1 className="dataTime">{minutes}</h1>
          </div>
          <div>
            <img onClick={decreaseMinute}src={down} alt="" className="downImage" />
          </div>
        </div>
        <div className="colon2">:</div>
        <div className="timerRightSection">
          <div>
            <h1 className="timertimes">Seconds</h1>
          </div>
          <div>
            <img onClick={increaseSecond}src={up} alt="" className="upImage" />
          </div>
          <div>
            <h1 className="dataTime">{seconds}</h1>
          </div>
          <div>
            <img onClick={decreaseSecond}src={down} alt="" className="downImage" />
          </div>
        </div>
        <button onClick={handleClick} className="startPauseButton">Start</button>
      </div>
      <audio ref={audioRef} src={sound} />
    </div>
  );
};
export default Time;
