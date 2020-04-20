import React from 'react';
import SearchBar from './SearchBar.js';
import MessagesButton from './MessagesButton.js';
import NotificationsButton from './NotificationsButton.js';
import HomeButton from './HomeButton.js';

function NavBar(){
  return(
    <React.Fragment>
      <HomeButton />
      <NotificationsButton/>
      <MessagesButton/>
      <SearchBar/>
    </React.Fragment>
  );
}

export default NavBar;