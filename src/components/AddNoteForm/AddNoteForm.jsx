import { useState } from "react";
// import "./AddNoteForm";
import cl from "./AddNoteForm.module.css";


export default function AddNoteForm({ create, visible, setVisible }) {
  const [note, setNote] = useState({ title: "", body: "" });

  const rootClasses = [cl.add_note_form]
  if(visible){
    rootClasses.push(cl.active)
  }

  const addNewNote = (e) => {
    e.preventDefault();
    const newNote = {
      ...note,
      id: Date.now(),
    };
    create(newNote);
    setNote({ title: "", body: "" });
  };

  return (
    <div className={rootClasses.join(' ')}>
      <form className={cl.anf_form}>
        <label>
          <input
            value={note.title}
            onChange={(e) => setNote({ ...note, title: e.target.value })}
            type="text"
            name="noteTitle"
            placeholder="Заголовок"
            className={cl.anf_input}
          />
        </label>
        <label>
          <textarea
            value={note.body}
            onChange={(e) => setNote({ ...note, body: e.target.value })}
            type="comment"
            name="noteText"
            placeholder="..."
            className={[cl.note_text_input, cl.anf_input].join(' ')}
          />
        </label>
        <button onClick={addNewNote} className={cl.anf_button}>
          Сохранить
        </button>
      </form>
    </div>
  );
}
