import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetching } from "../../hooks/useFetching";
import NoteService from "../../API/NoteService";
import Header from "../../components/Header/Header";
import "./NoteIdPage.css";

export default function NoteIdPage() {
  const params = useParams();
  const [note, setNote] = useState({});
  const [fetchNotesById, isLoading, error] = useFetching(async () => {
    const response = await NoteService.getById(params.id);
    setNote(response.data);
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchNotesById(params.id);
  }, []);

  return (
    <>
      <Header></Header>
      <main className="note-content">
        <div className="note-title note-block">{note.title}</div>
        <div className="note-text note-block">{note.body}</div>
        <span className="back-button" onClick={() => navigate("/notes")}>
          Назад
        </span>
      </main>
    </>
  );
}
