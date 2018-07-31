import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddNote from "../components/AddNote/AddNote";
import NotesList from "../components/NotesList/NotesList";

import * as actionTypes from '../store/actions';

class Notes extends Component {
    state= {
        noteData: ""
    }

    onGetNote = (id)=>{
       let  noteIndex = this.props.notes.findIndex(note => note.id === id )
       this.setState({noteData:  this.props.notes[noteIndex]})
    }
    render () {
        let noteList= "Not list available. Please add it.";
        if(this.props.notes.length > 0 ){
            noteList = this.props.notes.map(note => (
                <NotesList 
                    key={note.id}
                    title={note.title} 
                    body={note.body} 
                    clicked = {() => this.props.onRemovedNote(note.id) }
                    getNote = {() => this.onGetNote(note.id) }/>  
            ))
        }
        return (
            <div className="col-xs-12">
                <div className="col-xs-4">
                    <div className="list-group">
                        {noteList}
                    </div>
                </div>
               <AddNote  noteAdded={this.props.onAddedNote} noteData={ this.state.noteData } />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddedNote: (title, body, id) => dispatch({type: actionTypes.ADD_NOTE, noteData: {title, body, id}}),
        onRemovedNote: (id) => dispatch({type: actionTypes.REMOVE_NOTE, noteId: id}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);