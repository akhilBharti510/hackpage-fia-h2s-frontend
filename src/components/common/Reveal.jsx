import { memo, useRef } from "react";
import useInView from "../../hooks/useInView.js";

const Reveal = memo(function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const isVisible = useInView(ref);

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
});

export default Reveal;
