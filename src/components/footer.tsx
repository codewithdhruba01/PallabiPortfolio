export function Footer() {
  return (
    <footer className="mt-12 pb-8">
      <p className="text-[11px] text-black/30 dark:text-white/30 text-center">
        Developed and Maintained by{" "}
        <a
          href="https://codewithdhruba.in/"
          target="_blank"
          rel="noreferrer"
          className="underline transition-colors duration-200 hover:text-black/60 dark:hover:text-white/60"
        >
          Dhrubaraj Pati
        </a>
        .
      </p>
      <p className="mt-2 text-[11px] text-black/30 dark:text-white/30 text-center">
        © {new Date().getFullYear()} Pallabi Pati. All rights reserved.
      </p>
    </footer>
  );
}
