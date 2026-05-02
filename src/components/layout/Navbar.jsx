import Button from "../common/Button.jsx";
import { images } from "../../constants/assets.js";
import { navItems } from "../../constants/siteContent.js";

export default function Navbar() {
  return (
    <header className="absolute left-0 right-0 top-5 z-50 px-4 sm:top-8">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 max-w-[980px] items-center justify-between rounded-full bg-white px-6 text-fia-black shadow-nav sm:px-8"
      >
        <a
          href="#home"
          className="flex items-center focus-ring-dark"
          aria-label="Hack2skill home"
        >
          <img
            className="h-7 w-24 object-contain sm:h-8 sm:w-28"
            src={images.h2sLogo}
            alt="Hack2skill"
          />
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-fia-purple focus-ring-dark"
            >
              {item.label}
            </a>
          ))}
        </div>
        <Button href="#register" size="sm" action="signin">
          Sign In
        </Button>
      </nav>
    </header>
  );
}
