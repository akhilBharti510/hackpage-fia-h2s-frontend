import { memo, useState } from "react";
import Reveal from "../common/Reveal.jsx";
import SectionHeading from "../common/SectionHeading.jsx";
import useDragScroll from "../../hooks/useDragScroll.js";
import { schedule } from "../../constants/siteContent.js";

const progressClasses = ["w-1/4", "w-2/4", "w-3/4", "w-full"];

const TimelineSection = memo(function TimelineSection() {
  const [active, setActive] = useState(0);
  const { ref, dragProps } = useDragScroll();

  return (
    <section id="schedule" className="section-glow px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeading eyebrow="Hackathon Schedule" />
        <Reveal>
          <div className="relative mt-14">
            {/* <div className="absolute left-0 right-0 top-[74px] hidden h-px bg-fia-purple/35 md:block" /> */}
            {/* <div className={`absolute left-0 top-[52px] hidden h-1 bg-fia-purple transition-all duration-500 md:block ${progressClasses[active]}`} /> */}
            <div
              ref={ref}
              className="timeline-scroll"
              role="list"
              aria-label="Hackathon timeline"
              {...dragProps}
            >
              {schedule.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  className={`timeline-item focus-ring ${active === index ? "is-active" : ""}`}
                  onClick={() => setActive(index)}
                  aria-current={active === index ? "step" : undefined}
                >
                  <span>{item.title}</span>
                  <i />
                  <strong>{item.date}</strong>
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
});

export default TimelineSection;
