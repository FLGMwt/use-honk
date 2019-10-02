Warning: I'm coding this blind on a phone on a train it probably doesn't work

# Usage

Honk

```jsx
import React from 'react';
import useHonk from 'use-honk';

const App = () => {
  const [honkRef] = useHonk();

  return (
    <>
      <ul>
        <li><a href="/">No Honk</a></li>
      </ul>
      <ul ref={honkRef}>
        <li><a href="/">Honk</a></li>
      </ul>
    </>
  );
}
```

It doesn't handle having nested honk refs so... Don't do that.
