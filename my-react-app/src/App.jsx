import { lazy, Suspense, useState } from 'react';

const BigComponent = lazy(() => import('./BigComponent'));

function App() {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <div>
      <button onClick={() => setShowComponent(true)}>
        Показать компонент
      </button>

      {showComponent && (
        <Suspense fallback="Загрузка компонента...">
          <BigComponent />
        </Suspense>
      )}
    </div>
  );
}

export default App;