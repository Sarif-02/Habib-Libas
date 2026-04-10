import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const d = document.documentElement;
      setPct((window.scrollY / (d.scrollHeight - d.clientHeight)) * 100);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] pointer-events-none">
      <div
        className="h-full transition-[width_.1s_linear]"
        style={{ width: `${pct}%`, background: 'linear-gradient(90deg,#775a19,#c5a059,#e9c176)' }}
      />
    </div>
  );
}
