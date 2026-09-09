import React, { useEffect, useState } from 'react';

// Thin fixed bar at the very top of the viewport that fills left-to-right
// as the user scrolls down the page. Scroll position is read on scroll/resize
// via rAF so the fill stays smooth without spamming re-renders.
export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = null;

    const updateProgress = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const scrollable = scrollHeight - clientHeight;
      const percent = scrollable > 0 ? (scrollTop / scrollable) * 100 : 0;
      setProgress(percent);
      frame = null;
    };

    const onScroll = () => {
      if (frame === null) {
        frame = requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[60] bg-transparent">
      <div
        className="h-full bg-red-500"
        style={{
          width: `${progress}%`,
          transition: 'width 100ms linear',
        }}
      />
    </div>
  );
}
