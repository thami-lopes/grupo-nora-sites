"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { scrollToId } from "../lib/scroll";

export default function ScrollLink({
  id,
  offset = 80,
  className,
  children,
  ...rest
}) {
  const pathname = usePathname();
  const onHome = pathname === "/";

  const handleClick = (e) => {
    if (!onHome) return; // let Next.js navigate to "/" and scroll to the hash there
    e.preventDefault();
    scrollToId(id, offset);
  };

  return (
    <Link
      href={onHome ? `#${id}` : `/#${id}`}
      onClick={handleClick}
      className={className}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function ContatoLink(props) {
  return <ScrollLink id="contato" offset={20} {...props} />;
}

export function SobreLink(props) {
  return <ScrollLink id="sobre" offset={96} {...props} />;
}

export function CursosLink(props) {
  return <ScrollLink id="cursos" offset={96} {...props} />;
}

export function FaqLink(props) {
  return <ScrollLink id="faq" offset={96} {...props} />;
}
