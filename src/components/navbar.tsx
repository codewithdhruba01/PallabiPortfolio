import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <div className="flex gap-6 px-6 py-2 rounded-full bg-white/70 backdrop-blur-md border border-black/5 shadow-sm">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className={cn(
            "relative group text-[13px] font-medium tracking-tight text-black/50 hover:text-black transition-colors duration-200"
          )}
        >
          Resume
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full" />
        </a>
        <a
          href="#experience"
          className={cn(
            "relative group text-[13px] font-medium tracking-tight text-black/50 hover:text-black transition-colors duration-200"
          )}
        >
          Experience
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full" />
        </a>
        <a
          href="#education"
          className={cn(
            "relative group text-[13px] font-medium tracking-tight text-black/50 hover:text-black transition-colors duration-200"
          )}
        >
          Education
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full" />
        </a>
      </div>
    </nav>
  );
}
