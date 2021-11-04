import { useEventListener } from '.';

export default function useClickOutside(ref, callback) {
  useEventListener(
    'click',
    e => {
      if (!ref.current || ref.current.contains(e.target)) return;
      callback(e);
    },
    document
  );
}
