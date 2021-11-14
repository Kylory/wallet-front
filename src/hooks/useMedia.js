import { useEffect, useState } from 'react';
export const useMedia = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);
  useEffect(() => {
    let media = window.matchMedia(query); // < 500px
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    let listener = () => setMatches(media.matches);
      media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);
  return matches;
}
