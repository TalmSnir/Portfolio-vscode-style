import { useRef, useEffect } from 'react';

export default function useEventListener(
  eventName,
  callback,
  element = window
) {
  const callbackRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;
    const handler = event => callbackRef.current(event);
    element.addEventListener(eventName, handler);
    return () => {
      element.removeEventListener(eventName, handler);
    };
  }, [eventName, element]);
}
