import React from 'react';

import { auth } from '../services/firebase'

import ThreadPage from './ThreadPage';

import './HomePage.css';

const Home = ({ user }) => {
  return (
    <div className="home-container">
      <h1>Welcome <span></span>{user.displayName}</h1>
      <img src={user.photoURL} alt="" />
      <button className="button signout" onClick={() => auth.signOut()}>Sign out</button>
      <ThreadPage/>
    </div>
  )
}

export default Home;
