import { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    if (window.innerWidth < 1024) return;
    const dot  = document.getElementById('cur-dot');
    const ring = document.getElementById('cur-ring');
    if (!dot || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top  = my + 'px';
    };

    let rafId;
    const animate = () => {
      rx += (mx - rx) * 0.13;
      ry += (my - ry) * 0.13;
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    rafId = requestAnimationFrame(animate);

    const grow   = () => { ring.style.width = '48px'; ring.style.height = '48px'; };
    const shrink = () => { ring.style.width = '32px'; ring.style.height = '32px'; };
    document.querySelectorAll('a,button,[data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div id="cur-dot"  className="hidden lg:block" />
      <div id="cur-ring" className="hidden lg:block" />
    </>
  );
}
