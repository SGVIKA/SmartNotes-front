import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import IntroPage from "../pages/IntroPage/IntroPage"
import Test from "../pages/Test"
import NotesList from "../pages/NotesListPage/NotesList"

export default function AppRouter(){
    return(
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/intro" replace />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/notes" element={<NotesList />} />
      </Routes>
    </BrowserRouter>
    )
}