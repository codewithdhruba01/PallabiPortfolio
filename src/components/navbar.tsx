import { useTheme } from "@/hooks/use-theme";
import { Sun } from "@/components/icons/Sun";
import { Moon } from "@/components/icons/Moon";
import { cn } from "@/lib/utils";

interface NavbarProps {
  currentView: string;
  setView: (view: any) => void;
}

export function Navbar({ currentView, setView }: NavbarProps) {
  const { theme, setTheme } = useTheme();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "resume", label: "Resume" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <div className="flex items-center gap-4 sm:gap-6 px-4 sm:px-6 py-2 rounded-full bg-white/70 dark:bg-black/70 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-sm transition-colors duration-300 overflow-x-auto max-w-[95vw]">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setView(item.id)}
            className={cn(
              "relative group text-[12px] sm:text-[13px] font-medium tracking-tight transition-colors duration-200 whitespace-nowrap",
              currentView === item.id
                ? "text-black dark:text-white"
                : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white"
            )}
          >
            {item.label}
            <span className={cn(
              "absolute bottom-0 left-0 h-px bg-black dark:bg-white transition-all duration-300 group-hover:w-full",
              currentView === item.id ? "w-full" : "w-0"
            )} />
          </button>
        ))}

        <div className="w-px h-4 bg-black/10 dark:bg-white/10 shrink-0" aria-hidden="true" />

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-1 rounded-full text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-110 active:scale-95 shrink-0"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </button>
      </div>
    </nav>
  );
}
