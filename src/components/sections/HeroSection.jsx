import Button from "../common/Button.jsx";
import Reveal from "../common/Reveal.jsx";
import { images } from "../../constants/assets.js";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[860px] overflow-hidden px-5 pt-28 sm:px-8 lg:px-12"
    >
      <div aria-hidden="true" className="hero-ribbon" />
      <div aria-hidden="true" className="hero-haze" />
      <div className="mx-auto grid max-w-[1360px] items-center gap-10 pt-16 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="relative z-10">
          <div className="relative max-w-[590px]">
            <div className="absolute left-0 top-24 h-[430px] w-[310px] bg-fia-purple sm:left-3" />
            <img
              className="relative z-10 h-[540px] w-[360px] object-contain object-bottom sm:h-[620px] sm:w-[430px]"
              src={images.heroModel}
              alt="Futuristic model in purple outfit"
            />
            <p className="relative z-10 mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Where innovation becomes reality
            </p>
          </div>
        </Reveal>
        <Reveal className="relative z-10 -order-1 pt-8 lg:order-none lg:-ml-72 lg:pt-0">
          <h1 className="font-display text-6xl font-black uppercase leading-[0.86] tracking-[-0.05em] text-white sm:text-8xl lg:text-[124px]">
            Code The
            <span className="block text-stroke">Future</span>
          </h1>
          <div className="mt-32 hidden justify-end lg:flex">
            <Button variant="outline" action="register">
              Register Now
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
