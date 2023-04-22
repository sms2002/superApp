import React,{useState} from 'react'
import './Note.css'
function Note() {
    const [notes, setNotes] = useState(['']);
    const handleNoteChange = (event, index) => {
        const newNotes = [...notes];
        newNotes[index] = event.target.value;
        setNotes(newNotes);
      };
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
      <div className="buttonWWrite">
        <button className='noteAddButton'onClick={addNote}>yaaaaa
        </button>
      </div>
    </div>
  )
}

export default Note
