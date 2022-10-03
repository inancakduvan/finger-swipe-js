import './App.css';
import FingerJs from 'finger-swipe-js';
import { useEffect, useState } from 'react';

function App() {
  const [text, setText] = useState('Swipe vertically');

  return (
    <div className="App">
      <FingerJs
        direction='vertical'
        style={{width: '100%'}}
        onRight={() => {
          setText('Swiped right')
        }}
        onLeft={() => {
          setText('Swiped left')
        }}
        onUp={() => {
          setText('Swiped up');
        }}
        onDown={() => {
          setText('Swiped down');
        }}
      >
        <div className='demo-container'>
          {text}
        </div>
      </FingerJs>
    </div>
  );
}

export default App;
