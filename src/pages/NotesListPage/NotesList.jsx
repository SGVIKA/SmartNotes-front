import Header from "../../components/Header/Header";
import Note from "../../components/Note/Note";
import AddNoteForm from "../../components/AddNoteForm/AddNoteForm";
import { useMemo, useState } from "react";
import "./NotesList.css";
import NoteFilter from "../../components/NoteFilter/NoteFilter";
import AddNoteButton from "../../components/AddNoteButton/AddNoteButton";
import { useNotes } from "../../hooks/useNotes";

export default function NotesList() {
  const [notes, setNotes] = useState([
    { id: 1, title: "Test title1" },
    { id: 2, title: "Test title2" },
    { id: 3, title: "Test title3" },
    { id: 4, title: "Test title4" },
    { id: 5, title: "Test title5" },
    { id: 6, title: "Test title6" },
    { id: 7, title: "Test title7" },
    { id: 8, title: "Test title8" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedNotes = useNotes(notes, filter.sort, filter.query);

  const createNote = (newNote) => {
    setNotes([...notes, newNote]);
    setModal(false);
  };

  const removeNote = (note) => {
    setNotes(notes.filter((n) => n.id !== note.id));
  };

  return (
    <>
      <Header>
        <NoteFilter filter={filter} setFilter={setFilter} />
      </Header>
      <main>
        <AddNoteButton
          onClick={() => setModal(true)}
          visible={!modal}
          setModal={setModal}
        />
        <div className="modal-backdrop" onClick={() => setModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <AddNoteForm
              create={createNote}
              visible={modal}
              setVisible={setModal}
            />
          </div>
        </div>

        {sortedAndSearchedNotes.length !== 0 ? (
          <div className="notes_list">
            {sortedAndSearchedNotes.map((note) => (
              <Note note={note} key={note.id} remove={removeNote} />
            ))}
          </div>
        ) : (
          <p className="not-found-notes">Заметки не найдены</p>
        )}
      </main>
    </>
  );
}
