import React from 'react';

import Application from './Components/Application';

import UserProvider from './providers/UserProvider';

import './App.css';

function App() {
  return (
    <div className="App container">
      <div className='title'>
        <h2>Welcome To Google Sign in React</h2>
      </div>
      
      <UserProvider>
          <Application />
       </UserProvider>
    </div>
  );
}

export default App;
