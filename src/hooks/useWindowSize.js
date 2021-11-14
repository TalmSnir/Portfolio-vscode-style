import { useState, useEffect } from 'react';
import { useEventListener } from '.';

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: null,
    height: null,
  });
  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);
  useEventListener('resize', () =>
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
  );

  return windowSize;
}
