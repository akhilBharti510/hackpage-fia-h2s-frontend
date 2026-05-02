import Reveal from "../common/Reveal.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
import { benefits } from "../../constants/siteContent.js";
import { images } from "../../constants/assets.js";

export default function BenefitsSection() {
  return (
    <section className="relative px-5 py-20 sm:px-8 lg:px-12">
      <SectionHeading eyebrow="Why Participate?" />
      <div className="benefits-layout">
        <BenefitPanel items={benefits.slice(0, 2)} align="right" />
        <Reveal className="astronaut-stage">
          <div aria-hidden="true" className="orbit-field" />
          {/* <span aria-hidden="true" className="orbit-pulse orbit-pulse-a" /> */}
          {/* <span aria-hidden="true" className="orbit-pulse orbit-pulse-b" /> */}
          <img
            className="astronaut-image animate-float"
            src={images.astronaut}
            alt="Astronaut floating with glowing orbital rings"
            loading="lazy"
          />
        </Reveal>
        <BenefitPanel items={benefits.slice(2)} />
      </div>
    </section>
  );
}

function BenefitPanel({ items, align = "left" }) {
  return (
    <Reveal
      className={`benefit-panel ${align === "right" ? "lg:text-right" : ""}`}
    >
      {items.map((item) => (
        <div key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </Reveal>
  );
}
