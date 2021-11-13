import { useState } from 'react';
import { useEventListener } from '.';

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: null,
    height: null,
  });
  useEventListener('resize', () =>
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
  );

  return windowSize;
}
