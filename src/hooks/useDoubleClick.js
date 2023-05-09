import { useCallback, useRef } from 'react';

// ----------------------------------------------------------------------

export default function useDoubleClick({ click, doubleClick, timeout = 250 }) {
  const clickTimeout = useRef();

  const clearClickTimeout = () => {
    if (clickTimeout) {
      clearTimeout(clickTimeout.current);
      clickTimeout.current = null;
    }
  };

  return useCallback(
    (event) => {
      clearClickTimeout();
      if (click && event.detail === 1) {
        clickTimeout.current = setTimeout(() => {
          click(event);
        }, timeout);
      }
      if (event.detail % 2 === 0) {
        doubleClick(event);
      }
    },
    [click, doubleClick, timeout]
  );
}
