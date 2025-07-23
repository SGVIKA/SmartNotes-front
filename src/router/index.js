import IntroPage from "../pages/IntroPage/IntroPage"
import NoteIdPage from "../pages/NoteIdPage/NoteIdPage"
import NotesList from "../pages/NotesListPage/NotesList"

export const privateRoutes = [
    {path: '/notes', element: NotesList},
    {path: '/notes/:id', element: NoteIdPage},
    {path: '/intro', element: IntroPage}
]

export const publicRoutes = [
    {path: '/intro', element: IntroPage}
    
]