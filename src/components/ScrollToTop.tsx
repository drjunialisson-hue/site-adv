import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash, scroll to that element
    if (hash) {
      // Longer delay when navigating from different page to ensure page is fully loaded
      const delay = pathname === '/' ? 100 : 300;
      
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const headerOffset = 100; // Account for fixed header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, delay);
      return;
    }

    // Otherwise, scroll to top when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" as ScrollBehavior,
    });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;

