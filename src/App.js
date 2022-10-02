import './App.css';
import FingerJs from 'finger-swipe-js';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('Swipe vertically');

  return (
    <div className="App">
      <FingerJs
        direction='vertical'
        onRight={() => {
          alert('hey right');
        }}
        onLeft={() => {
          alert('hey left!')
        }}
        onUp={() => {
          setText('Swiped up');
        }}
        onDown={() => {
          setText('Swiped down');
        }}
      >
        <div className='App'>
          {text}
        </div>
      </FingerJs>
    </div>
  );
}

export default App;
