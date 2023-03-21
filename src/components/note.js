import React, { useContext, useReducer, useRef } from "react";
import NotesContext from "../contexts/notes-context";



const Note = () => {

    const titleRef = useRef();
    const noteRef = useRef();
    const notesCtx = useContext(NotesContext);

    const formSubmitHandler = (event) => {
        event.preventDefault();
        notesCtx.addNote({ title: titleRef.current.value, note: noteRef.current.value });
    }
    
    const removeNote = (event) => {
        notesCtx.deleteNote(event.target.value);
    }

    return <div>
        <div>
            <ul>
                {notesCtx.notes.map(note => <li key={note.title}><span>{note.note}</span><button onClick={removeNote} value={note.title}>remove</button></li>)}
            </ul>
        </div>
        <form onSubmit={formSubmitHandler}>
            <div>
                <label>Title</label>
                <input type="text" ref={titleRef} ></input>
            </div>
            <div>
                <label>Note</label>
                <input type="text" ref={noteRef}></input>
            </div>
            <button type="submit">save</button>
        </form>
    </div>
}

export default React.memo(Note);