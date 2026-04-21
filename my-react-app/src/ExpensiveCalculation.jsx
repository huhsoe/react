import React, { useMemo, useState } from 'react';

function ExpensiveCalculation() {
  const [numbers, setNumbers] = useState([5, 2, 9, 1, 7, 3]);
  const [count, setCount] = useState(0);

  const sortedNumbers = useMemo(() => {
    console.log('Выполняется тяжелое вычисление...');
    return [...numbers].sort((a, b) => a - b);
  }, [numbers]);

  const addNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    setNumbers((prevNumbers) => [...prevNumbers, randomNumber]);
  };

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Изменить count: {count}
      </button>

      <button onClick={addNumber}>Добавить число</button>

      <h3>Отсортированный массив:</h3>
      <p>{sortedNumbers.join(', ')}</p>
    </div>
  );
}

export default ExpensiveCalculation;