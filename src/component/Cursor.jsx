import React from 'react';


export function Cursor({width,  height}) {
    const [showCursor, setShowCursor] = React.useState(false);

      React.useEffect(() => {
        const cursorInterval = setInterval(() => {
          setShowCursor(prev => !prev);
        }, 450); 
    
        return () => clearInterval(cursorInterval);
      }, []);

 return <span className={`cursor ${showCursor ? 'visible' : 'hidden'}`} style={{width, height}}/>
}