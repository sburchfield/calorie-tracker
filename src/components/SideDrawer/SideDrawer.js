import React from 'react';

import './SideDrawer.css'

const sideDrawer = props => {

  let drawerClasses = ['sideDrawer'];

  if(props.show){
    drawerClasses = 'sideDrawer open';
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li><a href="/home" onClick={props.drawerClickHandler}>Home</a></li>
        <li><a href="/weight" onClick={props.drawerClickHandler}>Weight</a></li>
        <li><a href="/calories" onClick={props.drawerClickHandler}>Calories</a></li>
      </ul>
    </nav>
  )
};

export default sideDrawer
