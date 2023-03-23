import React from 'react';

import { auth } from '../services/firebase'

import '../App.css';

const Home = ({ user }) => {
  return (
    <div className="home-container">
      <h1>Welcome to pokemon forum, <span></span>{user.displayName}</h1>
      <img src={user.photoURL} alt="" />
      <button className="button signout" onClick={() => auth.signOut()}>Sign out</button>
    </div>
  )
}

export default Home;
