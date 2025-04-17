// ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // delay to wait for render/layout shift if needed
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [location]);

  return null;
}
