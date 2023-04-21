import React from 'react'
import './Personal.css'
import Profile from "../../assets/profile.png";
function Personal() {
    const storedObject = localStorage.getItem('userData');
    const myObject = JSON.parse(storedObject);
    const storedArray = localStorage.getItem('genreData');
    const myArray = JSON.parse(storedArray);
    
  return (
    <div>
    <div className='personalBox'>
        <img className='personalImage'src={Profile} alt="profilepic" />
        <h3 className='personalName'>{myObject.name}</h3>
        <h3 className='personalEmail'>{myObject.email}</h3>
        <h1 className='personalUser'>{myObject.username}</h1>
        <div className='personalGenreContainer'>
        {myArray.map((item)=>{
            return(
                <div className='alignGenreItems'>
                <div className='personalGenreBox'>{item}</div>
                <div className='closeGenreBox'>X</div>
                </div>
              
            )
        })}
        </div>
    </div>
    </div>
  )
}

export default Personal
