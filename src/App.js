import './App.css';
import FingerJs from 'finger-swipe-js';

function App() {
  return (
    <div className="App">
      <FingerJs
        direction='horizontal'
        onRight={() => {
          alert('hey right');
        }}
        onLeft={() => {
          alert('hey left!')
        }}
        onUp={() => {
          alert('hey up!')
        }}
        onDown={() => {
          alert('hey down!')
        }}
      >
        <div className='App'>
          Swipe Horizontal 
        </div>
      </FingerJs>
    </div>
  );
}

export default App;
