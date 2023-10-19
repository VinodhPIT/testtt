import { useState, useEffect, useRef } from "react";

export function useToggle(initialValue = false) {
  const [toggle, setToggle] = useState(initialValue);
  const [toggleLocation, setToggleLocation] = useState(initialValue);
  const containerRef = useRef(null);

  useEffect(() => {
    // const handleOutsideClick = (e) => {
    //   if (containerRef.current && !containerRef.current.contains(e.target)) {
    //     setToggle(false);
    //     setToggleLocation(false);
    //   }
    // };

    // document.addEventListener("mousedown", handleOutsideClick);

    if (toggle || toggleLocation) {
      document.body.classList.add("toggleModel");
    } else {
      document.body.classList.remove("toggleModel");
    }

    return () => {
      document.body.classList.remove("toggleModel");
      // document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [toggle, toggleLocation]);

  const onToggle = () => {
    setToggle(!toggle);
    setToggleLocation(false);
  };

  const onToggleLoc = () => {
    setToggleLocation(!toggleLocation);
    setToggle(false);
  };

  return [toggle, onToggle, onToggleLoc, toggleLocation,];
}
