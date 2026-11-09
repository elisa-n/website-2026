import { LightSwitchIcon } from "./icons.jsx";

// Runs in <head> before the page paints, so a saved theme never flashes.
// `data-js` reveals the toggle, which does nothing without JavaScript.
export const themeScript = `(function(){var d=document.documentElement;d.setAttribute("data-js","");try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")d.setAttribute("data-theme",t)}catch(e){}})();`;

// Follows the system setting until the visitor picks a theme, then remembers it.
//
// The page is prerendered without knowing the visitor's theme, so the button
// holds both labels and CSS shows the one for the active theme. That keeps
// the text right before React loads, and the hidden label (display: none)
// is also hidden from screen readers. The icon shows the current state, like
// a real switch: on in light mode, off in dark mode.
export default function ThemeToggle({ labels }) {
  function toggle() {
    const root = document.documentElement;
    const saved = root.getAttribute("data-theme");
    const isDark = saved
      ? saved === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    const next = isDark ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be blocked; the choice then lasts until the page reloads.
    }
  }

  return (
    <button type="button" className="theme-toggle" onClick={toggle}>
      <span className="theme-toggle__label theme-toggle__label--to-dark">
        <LightSwitchIcon on />
        {labels.toDark}
      </span>
      <span className="theme-toggle__label theme-toggle__label--to-light">
        <LightSwitchIcon on={false} />
        {labels.toLight}
      </span>
    </button>
  );
}
