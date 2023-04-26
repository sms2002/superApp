import React, { useEffect,useState } from 'react'
import './News.css'
import { API_KEY_NEWS } from "../../constants";
import axios from 'axios'
function News() {
  const [article, setArticles] = useState([]);
  useEffect(() => {
    const API_KEY = API_KEY_NEWS;
    axios.get('https://api.newscatcherapi.com/v2/search', {
      headers: {
        'x-api-key': API_KEY,
      },
      params: {
        q: 'headlines',
         countries:'US'
      },
    })
      .then(response => setArticles(response.data.articles[0]))
      .catch(error => console.error(error));
      
  }, []);
  return (
    <div className='newsContainer'>
      <div className="newsImage">
        <img src={article.media?article.media:'No image'} alt="" className='newsImage'/>
        <div className="newsInnerContainer">
        <div className="newsTitle">
        {article.title?article.title:'No title'}
        </div>
        <div className="newsDateAndTime">
        {article.published_date?article.published_date.slice(0,10):'No Date'} | {article.published_date?article.published_date.slice(11,19):'No Time'}
        </div>
        </div>
      </div>
      <div className="lowerNewsContainer">
        <p className="newsPara">{article.summary?`${article.summary.slice(0,250)}...`:'No summary'}</p>
      </div>
    </div>
  )
}

export default News
