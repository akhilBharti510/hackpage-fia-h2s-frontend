import Reveal from "../common/Reveal.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
import Button from "../common/Button.jsx";
import { challenges } from "../../constants/siteContent.js";

export default function ChallengesSection() {
  return (
    <section id="challenges" className="px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading eyebrow="Challenges" />
        <div className="mt-14 border-t border-white/25">
          {challenges.map(([text, image], index) => (
            <Reveal key={text}>
              <article className="challenge-row">
                <span className="challenge-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <figure className="image-hover challenge-image">
                  <img src={image} alt="" loading="lazy" />
                </figure>
                <div>
                  <p>{text}</p>
                  {index === 6 ? (
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-6 rounded-none"
                    >
                      Learn More
                    </Button>
                  ) : null}
                </div>
                <a
                  href="#register"
                  aria-label={`Open challenge ${index + 1}`}
                  className="challenge-arrow focus-ring"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
