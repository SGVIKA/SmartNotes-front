import IntroPage from "../pages/IntroPage/IntroPage"
import NoteIdPage from "../pages/NoteIdPage/NoteIdPage"
import NotesList from "../pages/NotesListPage/NotesList"

export const privateRoutes = [
    {path: '/notes', component: NotesList, exact: true},
    {path: '/notes/:id', component: NoteIdPage, exact: true},
]

export const publicRoutes = [
    {path: '/intro', component: IntroPage, exact: true},
]