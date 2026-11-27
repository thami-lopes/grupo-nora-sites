"use client";

import { forwardRef } from "react";
import { useNav } from "@/lib/NavContext";

const NavLink = forwardRef(function NavLink({ href, children, ...rest }, ref) {
  const { closeDrawer, scrollTo } = useNav();
  const id = href.startsWith("#") ? href.slice(1) : null;

  function handleClick(e) {
    if (!id) return;
    e.preventDefault();
    closeDrawer();
    scrollTo(id);
  }

  return (
    <a ref={ref} href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
});

export default NavLink;
