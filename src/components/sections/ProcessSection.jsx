import IconBox from "../common/IconBox.jsx";
import Reveal from "../common/Reveal.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
import FeatureIcon from "../../assets/icons/FeatureIcons.jsx";
import { processSteps } from "../../constants/siteContent.js";

export default function ProcessSection() {
  return (
    <section
      id="participate"
      className="section-glow px-5 py-20 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading eyebrow="How To Participate?" />
        <div className="mt-16 grid gap-9 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step) => (
            <Reveal key={step.title}>
              <article className="process-card">
                <IconBox>
                  <FeatureIcon name={step.icon} />
                </IconBox>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
