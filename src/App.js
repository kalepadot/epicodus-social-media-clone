import React from 'react';
import NavBar from './NavBar.js';
import Profile from './Profile.js';
import NewsFeed from './NewsFeed.js';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Profile />
      <About />
      <NewsFeed />
    </React.Fragment>
  );
}

export default App;
