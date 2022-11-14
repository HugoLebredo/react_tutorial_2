import { useState } from 'react';
import Note from './Note'
import './index.css'

export default function App({ notes }) {

  const [arrayNotes, setArrayNotes] = useState(notes);
  const [newNote, setNewNote] = useState("");

  console.log({arrayNotes})

  const handleChange = (e) => {
    setNewNote(e.target.value);
  };

  const handleClick = (e) => {
    const noteToAdd = {
      id: arrayNotes.length + 1,
      content: newNote,
      date: new Date(),
      important: Math.random() > 0.5
    };

    setArrayNotes([...arrayNotes, noteToAdd]);
  };

  return (
    <div className="App">
      <h1>Añadir un registro al Array</h1>
      <ol className="NotesList">
        {arrayNotes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ol>
      <input type="text" value={newNote} onChange={handleChange}></input>
      <button onClick={handleClick}>Add note</button>
    </div>
  );
}
