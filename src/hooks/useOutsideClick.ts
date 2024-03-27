import React, { useEffect, useRef } from 'react';

const useOutsideClick = <T extends HTMLElement>(
  refs: React.RefObject<T>[],
  handler: () => void
) => {
  const savedHandlers = useRef<() => void>(handler);
  useEffect(() => {
    savedHandlers.current = handler;
  }, [handler]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      let clickedOutside = true;
      for (let i = 0; i < refs.length; i++) {
        if (refs[i].current?.contains(event.target as Node)) {
          clickedOutside = false;
          break;
        }
      }
      if (clickedOutside) {
        savedHandlers.current?.();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [refs]);
};

export default useOutsideClick;
