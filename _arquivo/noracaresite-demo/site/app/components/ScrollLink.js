"use client";

import { scrollToId } from "../lib/scroll";

export default function ScrollLink({
  id,
  offset = 80,
  className,
  children,
  ...rest
}) {
  const handleClick = (e) => {
    e.preventDefault();
    scrollToId(id, offset);
  };
  return (
    <a href={`#${id}`} onClick={handleClick} className={className} {...rest}>
      {children}
    </a>
  );
}

export function ContatoLink(props) {
  return <ScrollLink id="contato" offset={20} {...props} />;
}

export function SobreLink(props) {
  return <ScrollLink id="sobre" offset={96} {...props} />;
}

export function ServicosLink(props) {
  return <ScrollLink id="servicos" offset={96} {...props} />;
}

export function FaqLink(props) {
  return <ScrollLink id="faq" offset={96} {...props} />;
}
