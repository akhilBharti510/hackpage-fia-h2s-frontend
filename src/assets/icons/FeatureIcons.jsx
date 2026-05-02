const icons = {
  clipboard: <path d="M9 5h6M9 13h6M9 17h4M8 3h8l1 2h3v16H4V5h3l1-2Z" />,
  team: (
    <path d="M16 11a4 4 0 1 0-8 0M3 21a7 7 0 0 1 14 0M17 10a3 3 0 1 0 0-6M20 21a5.6 5.6 0 0 0-3-5" />
  ),
  beaker: (
    <path d="M9 3h6M10 3v5l-5 9a3 3 0 0 0 2.6 4.5h8.8A3 3 0 0 0 19 17l-5-9V3M8 14h8" />
  ),
  rocket: (
    <path d="M13 4c4.5.3 7 2.8 7.3 7.3L14 17.6 8.4 12 13 4ZM7 13l-3 3v4h4l3-3M15 9h.01" />
  ),
  bulb: (
    <path d="M9 18h6M10 22h4M8 14a6 6 0 1 1 8 0c-1.2.9-1.5 1.8-1.6 3H9.6C9.5 15.8 9.2 14.9 8 14Z" />
  ),
};

export default function FeatureIcon({ name }) {
  return (
    <svg
      aria-hidden="true"
      className="size-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name]}
    </svg>
  );
}
