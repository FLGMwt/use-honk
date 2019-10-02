import React from 'react';
import useHonk from 'use-honk';

const App = () => {
  const [honkRef] = useHonk();

  return (
    <>
      <ul>
        <li>
          <a href="/">No Honk</a>
        </li>
      </ul>
      <ul ref={honkRef}>
        <li>
          <a href="/">Honk</a>
        </li>
      </ul>
    </>
  );
};

export default App;
