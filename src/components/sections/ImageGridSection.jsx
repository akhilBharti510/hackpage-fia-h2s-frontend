import Button from "../common/Button.jsx";
import Reveal from "../common/Reveal.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
import useCountdown from "../../hooks/useCountdown.js";
import {
  collageImages,
  registrationDeadline,
} from "../../constants/siteContent.js";

export default function ImageGridSection() {
  const countdown = useCountdown(registrationDeadline);

  return (
    <section className="section-glow px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow=""
            title="What Is The Hackathon?"
            align="left"
          />
          <div className="mt-10 space-y-7 text-lg leading-8 text-white/70">
            <p>
              The Lorem Ipsum Innovation Hackathon is a flagship event crafted
              to uncover pioneering ideas in science, technology, and system
              design. As technological advancements accelerate globally, this
              initiative aims to bridge academic knowledge with practical
              implementation.
            </p>
            <p>
              Participants will work on challenge statements designed by leading
              R&D units, applying theoretical expertise to build innovative
              prototypes and solutions with potential real-world application.
            </p>
          </div>
          <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center">
            <div
              className="corner-button"
              aria-live="polite"
              aria-label={`Registration countdown: ${countdown.label}`}
            >
              {countdown.label}
            </div>
            <Button variant="outline" action="register">
              Register Now
            </Button>
          </div>
        </Reveal>
        <Reveal>
          <div className="collage-grid">
            {collageImages.map((image) => (
              <figure
                key={image.alt}
                className={`image-hover ${image.className}`}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
