import React, {useState} from "react";

const FingerJs = ({
  children,
  direction="horizontal",
  onLeft=() => null,
  onRight=() => null,
  onTop=() => null,
  onBottom=() => null
}) => {
    const [initialPosition, setInitialPosition] = useState(0);
    const [finalPosition, setFinalPosition] = useState(0);
  
    const onTouchStart = (event) => {
      setInitialPosition(event.touches[0].clientX);
    }
  
    const onTouchMove = (event) => {
      setFinalPosition(event.touches[0].clientX);
    }
  
    const onTouchEnd = (event) => {
      if(finalPosition !== 0) {
            if(initialPosition - finalPosition < -50) {
                onRight();
            } else if (initialPosition - finalPosition > 50) {
                onLeft();
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