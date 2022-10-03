import './App.css';
import FingerJs from 'finger-swipe-js';
import { useEffect, useState } from 'react';

const Modal = ({setIsModalOpen}) => {
  return (
    <div className='modal'>
      <FingerJs
        direction='vertical'
        style={{width: '100%'}}
        onDown={() => {
          setIsModalOpen(false);
        }}
      >
        <div className='inner'>
            Swipe down to close the modal!
        </div>
      </FingerJs>
    </div>
  )
}

function App() {
  const [textVertical, setTextVertical] = useState('Swipe vertically');
  const [textHorizontal, setTextHorizontal] = useState('Swipe horizontally');

  const [hasAnimation, setHasAnimation] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if(hasAnimation) {
      const timeout = setTimeout(() => {
        setIsDeleted(true);
        clearTimeout(timeout);
      }, 650)
    }
  }, [hasAnimation])

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

      {
        !isDeleted &&
        <FingerJs
          direction='horizontal'
          style={{width: '100%'}}
          onLeft={() => {
            setHasAnimation(true);
          }}
        >
          <div className={'demo-container-delete ' + (hasAnimation ? 'animating' : '')}>
            Swipe left to delete me!
          </div>
        </FingerJs>
      }

        <FingerJs
          direction='vertical'
          style={{width: '100%'}}
          onUp={() => {
            setIsModalOpen(true);
          }}
        >
          <div className='demo-container-modal'>
            Swipe up to open a modal!
          </div>
        </FingerJs>

        {
          isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />
        }
    </div>
  );
}

export default App;
