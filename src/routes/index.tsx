import { createFileRoute } from "@tanstack/react-router";
import { useReducedMotion } from "motion/react";
import {
  EditorialDivider,
  EditorialPage,
  EditorialSection,
} from "@/components/editorial-layout";
import { Facebook } from "@/components/icons/Facebook";
import { Instagram } from "@/components/icons/Instagram";
import { PolaroidStrip } from "@/features/home/components/polaroid-strip";

import { Navbar } from "@/components/navbar";

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <Navbar />
      <EditorialPage>
        <EditorialSection width="compact">
          <div>
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
              <span className="font-semibold text-black/85 dark:text-white/85">
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
            <p className="mb-5">
              Open to work as a Staff Nurse{" "}
              <a
                href="mailto:pallabipati2023@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="underline transition-colors duration-200 hover:text-black/50 dark:hover:text-white/50"
              >
                Get in touch
              </a>
              .
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
              <p className="mt-4">
                <a
                  href="/experience"
                  className="text-[14px] font-medium underline transition-colors duration-200 hover:text-black/50 dark:hover:text-white/50"
                >
                  View full experience ↗
                </a>
              </p>
            </div>
            <div id="education" className="mt-8 mb-5">
              <h2 className="mb-4 text-[13px] font-semibold tracking-[0.05em] uppercase text-black/45 dark:text-white/45">
                Education
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between gap-2">
                    <div>
                      <h3 className="text-[15px] font-medium text-black/85 dark:text-white/85 leading-snug">
                        G.N.M. in Nursing
                      </h3>
                      <p className="text-[14px] text-black/60 dark:text-white/60 leading-snug">
                        Rajib Gandhi University
                      </p>
                    </div>
                    <div className="text-right whitespace-nowrap">
                      <span className="block text-[13px] text-black/40 dark:text-white/40 tabular-nums leading-snug">
                        2020 — 2022
                      </span>
                      <span className="block text-[12px] text-black/30 dark:text-white/30 leading-snug">
                        Karnataka
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="inline-block text-black/26 dark:text-white/26">
              <a
                href="https://snapzy.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-black/50 dark:hover:text-white/50"
              >
                <Instagram className="size-4" />
                <span>Instagram ↗</span>
              </a>{" "}
              ·{" "}
              <a
                href="https://github.com/duongductrong"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-black/50 dark:hover:text-white/50"
              >
                <Facebook className="size-4" />
                <span>Facebook ↗</span>
              </a>
            </p>
            <div>
              <EditorialDivider className="my-4 bg-black/8 dark:bg-white/8" />
            </div>
            <p>
              Get in touch :{" "}
              <a
                href="mailto:pallabipati2023@gmail.com"
                className="underline transition-colors duration-200 hover:text-black/70 dark:hover:text-white/70"
              >
                pallabipati2023@gmail.com
              </a>{" "}
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
    </>
  );
}
