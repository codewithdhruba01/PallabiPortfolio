import {
  EditorialDivider,
  EditorialPage,
  EditorialSection,
} from "@/components/editorial-layout";
import { Facebook } from "@/components/icons/Facebook";
import { Instagram } from "@/components/icons/Instagram";
import { PolaroidStrip } from "@/features/home/components/polaroid-strip";

interface HomeProps {
  setView: (view: any) => void;
  shouldReduceMotion: boolean;
}

export function Home({ setView, shouldReduceMotion }: HomeProps) {
  return (
    <EditorialPage>
      <EditorialSection width="compact">
        <div className="pt-8">
          <img
            src="/PallabiLogo.png"
            alt="Pallabi Pati Logo"
            className="size-32 mb-0.5 -ml-7 object-contain dark:invert"
          />
          <h1 className="mb-1 text-[15px] leading-[1.2] font-semibold tracking-[-0.015em]">
            Pallabi Pati
          </h1>
          <p className="mb-5">
            I&apos;m a Staff Nurse at{" "}
            <span className="font-semibold text-black/85 dark:text-white/55">
              Neotia Bhagirathi Hospital
            </span>
            .
          </p>
          <p className="mb-5">
            I am a compassionate and highly skilled Staff Nurse with over 3 years +
            of professional experience in diverse healthcare environments.
            I am committed to delivering high-quality, patient-centered
            care by combining clinical expertise with strong assessment, communication,
            and critical thinking skills.
          </p>
          <p className="mb-5">
            With a deep focus on patient safety and well-being, I excel in care planning,
            medication administration, and accurate documentation.
            I work effectively within multidisciplinary teams,
            ensuring smooth coordination and support for patients and their families.
            I continuously strive to enhance my knowledge through evidence-based practice,
            aiming to provide efficient, reliable, and empathetic care.
          </p>
          <div id="experience" className="mt-8 mb-5">
            <h2 className="mb-4 text-[13px] font-semibold tracking-[0.05em] uppercase text-black/45 dark:text-white/45">
              Current Role
            </h2>
            <div className="flex justify-between gap-2">
              <div>
                <h3 className="text-[15px] font-medium text-black/85 dark:text-white/85 leading-snug">
                  Staff Nurse
                </h3>
                <p className="text-[14px] text-black/60 dark:text-white/60 leading-snug">
                  Neotia Bhagirathi Hospital
                </p>
              </div>
              <div className="text-right">
                <span className="block text-[13px] text-black/40 dark:text-white/40 tabular-nums leading-snug">
                  Oct 2023 — Present
                </span>
              </div>
            </div>
            <div className="mt-6">
              <button
                onClick={() => setView("experience")}
                className="inline-flex items-center justify-center py-2 px-4 text-[13px] font-medium text-black/70 dark:text-white/70 bg-black/2 dark:bg-white/2 border border-black/5 dark:border-white/10 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200"
              >
                Show all experiences
              </button>
            </div>
          </div>
          <div id="education" className="mt-8 mb-5">
            <h2 className="mb-4 text-[13px] font-semibold tracking-[0.05em] uppercase text-black/45 dark:text-white/45">
              Education
            </h2>
            <div className="flex justify-between gap-2">
              <div>
                <h3 className="text-[15px] font-medium text-black/85 dark:text-white/85 leading-snug">
                  Nursing
                </h3>
                <p className="text-[14px] text-black/60 dark:text-white/60 leading-snug">
                  Rajib Gandhi University
                </p>
              </div>
              <div className="text-right">
                <span className="block text-[13px] text-black/40 dark:text-white/40 tabular-nums leading-snug">
                  2020 — 2022
                </span>
              </div>
            </div>
            <div className="mt-6">
              <button
                onClick={() => setView("education")}
                className="inline-flex items-center justify-center py-2 px-4 text-[13px] font-medium text-black/70 dark:text-white/70 bg-black/2 dark:bg-white/2 border border-black/5 dark:border-white/10 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200"
              >
                Show all education
              </button>
            </div>
          </div>
          <div className="inline-block text-black/26 dark:text-white/26">
            <a
              href="https://www.instagram.com/rimipati5"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-black/50 dark:hover:text-white/50"
            >
              <Instagram className="size-4" />
              <span>Instagram ↗</span>
            </a>{" "}
            ·{" "}
            <a
              href="https://www.facebook.com/profile.php?id=100080508494335"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-black/50 dark:hover:text-white/50"
            >
              <Facebook className="size-4" />
              <span>Facebook ↗</span>
            </a>
          </div>
          <div>
            <EditorialDivider className="my-4 bg-black/8 dark:bg-white/8" />
          </div>
          <p>Open to work as a Staff Nurse{" "}
            <button
              onClick={() => setView("contact")}
              className="underline transition-colors duration-200 hover:text-black/70 dark:hover:text-white/70"
            >
              Get in touch
            </button>
          </p>
          <div>
            <PolaroidStrip shouldReduceMotion={shouldReduceMotion} />
          </div>
          <p className="mt-12 text-[12px] text-black/40 dark:text-white/40 text-center">
            Devlop and Maintained by{" "}
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
        </div>
      </EditorialSection>
    </EditorialPage>
  );
}
