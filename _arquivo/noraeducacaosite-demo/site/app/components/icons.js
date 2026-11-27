// Shared flat-style icon set (currentColor fill/stroke) used wherever the
// site needs a security/trust glyph instead of a raw emoji — keeps the same
// visual language between the homepage "Segurança" section and the checkout
// trust list.
export function IconLock(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M14 22V16C14 10.4772 18.4772 6 24 6C29.5228 6 34 10.4772 34 16V22"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <rect x="9" y="22" width="30" height="20" rx="4" fill="currentColor" />
      <circle cx="24" cy="30" r="3" fill="#fff" />
      <rect x="22.5" y="30" width="3" height="7" rx="1.5" fill="#fff" />
    </svg>
  );
}

export function IconCard(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="5" y="11" width="38" height="26" rx="4" fill="currentColor" />
      <rect x="5" y="17" width="38" height="6" fill="#fff" />
      <rect x="10" y="29" width="12" height="3.5" rx="1.75" fill="#fff" />
      <rect x="26" y="29" width="8" height="3.5" rx="1.75" fill="#fff" />
    </svg>
  );
}

export function IconNoStorage(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <ellipse cx="24" cy="12" rx="15" ry="5" fill="currentColor" />
      <path
        d="M9 12V24C9 26.7614 15.7157 29 24 29C32.2843 29 39 26.7614 39 24V12"
        fill="currentColor"
        opacity="0.55"
      />
      <path
        d="M9 24V36C9 38.7614 15.7157 41 24 41C32.2843 41 39 38.7614 39 36V24"
        fill="currentColor"
        opacity="0.3"
      />
      <line x1="10" y1="10" x2="38" y2="38" stroke="#fff" strokeWidth="4.5" />
      <line x1="10" y1="10" x2="38" y2="38" stroke="currentColor" strokeWidth="2.2" />
    </svg>
  );
}

export function IconDoc(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 6H29L38 15V40C38 41.6569 36.6569 43 35 43H12C10.3431 43 9 41.6569 9 40V9C9 7.34315 10.3431 6 12 6Z"
        fill="currentColor"
      />
      <path d="M29 6L38 15H31C29.8954 15 29 14.1046 29 13V6Z" fill="#fff" opacity="0.55" />
      <circle cx="24" cy="29" r="9" fill="#fff" />
      <path
        d="M20 29L23 32L29 25.5"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconCheck(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="24" cy="24" r="18" fill="currentColor" />
      <path
        d="M16 24.5L21 29.5L32 18"
        stroke="#fff"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
