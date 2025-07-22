import "./Note.css"

export default function Note(props) {
  return (
    <div className="note">
      <div className="note_content">
        <p className="note_title">{props.note.title}</p>
      </div>
      <button onClick={()=>props.remove(props.note)} className="note-delete-button">Удалить</button>
    </div>
  );
}
