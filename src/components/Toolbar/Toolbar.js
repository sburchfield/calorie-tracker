import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'

import './Toolbar.css';

const toolbar = props => (
  <section className="toolbar">
    <nav className="toolbar_nav" id="toolbar_nav">
    <div>
      <DrawerToggleButton click={props.drawerClickHandler} />
    </div>
    <div className="toolbar_nav_items">
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/calories">Calories</a></li>
        <li><a href="/weight">Weight</a></li>
      </ul>
    </div>
    </nav>
  </section>
);


export default toolbar
