import { useEffect, useState } from 'react';

function withLoading(WrappedComponent) {
  return function ComponentWithLoading(props) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
      return <p>Загрузка...</p>;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withLoading;