import logo from './logo.svg';
import './App.css';

function App()
{
  const name ='Akash'
  return (
    <div>
    <div>
      {/* <h1>Hello from Punjab</h1> */}
      <h1 style = {{
        textAlign: 'center',
        color: 'black',
        backgroundColor: 'lightblue',
        padding: '10px',
        borderRadius: '5px',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer'
      }}>Hello, {name}!</h1>
    </div>

    <div>
      <p>
        I'm learning React.js and this is my first React App.
      </p>
    </div>
    </div>
  );
}

export default App;
