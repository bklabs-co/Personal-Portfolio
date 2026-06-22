import { FiGithub, FiLinkedin } from "react-icons/fi";
import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="chip text-faint">
          &copy; {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-faint transition-colors hover:text-signal"
            aria-label="GitHub"
          >
            <FiGithub className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-faint transition-colors hover:text-signal"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="h-4 w-4" />
          </a>
          <button
            onClick={() => document.getElementById("top")?.scrollIntoView({ behavior: "smooth" })}
            className="chip text-faint transition-colors hover:text-signal"
          >
            Back to top &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
}