import Button from "../common/Button.jsx";
import DecorBlocks from "../common/DecorBlocks.jsx";
import Reveal from "../common/Reveal.jsx";
import SectionHeading from "../common/SectionHeading.jsx";

export default function AboutSection() {
  return (
    <section id="about" className="relative px-5 py-20 sm:px-8 lg:px-12">
      <DecorBlocks side="left" />
      <DecorBlocks side="right" />
      <Reveal className="mx-auto max-w-3xl text-center">
        <SectionHeading
          eyebrow="About Hackathon"
          title="Who Can Participate?"
        />
        <p className="mt-8 text-lg leading-8 text-white/70">
          Welcome to the Lorem Ipsum Innovation Hackathon, an exhilarating
          platform designed to foster innovation and creativity in advanced
          technology and futuristic solutions. Organized by the National Center
          for Applied Research and supported by Hack2skill, this hackathon
          invites students and researchers to collaborate and solve critical
          challenges.
        </p>
        <Button href="#register" className="mt-10" action="apply">
          Apply Now
        </Button>
      </Reveal>
    </section>
  );
}
