import React, { useEffect, useState } from 'react';

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
        event.preventDefault()
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const followerStyle = {
    
    left: `${mousePosition.x}px`,
    top: `${mousePosition.y}px`,
    width: '50px',
    height: '50px',
    backgroundColor: 'white',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)', // Center the div at the mouse position
    //pointerEvents: 'none' ,// Make sure the div does not interfere with mouse events
    // position:'fixed',
    filter: 'blur(5px)',
    pointerEvents: 'none' 
  };

  return (
    <div>
      <div style={followerStyle} className='lumus' />
    </div>
  );
};

export default MouseFollower;
