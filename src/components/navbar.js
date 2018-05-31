import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const checkActive = (match, location) => {
    console.log('checkActive');
    console.log(match, location);
    return false;
  }
  
  class NavBar extends Component {
    render() {
      return (
        <div className="App">
          <NavLink 
          to='/home'
          activeClassName="active"
          isActive={checkActive}
          >Home</NavLink>
          <NavLink 
          to='/contact'
          activeClassName="active"
          activeStyle={{ color: 'red'}}
          >Contact</NavLink>
        </div>
      );
    }
  }
  
  export default NavBar;