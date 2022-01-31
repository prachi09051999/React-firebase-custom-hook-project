import { useState, useCallback } from 'react';

const useRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendHttp = useCallback(async (requestType,applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        requestType.url, {
          method: requestType.method ? requestType.method : 'GET',
          body: requestType.body ? JSON.stringify(requestType.body) : null,
          header: requestType.header ? requestType.header : {},
        }
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      applyData(data);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  },[]);

  return {
    isLoading,
    error,
    sendHttp
  };
}

export default useRequest;