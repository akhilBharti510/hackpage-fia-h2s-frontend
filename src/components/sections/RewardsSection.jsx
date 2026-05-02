import Reveal from "../common/Reveal.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
import { rewards } from "../../constants/siteContent.js";

export default function RewardsSection() {
  return (
    <section id="rewards" className="px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading eyebrow="Rewards And Benefits" />

        <div className="mt-12 grid max-w-3xl mx-auto gap-8 md:grid-cols-2">
          {rewards.map((reward) => (
            <Reveal key={reward.title} className="h-full">
              <article className="glass-card p-9 h-full flex flex-col">
                <h3 className="text-2xl font-semibold text-fia-purple">
                  {reward.title}
                </h3>

                <p className="mt-5 text-lg leading-7 text-white/85 flex-grow">
                  {reward.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
