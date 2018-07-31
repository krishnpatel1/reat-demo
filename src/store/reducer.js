import * as actionTypes from './actions';

const initialState = {
    notes: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_NOTE:
            if( action.noteData.id !== "" &&  action.noteData.id !== undefined){
                
                let newNotes = [...state.notes];
                let  noteIndex = newNotes.findIndex(note => note.id === action.noteData.id )
                newNotes[noteIndex]={
                    id:noteIndex,
                    title: action.noteData.title,
                    body: action.noteData.body
                }
                return {
                    ...state,
                    notes: [...newNotes]
                }
            }else{

                const newNote = {
                    id: Math.random(), // not really unique but good enough here!
                    title: action.noteData.title,
                    body: action.noteData.body
                }
                return {
                    ...state,
                    notes: state.notes.concat( newNote )
                }
            }
            
        case actionTypes.REMOVE_NOTE:
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.noteId)
            }
    }
    return state;
};

export default reducer;