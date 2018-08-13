import React, { Component } from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button } from 'reactstrap';
import VerticalHeader from '../../components/VerticalHeader';

class Login extends Component {

    handleValidSubmit(event, values) {
        this.props.login(values.email,values.password);
      }
      
      handleInvalidSubmit(event, errors, values) {
        
      }

    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <VerticalHeader />
                    <main className="col-sm-9 offset-sm-3 col-md-9 offset-md-3">
                        <div className="center_section">
                            <div className="middle_section">
                                <div className="col-sm-4 offset-sm-4">
                                    <AvForm className="form-signin" onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
                                        <p className="form-signin-heading">Log in</p>
                                        <AvField name="email" label="Email" className="form-control" type="email" placeholder="joe@email.com" required
                                            errorMessage="Please enter email Address."
                                            validate={{pattern: {value: '/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/', errorMessage: 'Please enter valid email address.'},}}
                                        />
                                        <AvField label="Password"  name="password" placeholder="Enter your Password" type="password" required 
                                            validate={{                        
                                            minLength: {value: 6, errorMessage: 'Your password must be minimum 6 characters'},
                                            }}
                                            errorMessage="Please enter password."
                                        />
                                        <label className="pull-right text-right"><a href="#">forgot Password?</a></label>
                                        <Button color="btn btn-lg btn-default btn-block mb30 mt50" className="px-4">Login</Button>
                                        <p><a href="#">Signup</a></p>
                                    </AvForm>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}
export default Login;