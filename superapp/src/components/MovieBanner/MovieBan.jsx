import React, { useEffect,useState }  from 'react'
import axios from '../../axios1'
import {IMG_URL_MOVIE} from '../../constants'
import { API_KEY_MOVIE } from "../../constants";
import './MovieBan.css'
function MovieBan(props) {
    const [movies, setMovies] = useState([])
    useEffect(() => {
      axios.get(`/discover/movie?api_key=${API_KEY_MOVIE}&with_genres=${props.category}`).then(response=>{
        setMovies(response.data.results);
      }).catch(err=>{
        alert("Network Error");
      })
    }, [])
  return (
    <div className='row'>
            <h2 className='posterHeader'>{props.name}</h2>
            <div className='posters'>
              {movies.map((obj)=>{
                return <img className='poster' alt='poster' src={`${IMG_URL_MOVIE+obj.backdrop_path}`} />
              })}
            
            </div>
      </div>
  )
}

export default MovieBan
