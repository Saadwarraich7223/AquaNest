import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ToTopScroller = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top whenever pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ToTopScroller;
