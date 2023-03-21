import React, {useReducer} from "react";

const NotesContext = React.createContext({
    notes: [],
    addNote: ({}) => { },
    deleteNote: (id) => { }
});

const noteReducer = (prevSate, action) => {
    console.log(prevSate);
    if (action.type === 'ADD') {
        return { notes: [...prevSate.notes, action.value] };
    }

    if (action.type === 'DEL') {

        return { notes: [...prevSate.notes.filter(note => note.note !== action.value)] };
    }
};

export const NotesContextProvider = (props) => {

    const [notes, notesDispacth] = useReducer(noteReducer, { notes: [] })

    const addNote = (note) => {
        notesDispacth({ type: 'ADD', value: note });
    } 

    const removeNote = (title) => {
        notesDispacth({ type: 'DEL', value: title });
    }


    return <NotesContext.Provider value={{notes:notes.notes, addNote: addNote, deleteNote: removeNote}}>
        {props.children}
    </NotesContext.Provider>
}

export default NotesContext;