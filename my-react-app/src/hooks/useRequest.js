import { useCallback, useState } from 'react';

function useRequest() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const request = useCallback(async (url, method = 'GET', body = null) => {
    setIsLoading(true);
    setError('');

    try {
      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      };

      if (body) {
        options.body = JSON.stringify(body);
      }

      const response = await fetch(url, options);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Произошла ошибка запроса');
      }

      return data;
    } catch (requestError) {
      setError(requestError.message);
      throw requestError;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    request,
    isLoading,
    error,
  };
}

export default useRequest;