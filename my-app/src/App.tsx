import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dec21_2022 from './Dec21_2022';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Hello World! </h1>
        <p>Welcome to the blog <i>Learning Bootstrapped</i></p>

      </header>
      <div className='BlogContainer'>
        <Dec21_2022/>
      </div>
    </div>
  );
}

export default App;
