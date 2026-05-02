import Reveal from "../common/Reveal.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
import { faqs } from "../../constants/siteContent.js";
import { images } from "../../constants/assets.js";

export default function FaqSection() {
  return (
    <section id="faqs" className="relative px-5 py-20 sm:px-8 lg:px-12">
      <img
        className="absolute left-0 top-0 -z-0 h-[26vh] w-full object-cover opacity-20 blur-[1px]"
        src={images.brain}
        alt=""
        loading="lazy"
      />
      <div className="relative z-10 mx-auto max-w-[1180px]">
        <SectionHeading eyebrow="Frequently Asked Question" />
        <div className="mt-14 border-t border-white/20">
          {faqs.map(([question, answer], index) => (
            <Reveal key={question}>
              <article className="faq-row">
                <span
                  className={
                    index % 2
                      ? "bg-fia-purple text-fia-purpleLight"
                      : "bg-white/25 text-white"
                  }
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{question}</h3>
                <p>{answer}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
