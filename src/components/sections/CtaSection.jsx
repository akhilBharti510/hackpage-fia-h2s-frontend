import Button from "../common/Button.jsx";
import { images } from "../../constants/assets.js";

export default function CtaSection() {
  return (
    <section
      id="register"
      className="relative min-h-[560px] overflow-hidden px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="relative z-10 mx-auto max-w-[1180px] text-center">
        <p className="text-sm uppercase tracking-[0.16em] text-fia-purple">
          Ready to build?
        </p>
        <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-semibold leading-tight sm:text-6xl">
          Turn a bold idea into a working prototype.
        </h2>
        <Button className="mt-10" action="register">
          Register Now
        </Button>
      </div>
      <img
        className="absolute bottom-0 left-1/2 w-[1600px] max-w-none -translate-x-1/2 opacity-85"
        src={images.footerAbstract}
        alt=""
        loading="lazy"
      />
    </section>
  );
}
