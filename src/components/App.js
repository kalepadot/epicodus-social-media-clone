import React from 'react';
import NavBar from './NavBar.js';
import Profile from './Profile.js';
import NewsFeed from './NewsFeed.js';
import About from './About.js';
import SuggestedFriends from './SuggestedFriends.js';
import '../App.css';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <NavBar />
        <div class="columns">
          <div className="column1">
            <div className="box">
              <Profile />
            </div>
            <div className="box">
              <About />
            </div>
          </div>
          <div className="column2">
            <div className="box">
              <NewsFeed />
            </div>
          </div>
          <div className="column3">
            <div className="box">
              <SuggestedFriends />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;