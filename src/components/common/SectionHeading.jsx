export default function SectionHeading({
  eyebrow,
  title,
  align = "center",
  className = "",
}) {
  const alignClass =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      <p className="text-sm font-medium uppercase tracking-[0.02em] text-fia-purple">
        {eyebrow}
      </p>
      {title ? (
        <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
          {title}
        </h2>
      ) : null}
    </div>
  );
}
