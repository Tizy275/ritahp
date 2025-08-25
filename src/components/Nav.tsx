import { useEffect } from "react";
import "./Nav.css";

export default function Nav() {
  // Optional: genaue Höhe als CSS-Variable setzen (für Anchor-Offsets)
  useEffect(() => {
    const nav = document.querySelector(".nav") as HTMLElement | null;
    if (!nav) return;

    const setHeight = () =>
      document.documentElement.style.setProperty("--navbar-height", `${nav.offsetHeight}px`);

    setHeight();
    const ro = new ResizeObserver(setHeight);
    ro.observe(nav);
    return () => ro.disconnect();
  }, []);

  return (
    <nav className="nav">
      <a href="#header">HOME</a>
      <a href="#about">ÜBER MICH</a>
      <a href="#prices">TERMINE & PREISE</a>
      <a href="#contact">KONTAKT</a>
    </nav>
  );
}
