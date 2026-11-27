export function scrollToId(id, offset = 80) {
  const target = document.getElementById(id);
  if (!target) return;
  const reduce =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - offset);
  window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
}
