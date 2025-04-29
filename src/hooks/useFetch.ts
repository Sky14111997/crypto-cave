// src/hooks/useFetch.ts
import { useState, useEffect } from 'react';

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T>();
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setData(json))
      .catch(console.error);
  }, [url]);
  return { data };
}
