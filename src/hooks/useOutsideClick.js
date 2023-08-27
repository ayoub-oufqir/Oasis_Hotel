import { useEffect, useRef } from "react";

function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();
  useEffect(() => {
    const handleClick = (e) => {
      // check if there is an element in the ref and if we acctually clicked outside the modal
      if (ref.current && !ref.current.contains(e.target)) {
        console.log("Click outside");
        handler();
      }
    };
    document.addEventListener("click", handleClick, listenCapturing);
    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [handler, listenCapturing]);

  return ref;
}

export default useOutsideClick;
