import React from 'react'
import Logo from '../../assets/Logo.png'
import {action,drama,romance,thriller,western,horror,fantasy,music,fiction} from '../../urls'
import MovieBan from '../MovieBanner/MovieBan'
import { useNavigate } from "react-router-dom";
import './Movies.css'
function Movies() {
  const navigate = useNavigate();
  const storedArray = localStorage.getItem('genreData');
  const myArray = JSON.parse(storedArray);
  const handleClick=()=>{
    navigate('/personal1')
  }
  console.log(myArray)
  return (
    <div>
      <div className="moviesNavbar">
        <h1 className='moviesHeader'>Super app</h1>
        <img onClick={handleClick}src={Logo} alt="Logo" className="moviesLogo" />
      </div>
      <p className="moviePara">Entertainment according to your choice</p>
      {myArray.map((item)=>{
        return item==='Action'?<MovieBan name={item}  category={action}/>
        :item==='Drama'?<MovieBan name={item}  category={drama}/>
        :item==='Romance'? <MovieBan name={item}  category={romance}/>
        :item==='Thriller'?<MovieBan name={item}  category={thriller}/>
        :item==='Western'?<MovieBan name={item}  category={western}/>
        :item==='Horror'?<MovieBan name={item}  category={horror}/>
        :item==='Fantasy'?<MovieBan name={item}  category={fantasy}/>
        :item==='Music'?<MovieBan name={item}  category={music}/>
        :item==='Fiction'? <MovieBan name={item}  category={fiction}/>:''
        })}
    </div>
  )
}

export default Movies
