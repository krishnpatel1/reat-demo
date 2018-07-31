import React from 'react';

import './NotesList.css';

const NotesList = (props) => (
             <div>   
            <a className="list-group-item"><span className="close" onClick= {() => props.clicked(props.id) }>&times;</span>
                <div onClick={() => props.getNote(props.id)}> 
                <h4 className="list-group-item-heading">{props.title}</h4>
                <p className="list-group-item-text">{props.body}</p>
                </div>
                
            </a>
            </div>
        
);

export default NotesList;