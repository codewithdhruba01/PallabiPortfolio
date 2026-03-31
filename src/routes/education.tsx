import { createFileRoute, Link } from "@tanstack/react-router";
import {
  EditorialDivider,
  EditorialPage,
  EditorialSection,
} from "@/components/editorial-layout";
import { Navbar } from "@/components/navbar";

export const Route = createFileRoute("/education")({
  component: EducationPage,
});

function EducationPage() {
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
              Education & Qualifications
            </h1>

            <div className="space-y-12">
              <div>
                <div className="flex justify-between gap-2 border-b border-black/5 dark:border-white/10 pb-4 mb-4">
                  <div>
                    <h3 className="text-[15px] font-medium text-black/85 dark:text-white/85 leading-snug">
                      G.N.M. (General Nursing and Midwifery)
                    </h3>
                    <p className="text-[14px] text-black/60 dark:text-white/60 leading-snug">
                      Rajib Gandhi University of Health Sciences
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
                <p className="text-[14px] leading-relaxed text-black/70 dark:text-white/70">
                  Comprehensive training in clinical nursing, patient care, and healthcare fundamentals. Focused on medical-surgical nursing, maternal and child health, and community health nursing.
                </p>
              </div>

              <div>
                <div className="flex justify-between gap-2 border-b border-black/5 dark:border-white/10 pb-4 mb-4">
                  <div>
                    <h3 className="text-[15px] font-medium text-black/85 dark:text-white/85 leading-snug">
                      Higher Secondary Education
                    </h3>
                    <p className="text-[14px] text-black/60 dark:text-white/60 leading-snug">
                      (WBCHSE) Science Stream
                    </p>
                  </div>
                  <div className="text-right whitespace-nowrap">
                    <span className="block text-[13px] text-black/40 dark:text-white/40 tabular-nums leading-snug">
                      2018 — 2020
                    </span>
                  </div>
                </div>
                <p className="text-[14px] leading-relaxed text-black/70 dark:text-white/70">
                  Completed secondary education with a focus on biological sciences and chemistry, building a strong foundation for nursing studies.
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
