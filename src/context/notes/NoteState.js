import NoteContext from "./noteContext"
import { useState } from "react"

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "62d484fdc26623c70b854d01",
            "user": "62d48412c8b712149a4abe29",
            "title": "MERN stack",
            "description": "Watch harry playlist compelete",
            "tag": "Project",
            "date": "2022-07-17T21:54:05.110Z",
            "__v": 0
        },
        {
            "_id": "62d484fdc26623c70b854d01",
            "user": "62d48412c8b712149a4abe29",
            "title": "MERN stack",
            "description": "Watch harry playlist compelete",
            "tag": "Project",
            "date": "2022-07-17T21:54:05.110Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial);
    return (
        <NoteContext.Provider value={{ notes, setNotes }} >
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;