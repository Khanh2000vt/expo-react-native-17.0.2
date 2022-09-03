import { useEffect, useState } from "react";

function useDebounce(value: any, delay: number = 500) {
  const [debounceValue, setDebounceValue] = useState<any>(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounceValue(value), delay);

    return () => clearTimeout(handler);
  }, [value]);

  return debounceValue;
}

export default useDebounce;
