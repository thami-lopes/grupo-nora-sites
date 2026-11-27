"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

const NavContext = createContext(null);

export function NavProvider({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);
  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const toggleDrawer = useCallback(() => setDrawerOpen((v) => !v), []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
  }, [drawerOpen]);

  useEffect(() => {
    let ticking = false;
    function update() {
      ticking = false;
      setScrolled(window.pageYOffset > 60);
    }
    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Forced solid header state while the drawer is open — its dark background
  // would otherwise sit directly behind the navy logo/nav with poor contrast.
  const headerSolid = scrolled || drawerOpen;

  const scrollTo = useCallback((id) => {
    if (typeof document === "undefined") return;
    const target = id === "top" ? document.body : document.getElementById(id);
    if (!target) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const offset = id === "top" ? 0 : (headerRef.current?.offsetHeight || 68) + 34;
    const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: Math.max(0, top), behavior: reduce ? "auto" : "smooth" });
  }, []);

  return (
    <NavContext.Provider
      value={{
        drawerOpen,
        openDrawer,
        closeDrawer,
        toggleDrawer,
        headerSolid,
        headerRef,
        scrollTo,
      }}
    >
      {children}
    </NavContext.Provider>
  );
}

export function useNav() {
  const ctx = useContext(NavContext);
  if (!ctx) throw new Error("useNav must be used within a NavProvider");
  return ctx;
}
