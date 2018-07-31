import React, { Component } from 'react';

class AddNote extends Component {
    state = {
        title: '',
        body: '',
        display: 'none',
        buttonText: 'Save',
        id: ''
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.noteData !== undefined && nextProps.noteData !== ""){   
            
            if(this.state.id === nextProps.noteData.id){
                this.display()
            }else{
                this.setState({
                    title:  nextProps.noteData.title,
                    body:  nextProps.noteData.body,
                    display: 'block',
                    id:  nextProps.noteData.id,
                    buttonText: 'Update'
                });
            }
            
        }
    }


    titleChangedHandler = (event) => {
        this.setState({title: event.target.value});
    }

    bodyChangedHandler = (event) => {
        this.setState({body: event.target.value});
    }

    display = () => {
        this.setState({
        title: '',
        body: '',
        display: 'block',
        buttonText: 'Save',
        id: ''
    });
    }

    render () {
        return (
            <div>
                <div className="col-xs-8">
                    <div className="row">
                        <button type="button" className="btn btn-default pull-right" onClick={this.display}> + Add Note</button>
                    </div>
                    <div className="row" style= {{"display":this.state.display}}>
                        <div className="form-group">
                            <label htmlFor="title">Title:</label>
                            <input type="text" className="form-control" id="title" onChange={this.titleChangedHandler} value={this.state.title} />
                            </div>
                            <div className="form-group">
                            <label htmlFor="body">Body:</label>
                            <textarea className="form-control" rows="10" id="body" onChange={this.bodyChangedHandler} value={this.state.body}></textarea>
                        </div>     
                    </div>
                    <div className="row" style= {{"display":this.state.display}}>
                        <button type="button" className="btn btn-primary pull-right" onClick={() =>{
                            this.props.noteAdded(this.state.title, this.state.body, this.state.id);
                            this.setState({title: "",body:"",display:'none'});
                        }} >{this.state.buttonText}</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddNote;