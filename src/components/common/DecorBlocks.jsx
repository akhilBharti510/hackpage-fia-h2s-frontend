export default function DecorBlocks({ side = "left" }) {
  const sideClass =
    side === "left" ? "-left-3 sm:left-0" : "-right-3 sm:right-0";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute top-1/2 hidden -translate-y-1/2 md:block ${sideClass}`}
    >
      <span className="mb-3 block h-10 w-20 bg-fia-purple" />
      <span className="ml-12 mb-3 block h-10 w-24 bg-fia-purple" />
      <span className="mb-3 block h-10 w-20 bg-fia-purple" />
      <span className="ml-12 mb-3 block h-10 w-24 bg-fia-purple" />
      <span className="block h-10 w-20 bg-fia-purple" />
    </div>
  );
}
