// import AppRouter from "./components/AppRouter";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import IntroPage from "../pages/IntroPage/IntroPage";
import NotesList from "../pages/NotesListPage/NotesList";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import NoteIdPage from "../pages/NoteIdPage/NoteIdPage"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Navigate to="/intro" replace />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/notes" element={<NotesList />} />
        <Route path="/notes/:id" element={<NoteIdPage />} />
      </Routes>
    </BrowserRouter>
  );
}
