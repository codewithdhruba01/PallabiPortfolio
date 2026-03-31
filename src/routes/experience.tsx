import { createFileRoute, Link } from "@tanstack/react-router";
import {
  EditorialDivider,
  EditorialPage,
  EditorialSection,
} from "@/components/editorial-layout";
import { Navbar } from "@/components/navbar";

export const Route = createFileRoute("/experience")({
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <>
      <Navbar />
      <EditorialPage>
        <EditorialSection width="compact">
          <div className="pt-8">
            <Link
              to="/"
              className="mb-8 inline-block text-[13px] text-black/45 dark:text-white/45 hover:text-black dark:hover:text-white transition-colors duration-200"
            >
              ← Back to Home
            </Link>

            <h1 className="mb-8 text-[15px] font-semibold tracking-[-0.015em]">
              Professional Experience
            </h1>

            <div className="space-y-12">
              <div>
                <div className="flex justify-between gap-2 border-b border-black/5 dark:border-white/10 pb-4 mb-4">
                  <div>
                    <h3 className="text-[15px] font-medium text-black/85 dark:text-white/85 leading-snug">
                      Staff Nurse
                    </h3>
                    <p className="text-[14px] text-black/60 dark:text-white/60 leading-snug">
                      Neotia Bhagirathi Hospital
                    </p>
                  </div>
                  <div className="text-right whitespace-nowrap">
                    <span className="block text-[13px] text-black/40 dark:text-white/40 tabular-nums leading-snug">
                      Oct 2023 — Present
                    </span>
                    <span className="block text-[12px] text-black/30 dark:text-white/30 leading-snug">
                      Kolkata
                    </span>
                  </div>
                </div>
                <p className="text-[14px] leading-relaxed text-black/70 dark:text-white/70">
                  Responsible for delivering high-quality patient care, including assessment, medication administration, and care planning. Working within a multidisciplinary team to ensure patient safety and positive outcomes.
                </p>
              </div>

              <div>
                <div className="flex justify-between gap-2 border-b border-black/5 dark:border-white/10 pb-4 mb-4">
                  <div>
                    <h3 className="text-[15px] font-medium text-black/85 dark:text-white/85 leading-snug">
                      Junior Staff Nurse (Full Time)
                    </h3>
                    <p className="text-[14px] text-black/60 dark:text-white/60 leading-snug">
                      Malla Reddy Hospital
                    </p>
                  </div>
                  <div className="text-right whitespace-nowrap">
                    <span className="block text-[13px] text-black/40 dark:text-white/40 tabular-nums leading-snug">
                      Jun 2022 — Dec 2022
                    </span>
                    <span className="block text-[12px] text-black/30 dark:text-white/30 leading-snug">
                      Hyderabad
                    </span>
                  </div>
                </div>
                <p className="text-[14px] leading-relaxed text-black/70 dark:text-white/70">
                  Focused on foundational nursing duties, patient monitoring, and supporting senior staff in a busy hospital environment. Gained valuable hands-on experience in clinical assessments and patient support.
                </p>
              </div>
              <div>
                <div className="flex justify-between gap-2 border-b border-black/5 dark:border-white/10 pb-4 mb-4">
                  <div>
                    <h3 className="text-[15px] font-medium text-black/85 dark:text-white/85 leading-snug">
                      Staff Nurse (Intern)
                    </h3>
                    <p className="text-[14px] text-black/60 dark:text-white/60 leading-snug">
                      Narayana Health City
                    </p>
                  </div>
                  <div className="text-right whitespace-nowrap">
                    <span className="block text-[13px] text-black/40 dark:text-white/40 tabular-nums leading-snug">
                      Nov 2021 — May 2022
                    </span>
                    <span className="block text-[12px] text-black/30 dark:text-white/30 leading-snug">
                      Bangalore
                    </span>
                  </div>
                </div>
                <p className="text-[14px] leading-relaxed text-black/70 dark:text-white/70">
                  Focused on foundational nursing duties, patient monitoring, and supporting senior staff in a busy hospital environment. Gained valuable hands-on experience in clinical assessments and patient support.
                </p>
              </div>
            </div>

            <EditorialDivider className="my-12 bg-black/8 dark:bg-white/8" />

            <p className="text-center text-[12px] text-black/40 dark:text-white/40">
              © {new Date().getFullYear()} Pallabi Pati. All rights reserved.
            </p>
          </div>
        </EditorialSection>
      </EditorialPage>
    </>
  );
}
