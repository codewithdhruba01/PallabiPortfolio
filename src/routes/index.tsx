import { createFileRoute } from "@tanstack/react-router";
import { useReducedMotion } from "motion/react";
import {
  EditorialDivider,
  EditorialPage,
  EditorialSection,
} from "@/components/editorial-layout";
import { LuckyCloverMark } from "@/features/home/components/lucky-clover-mark";
import { PolaroidStrip } from "@/features/home/components/polaroid-strip";

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <EditorialPage>
      <EditorialSection width="compact">
        <div>
          <div className="mb-2 w-fit">
            <LuckyCloverMark />
          </div>
          <h1 className="mb-4 text-[15px] leading-[1.2] font-semibold tracking-[-0.015em]">
            Pallabi Pati
          </h1>
          <p className="mb-5">I&apos;m a Staff Nurse.</p>
          <p className="mb-5">
            I am a compassionate and highly skilled Staff Nurse with over 3 years
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
              className="underline transition-colors duration-200 hover:text-black/50"
            >
              Get in touch
            </a>
            .
          </p>
          <div className="mt-8 mb-5">
            <h2 className="mb-4 text-[13px] font-semibold tracking-[0.05em] uppercase text-black/45">
              Experience
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between gap-2">
                  <div>
                    <h3 className="text-[15px] font-medium text-black/85 leading-snug">
                      Staff Nurse
                    </h3>
                    <p className="text-[14px] text-black/60 leading-snug">
                      Neotia Bhagirathi
                    </p>
                  </div>
                  <div className="text-right whitespace-nowrap">
                    <span className="block text-[13px] text-black/40 tabular-nums leading-snug">
                      Oct 2023 — Present
                    </span>
                    <span className="block text-[12px] text-black/30 leading-snug">
                      Kolkata
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between gap-2">
                  <div>
                    <h3 className="text-[15px] font-medium text-black/85 leading-snug">
                      Junior Staff Nurse
                    </h3>
                    <p className="text-[14px] text-black/60 leading-snug">
                      Malla Reddy Hospital
                    </p>
                  </div>
                  <div className="text-right whitespace-nowrap">
                    <span className="block text-[13px] text-black/40 tabular-nums leading-snug">
                      Jun 2022 — Dec 2022
                    </span>
                    <span className="block text-[12px] text-black/30 leading-snug">
                      Hyderabad
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="inline-block text-black/26">
            <a
              href="https://snapzy.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-black/50"
            >
              <img
                src="/images/apps/snapzy/brand-logo.png"
                alt=""
                aria-hidden="true"
                className="size-4 rounded-[4px] object-cover"
              />
              <span>Instagram ↗</span>
            </a>{" "}
            ·{" "}
            <a
              href="https://github.com/duongductrong"
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-200 hover:text-black/50"
            >
              Facebook ↗
            </a>
          </p>
          <div>
            <EditorialDivider className="my-4 bg-black/8" />
          </div>
          <p>
            Get in touch :{" "}
            <a
              href="mailto:pallabipati2023@gmail.com"
              className="underline transition-colors duration-200 hover:text-black/70"
            >
              pallabipati2023@gmail.com
            </a>{" "}
          </p>
          <div>
            <PolaroidStrip shouldReduceMotion={shouldReduceMotion} />
          </div>
          <p className="mt-12 text-[12px] text-black/40">
            This interface is inspired by{" "}
            <a
              href="https://www.aidenybai.com/"
              target="_blank"
              rel="noreferrer"
              className="underline transition-colors duration-200 hover:text-black/60"
            >
              Aiden Bai
            </a>
            .
          </p>
        </div>
      </EditorialSection>

    </EditorialPage>
  );
}
