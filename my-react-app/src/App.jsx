import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const decrease = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const increase = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Счётчик: {count}</h1>

      <button onClick={decrease}>-</button>
      <button onClick={increase} style={{ marginLeft: '10px' }}>
        +
      </button>

      {count === 0 && (
        <p style={{ color: 'red' }}>
          Пожалуйста, измените количество, оно не может быть равно 0
        </p>
      )}
    </div>
  );
}

export default App;