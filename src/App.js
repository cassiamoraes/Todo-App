import banner from './images/bg-desktop-dark.jpg'
import React from 'react';
import Form from "./components/Forms"
import Todo from "./components/Todo"

function App() {
  return (
    <div className="App">
      <header>
      <img src={banner} className="App-banner" alt="banner" />
      </header>

      <div className='container'>
        <Form />
        <Todo />
      </div>
    </div>
 );

}

export default App;
