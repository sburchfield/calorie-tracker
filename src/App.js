import { useState } from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

import './App.css';



function App() {

  const [sideDrawerOpen, setsideDrawerOpen] = useState(false);

 const drawerToggleClickHandler = () => {
    setsideDrawerOpen(!sideDrawerOpen)
  }

  const backdropClickHandler = () => {
    setsideDrawerOpen(false)
  };

  let backdrop;

  if(sideDrawerOpen){
    backdrop = <Backdrop click={backdropClickHandler}/>
  }

  return (
    <div className="App">
    <Toolbar drawerClickHandler = {drawerToggleClickHandler}/>
    <SideDrawer show={sideDrawerOpen} drawerClickHandler = {drawerToggleClickHandler}/>
    {backdrop}
      <header className="App-header">
        <h1>Calorie Tracker</h1>
        <p>Coming Soon!</p>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
