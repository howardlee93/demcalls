import React from 'react';
import '../assets/App.css';
import {NavLink, Route, Switch} from 'react-router-dom';

import About from './about';

import Email from './contact/email';

import Other from './other';

import Modal from './modal';



//test

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <Modal/>
      <h1> End qualified immunity</h1>
      <p> Contact your representatives about ending qualified immunity, a legal doctrine that enables police brutality 
      and hinders public accountability</p>
  

      <div className="nav">

        <NavLink to="about" className="link">About</NavLink>
        <NavLink to ="email" className="link">Look up your rep</NavLink>
        
        <NavLink to="create" className="link">Other ways to help</NavLink>


      </div>
  
      </header>

      <Switch>

        <Route path="/about" component={About}/>

        <Route path="/email" component={Email}/>

        <Route path="/create" component={Other}/>

      </Switch>
       <footer className="main-footer">


                <p> Copyright Howard Lee {new Date().getFullYear()}</p>

                <div className="footer-links">
                <a href="https://github.com/howardlee93" target="_blank">Github</a>
                <a href="https://www.linkedin.com/in/leehoward93/" target="_blank" >LinkedIn</a>
                <a href="https://howardlee93.github.io/" target="_blank">Portfolio</a>
                </div>

      </footer>

    </div>
  );
}

export default App;
