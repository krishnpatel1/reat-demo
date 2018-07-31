import React, { Component } from 'react';

import Notes from './containers/Notes';
import Header from './components/Header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Notes />
      </div>
    );
  }
}

export default App;
