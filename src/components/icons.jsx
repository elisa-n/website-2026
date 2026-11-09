// Line icons in one shared style: 24×24 grid, 1.25 stroke, round caps and
// joins, no fill, drawn in currentColor. Standalone copies of the same
// drawings live in public/icons. All are decorative: the text next to them
// carries the meaning, so they're hidden from screen readers.

function Icon({ children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className="icon"
    >
      {children}
    </svg>
  );
}

// The "off" lever is the "on" lever flipped vertically.
export function LightSwitchIcon({ on }) {
  return (
    <Icon>
      <rect x="4.5" y="1.75" width="15" height="20.5" rx="3" />
      <g transform={on ? undefined : "matrix(1 0 0 -1 0 24)"}>
        <path d="M9.25 12.5h5.5V17h-5.5Z" />
        <path d="M9.25 12.5 8.25 8.5h5.5l1 4" />
        <path d="M8.25 8.5 9.5 7h5.25l-1 1.5" />
        <path d="M14.75 7v5.5" />
      </g>
    </Icon>
  );
}

// Points down; rotate it to point up.
export function ChevronIcon() {
  return (
    <Icon>
      <path d="m7 9.5 5 5 5-5" />
    </Icon>
  );
}

export function GlobeIcon() {
  return (
    <Icon>
      <circle cx="12" cy="12" r="8.75" />
      <path d="M3.25 12h17.5" />
      <path d="M12 3.25a13 13 0 0 1 0 17.5a13 13 0 0 1 0-17.5Z" />
    </Icon>
  );
}
