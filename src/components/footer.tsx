import { navigateTo } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="mt-8 pb-2 border-t border-black/5 dark:border-white/10 pt-6">
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => navigateTo("experience")}
            className="min-w-[100px] px-3.5 py-1 text-[12px] font-medium text-black/70 dark:text-white/70 border border-black/10 dark:border-white/10 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200"
          >
            Experience
          </button>
          <button
            onClick={() => navigateTo("contact")}
            className="min-w-[100px] px-3.5 py-1 text-[12px] font-medium text-black/70 dark:text-white/70 border border-black/10 dark:border-white/10 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200"
          >
            Contact Us
          </button>
        </div>

        <div className="space-y-2">
          <p className="text-[12px] text-black/40 dark:text-white/40 text-center tracking-tight">
            Developed and Maintained by{" "}
            <a
              href="https://codewithdhruba.in/"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-black/70 dark:hover:text-white/70 transition-colors"
            >
              Dhrubaraj Pati
            </a>
            .
          </p>
          <p className="text-[12px] text-black/30 dark:text-white/30 text-center tracking-tight">
            © {new Date().getFullYear()} Pallabi Pati. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
