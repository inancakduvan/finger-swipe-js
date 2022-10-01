import './App.css';
import FingerJs from './components/FingerJs';

function App() {

  return (
    <div className="App">
      <FingerJs
        onRight={() => {
          alert('hey right');
        }}
        onLeft={() => {
          alert('hey left!')
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
