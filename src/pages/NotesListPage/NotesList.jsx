import Header from "../../components/Header/Header";
import Note from "../../components/Note/Note";
import AddNoteForm from "../../components/AddNoteForm/AddNoteForm";
import { useEffect, useMemo, useState } from "react";
import "./NotesList.css";
import NoteFilter from "../../components/NoteFilter/NoteFilter";
import AddNoteButton from "../../components/AddNoteButton/AddNoteButton";
import { useNotes } from "../../hooks/useNotes";
import NoteService from "../../API/NoteService";
import { getPageCount, getPagesArray } from "../../utils/pages";
import { useFetching } from "../../hooks/useFetching";
import Pagination from "../../components/pagination/Pagination";
import { useNavigate } from "react-router-dom";

export default function NotesList() {
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedNotes = useNotes(notes, filter.sort, filter.query);
  const navigate = useNavigate();

  const [fetchNotes, isNotesLoading, noteError] = useFetching(
    async (limit, page) => {
      const response = await NoteService.getAll(limit, page);
      setNotes([...notes, ...response.data]);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  useEffect(() => {
    fetchNotes(limit, page);
  }, [page, limit]);

  const createNote = (newNote) => {
    setNotes([...notes, newNote]);
    setModal(false);
  };

  const removeNote = (note) => {
    setNotes(notes.filter((n) => n.id !== note.id));
  };

  const changePage = (page) => {
    setPage(page);
  };

  const handleNoteClick = (noteId) => {
    navigate(`/notes/${noteId}`); // Переход на страницу заметки
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
              <Note
                note={note}
                key={note.id}
                remove={removeNote}
                onNoteClick={handleNoteClick}
              />
            ))}
            <Pagination
              page={page}
              changePage={changePage}
              totalPages={totalPages}
            />
          </div>
        ) : (
          <p className="not-found-notes">Заметки не найдены</p>
        )}
      </main>
    </>
  );
}
