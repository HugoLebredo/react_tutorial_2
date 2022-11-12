import react from "react";

const Note = ({ note }) => (
  <li>
    <h4>{note.content}</h4>
    <time>{note.date}</time>
  </li>
);

export default Note;