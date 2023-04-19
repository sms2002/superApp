import React, {useState } from "react";
import action from "../../assets/action.png";
import drama from "../../assets/drama.png";
import fantasy from "../../assets/fantasy.png";
import fiction from "../../assets/fiction.png";
import horror from "../../assets/horror.png";
import music from "../../assets/music1.png";
import romance from "../../assets/romance.png";
import thriller from "../../assets/thriller.png";
import western from "../../assets/western.png";
import "./Choice.css";
import { useNavigate } from "react-router-dom";
const genres = [
  {
    id: "Action",
    color: "#FF5209",
    image: action,
    active:false
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: drama,
    active:false
  },
  {
    id: "Romance",
    color: "#148A08",
    image: romance,
    active:false
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: thriller,
    active:false
  },
  {
    id: "Western",
    color: "#912500",
    image: western,
    active:false
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: horror,
    active:false
  },
  {
    id: "Fantasy",
    color: " #FF4ADE",
    image: fantasy,
    active:false
  },
  {
    id: "Music",
    color: "#E61E32",
    image: music,
    active:false
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: fiction,
    active:false
  },
];
function Choice() {
  const [items, setItems] = useState([]);
  const [errorMsg,setErrorMsg]=useState('');
  const [count,setCount]=useState(0);
  const navigate = useNavigate();
  function handleDeleteItem(itemToDelete) {
    const newArray = items.filter(item => item !== itemToDelete);
    setItems(newArray);
    setCount(count-1);
    console.log(itemToDelete)
    genres.map((item)=>{
      if(item.id===itemToDelete)
      {
        item.active=false;
      }
    })
  }

  function handleSubmit(e)
  {
    if(count>=3)
    {
      setErrorMsg('')
      window.localStorage.setItem("genreData", JSON.stringify(items));
      navigate('/personal1')
    }
    else
    {
      setErrorMsg('U need to select atleast 3 genres')
    }
  }

  return (
    <div className="choiceWholeDiv">
      <h1 className="choiceheader">Super app</h1>
      <p className="choicepara">
        Choose your <br />
        entertainment <br />
        category
      </p>
      <div className="flexbox">
        {genres.map((item, index) => {
          return (
            <div
              onClick={() => {
                console.log(items);
                if (!items.includes(item.id)) {
                setItems((prevItems) => [...prevItems, item.id]);
                setCount(count+1);
                item.active=true;
                }
              }}
              style={{
                backgroundColor: item.color,
                border: item.active?'0.2rem solid #11B800':'' 
              }}
              className="box" 
              key={index}
            >
              <h2 className="headerbox">{item.id}</h2>
              <img className="imagebox" src={item.image} alt={item.id} />
            </div>

          );
        })}
        {items.map((item)=>{
          return(
            <div className="genreDiv">
                <div className="genreHeader">{item}</div>
                <div onClick={() => {handleDeleteItem(item);}
                } className="closeButton">X</div>
            </div>
          )
        })}
        <button onClick={(e)=>{handleSubmit(e)}}className="choiceButton">Next Page</button>
        <div className="genreError">{errorMsg}</div>
      </div>
      
    </div>
  );
}

export default Choice;
