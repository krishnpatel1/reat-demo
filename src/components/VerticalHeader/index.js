import React from 'react';
import logo from '../../public/images/logo.svg';
const VerticalHeader = () => (
        <div className="col-sm-3 col-md-3 bg-faded sidebar"> 
          <div className="center_section">
            <div className="middle_section">
              <ul className="navbar-nav mr-auto"> 
                <li className="nav-item">
                  <a className="nav-link" href="#"><img src={logo} width="165" height="55" alt="Image"/></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Billing Manager</a>
                </li> 
              </ul>
              <div></div>
            </div>
          </div> 
        </div>
);

export default VerticalHeader;