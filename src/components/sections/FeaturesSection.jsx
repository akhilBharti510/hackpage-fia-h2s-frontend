import Reveal from "../common/Reveal.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
import { participants } from "../../constants/siteContent.js";

export default function FeaturesSection() {
  return (
    <section className="section-glow px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading eyebrow="Who Can Participate?" />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {participants.map((item) => (
            <Reveal key={item}>
              <article className="glass-card flex min-h-32 items-center justify-center p-8 text-center text-xl font-semibold">
                {item}
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-center text-base text-white/80">
          Note: Working Professionals are not eligible to participate in the
          hackathon.
        </p>
      </div>
    </section>
  );
}
