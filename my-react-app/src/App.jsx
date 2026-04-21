import { useEffect, useRef, useState } from 'react';
import LoginForm from './LoginForm';
import RenderCounter from './RenderCounter';
import CustomButton from './CustomButton';

function App() {
  const buttonRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    buttonRef.current?.focus();
  }, []);

  return (
    <div>
      <h1>Работа с формами</h1>

      <h2>Задание 1</h2>
      <LoginForm />

      <h2 style={{ marginTop: '20px' }}>Задание 2</h2>
      <RenderCounter />
      <button onClick={() => setCount((prev) => prev + 1)}>
        Вызвать ререндер ({count})
      </button>

      <h2 style={{ marginTop: '20px' }}>Задание 3</h2>
      <CustomButton ref={buttonRef}>Кнопка с ref</CustomButton>
    </div>
  );
}

export default App;