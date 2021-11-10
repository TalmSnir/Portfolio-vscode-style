import { useEffect, useState } from 'react';

export default function useFetch(url = null) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (url) {
      fetch(url, { method: 'GET' })
        .then(res => res.json())
        .then(data => {
          setData(data);
        })
        .catch(err => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [url]);

  return { data, error, loading };
}
