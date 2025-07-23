// import AppRouter from "./components/AppRouter";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import IntroPage from "../pages/IntroPage/IntroPage";
import NotesList from "../pages/NotesListPage/NotesList";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import NoteIdPage from "../pages/NoteIdPage/NoteIdPage";
import { publicRoutes, privateRoutes } from "../router";
import { useContext } from "react";
import { AuthContext } from "../context";

export default function AppRouter() {
  const {isAuth} = useContext(AuthContext)
  return isAuth ? (
    <BrowserRouter>
      <Routes>
        {privateRoutes.map(({ path, element: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Navigate to="/intro" replace />} />
      </Routes>
    </BrowserRouter>
  ) : (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map(({ path, element: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Navigate to="/intro" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
