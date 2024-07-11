import logo from './logo.svg';
import './App.css';
import { Component} from "react";

class App extends  Component 
{
  name = "Akash";
  render()
  {
    return (
      <>
      <div>
        <h1>Hello! i am {this.name} from Punjab</h1>
        <p>I'm learning React.js and this is my first React App.</p>
      </div>

      <div>
        <p>This paragraph and name is: {this.name}</p>
      </div>

      </>
    );
  }
}

export default App;
