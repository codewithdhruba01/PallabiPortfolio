import { useTheme } from "@/hooks/use-theme";
import { Sun } from "@/components/icons/Sun";
import { Moon } from "@/components/icons/Moon"; 
import { cn } from "@/lib/utils";

export function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <div className="flex items-center gap-6 px-6 py-2 rounded-full bg-white/70 dark:bg-black/70 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-sm transition-colors duration-300">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className={cn(
            "relative group text-[13px] font-medium tracking-tight text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors duration-200"
          )}
        >
          Resume
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-black dark:bg-white transition-all duration-300 group-hover:w-full" />
        </a>
        <a
          href="/experience"
          className={cn(
            "relative group text-[13px] font-medium tracking-tight text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors duration-200"
          )}
        >
          Experience
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-black dark:bg-white transition-all duration-300 group-hover:w-full" />
        </a>
        <a
          href="/education"
          className={cn(
            "relative group text-[13px] font-medium tracking-tight text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors duration-200"
          )}
        >
          Education
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-black dark:bg-white transition-all duration-300 group-hover:w-full" />
        </a>
        
        <div className="w-px h-4 bg-black/10 dark:bg-white/10" aria-hidden="true" />
        
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-1 rounded-full text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-110 active:scale-95"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </button>
      </div>
    </nav>
  );
}
