import { useEffect } from "react";

const useOnClickOutside = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  cb: () => void
) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        cb();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, cb]);
};

export default useOnClickOutside;
