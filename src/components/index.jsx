import React, {useState} from "react";

const FingerJs = ({
  children,
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
      const position = direction === 'horizontal' ? event.touches[0].clientX : event.touches[0].clientY;
      setInitialPosition(position);
    }
  
    const onTouchMove = (event) => {
      const position = direction === 'horizontal' ? event.touches[0].clientX : event.touches[0].clientY;
      setFinalPosition(position);
    }
  
    const onTouchEnd = () => {
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
      >
        {children}
      </div>
    )
}

export default FingerJs;