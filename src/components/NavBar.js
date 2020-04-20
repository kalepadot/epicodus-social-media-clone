import React from 'react';
import SearchBar from './SearchBar.js';
import MessagesButton from './MessagesButton.js';
import NotificationsButton from './NotificationsButton.js';
import HomeButton from './HomeButton.js';

function NavBar(){
  return(
    <React.Fragment>
      <div class="nav-bar">
        <div className="nav-buttons">
          <HomeButton />
          <NotificationsButton/>
          <MessagesButton/>
        </div>
        <div className="search-bar">
          <SearchBar/>
        </div>
      </div>
      <hr/>
    </React.Fragment>
  );
}

export default NavBar;