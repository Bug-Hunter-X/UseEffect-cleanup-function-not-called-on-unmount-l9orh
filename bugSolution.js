```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component unmounting');
    };
  }, []);

  const handleUnmount = () => {
    setShouldRender(false);
  };

  if (!shouldRender) {
    return null; //Or a loading indicator if necessary
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={handleUnmount}>Unmount</button>
    </div>
  );
}
export default MyComponent;
```