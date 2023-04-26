import React,{useState,useEffect} from 'react'
import './Note.css'
function Note() {
    const [notes, setNotes] = useState(() => {
        const savedNotes = JSON.parse(localStorage.getItem("notes"));
        return savedNotes || ["", "", "", "", "", ""];
      });
    const handleNoteChange = (event, index) => {
        const newNotes = [...notes];
        newNotes[index] = event.target.value;
        setNotes(newNotes);
      };
      useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
      }, [notes]);
       const addNote = () => {
    setNotes([...notes, '']);
  };
  return (
    <div className='noteContainer'>
        <h1 className="noteHeader">All Notes</h1>
      {notes.map((note, index) => (
        <div key={index}>
          <input type="text" className='notepadInput'value={note} onChange={(event) => handleNoteChange(event, index)} />
        </div>
      ))}
      <div className="buttonWrite">
        <button className='noteAddButton'onClick={addNote}>
        </button>
      </div>
    </div>
  )
}

export default Note
