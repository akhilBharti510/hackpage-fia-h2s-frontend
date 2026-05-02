import { useRegistrationModal } from "./RegistrationModal.jsx";

export default function Button({
  href = "#register",
  children,
  variant = "primary",
  size = "md",
  className = "",
  action,
}) {
  const { openModal } = useRegistrationModal();
  const sizeClass = size === "sm" ? "px-6 py-3 text-sm" : "px-8 py-4 text-base";
  const variantClass =
    variant === "outline"
      ? "border border-white bg-white/10 text-white hover:bg-white/20"
      : "bg-fia-purple text-white shadow-purple hover:bg-fia-purpleLight";
  const inferredAction =
    action ||
    (typeof children === "string" && /sign in/i.test(children)
      ? "signin"
      : null);
  const handleClick = (event) => {
    if (!inferredAction) return;
    event.preventDefault();
    openModal(inferredAction);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`inline-flex items-center justify-center rounded-full font-semibold transition duration-300 hover:-translate-y-0.5 focus-ring ${sizeClass} ${variantClass} ${className}`}
    >
      {children}
    </a>
  );
}
