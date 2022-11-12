import Note from './Note'
import './App.css'

function App({notes}) {
  return (
    <div className="App">
      <h1>Renderizando un Array</h1>
      <ol className="NotesList">
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ol>
    </div>
  );
}

export default App
