import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  // getting from data layer
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className='app'>
      {!user ? (
        <Login />
      ) : (
        <div className='app__body'>
          <Router>
            {/* Sidebar */}
            <Sidebar />

            <Switch>
              <Route path='/rooms/:roomId'>
                {/* Chat Component */}
                <Chat />
              </Route>

              <Route path='/'></Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
