import './App.css';
import FingerJs from './components/FingerJs';

function App() {
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
          alert('hey up!')
        }}
        onDown={() => {
          alert('hey down!')
        }}
      >
        <div className='App'>
          sada
        </div>
      </FingerJs>
    </div>
  );
}

export default App;
