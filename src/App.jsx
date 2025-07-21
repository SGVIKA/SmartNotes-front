import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroPage from "/src/pages/IntroPage/IntroPage.jsx";
import Test from "/src/pages/Test.jsx";
import NotesList from "/src/pages/NotesListPage/NotesList.jsx";
// import handleFormSubmit from "./components/LoginForm/LoginForm"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/notes" element={<NotesList />} />
      </Routes>
    </BrowserRouter>

    
  );
}
