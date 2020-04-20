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
      <NavBar />
      <Profile />
      <About />
      <NewsFeed />
      <SuggestedFriends />
    </React.Fragment>
  );
}

export default App;