import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import homePage from './containers/homePage';
import loginPage from './containers/loginPage';
import registerPage from './containers/registerPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={homePage} />
        <Route path="/login" component={loginPage} />
        <Route path="/signup" component={registerPage} />
      </Router>
    </div>
  );
}

export default App;
