import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as CreateActions from "./store/actions/index";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import './public/css/dist.css';
// import Notes from './containers/Notes';
import BarChart from './containers/Chart';
import Header from './components/Header/Header';
import SignUp from './containers/auth/signup';
import Login from './containers/auth/login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path='/login' name="Login" component={Login} />
            <Route exact path="/signup" name="Signup" component={SignUp} />
            <Route path="/" name="Home" component={BarChart} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    auth:state.auth
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    authCheck:dispatch(CreateActions.authStateCheck())
  }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(App);
