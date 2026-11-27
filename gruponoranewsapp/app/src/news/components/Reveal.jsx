import { useReveal } from '../hooks.js';

const FROM_TRANSFORM = {
  up: 'translate3d(0,34px,0)',
  left: 'translate3d(-34px,0,0)',
  right: 'translate3d(34px,0,0)',
  scale: 'scale(.955)',
};

export default function Reveal({
  as: Tag = 'div',
  from = 'up',
  delay = 0,
  reduced = false,
  className,
  style,
  children,
  ...rest
}) {
  const [ref, visible] = useReveal({ reduced });

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : FROM_TRANSFORM[from] || FROM_TRANSFORM.up,
        filter: visible ? 'none' : 'blur(7px)',
        transitionProperty: 'opacity, transform, filter',
        transitionDuration: '760ms, 860ms, 700ms',
        transitionTimingFunction: 'cubic-bezier(.22,1,.36,1), cubic-bezier(.19,1,.28,1), cubic-bezier(.22,1,.36,1)',
        transitionDelay: `${delay}ms`,
        willChange: visible ? 'auto' : 'transform, opacity, filter',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
