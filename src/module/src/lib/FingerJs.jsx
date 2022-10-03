import React, {useState} from "react";

const FingerJs = ({
  children,
  style={},
  direction="horizontal",
  motionSensivity=50,
  onLeft=() => null,
  onRight=() => null,
  onUp=() => null,
  onDown=() => null
}) => {
    const [initialPosition, setInitialPosition] = useState(0);
    const [finalPosition, setFinalPosition] = useState(0);
  
    const onTouchStart = (event) => {
      event.preventDefault();

      const position = direction === 'horizontal' ? event.touches[0].clientX : event.touches[0].clientY;
      setInitialPosition(position);
    }
  
    const onTouchMove = (event) => {
      event.preventDefault();

      const position = direction === 'horizontal' ? event.touches[0].clientX : event.touches[0].clientY;
      setFinalPosition(position);
    }
  
    const onTouchEnd = (event) => {
      event.preventDefault();

      if(finalPosition !== 0) {
            if(initialPosition - finalPosition < -motionSensivity) {
                (direction === 'horizontal') ? onRight() : onDown();
            } else if (initialPosition - finalPosition > motionSensivity) {
              (direction === 'horizontal') ? onLeft() : onUp();
            } else {
                return null
            }
        }
    }

    return (
      <div 
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={style}
      >
        <div style={{touchAction: direction === 'horizontal' ? 'pan-y' : 'pan-x'}}>
          {children}
        </div>
      </div>
    )
}

export default FingerJs;