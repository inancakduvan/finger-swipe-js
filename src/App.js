import './App.css';
import FingerJs from 'finger-swipe-js';
import { useState } from 'react';

function App() {
  const [textVertical, setTextVertical] = useState('Swipe vertically');
  const [textHorizontal, setTextHorizontal] = useState('Swipe horizontally');

  return (
    <div className="App">
      <h3>Finger Swipe JS - Demo</h3>

      <FingerJs
        direction='vertical'
        style={{width: '100%'}}
        onUp={() => {
          setTextVertical('Swiped up');
        }}
        onDown={() => {
          setTextVertical('Swiped down');
        }}
      >
        <div className='demo-container-vertical'>
          {textVertical}
        </div>
      </FingerJs>

      <FingerJs
        direction='horizontal'
        style={{width: '100%'}}
        onRight={() => {
          setTextHorizontal('Swiped right')
        }}
        onLeft={() => {
          setTextHorizontal('Swiped left')
        }}
      >
        <div className='demo-container-horizontal'>
          {textHorizontal}
        </div>
      </FingerJs>
    </div>
  );
}

export default App;
