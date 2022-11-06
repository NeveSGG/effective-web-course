import React, { useState, FC } from 'react';

const App: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <button
          onClick={() => setCount((oldCount) => oldCount + 1)}
          type="button"
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p>Click on the Vite and React logos to learn more</p>
    </div>
  );
};

export default App;
