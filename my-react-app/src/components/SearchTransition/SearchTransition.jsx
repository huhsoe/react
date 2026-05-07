import { useState, useTransition } from 'react';

const bigArray = Array.from(
  { length: 3000 },
  (_, i) => `Элемент ${i + 1}`
);

export default function SearchTransition() {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState(bigArray);

  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;

    setQuery(value);

    startTransition(() => {
      const result = bigArray.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );

      setFiltered(result);
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>useTransition example</h1>

      <input
        type="text"
        placeholder="Поиск..."
        value={query}
        onChange={handleChange}
      />

      {isPending && <p>Загрузка...</p>}

      <ul>
        {filtered.slice(0, 30).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}