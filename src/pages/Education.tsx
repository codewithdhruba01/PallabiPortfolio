import {
  EditorialDivider,
  EditorialPage,
  EditorialSection,
} from "@/components/editorial-layout";

interface EducationProps { }

export function Education({ }: EducationProps) {
  return (
    <EditorialPage>
      <EditorialSection width="compact">
        <div className="pt-8 relative isolate">
          <h1 className="mb-8 text-[15px] font-semibold tracking-[-0.015em]">
            Education & Qualifications
          </h1>

          <div className="space-y-12">
            <div>
              <div className="flex justify-between gap-2 border-b border-black/5 dark:border-white/10 pb-4 mb-4">
                <div>
                  <h3 className="text-[15px] font-medium text-black/85 dark:text-white/85 leading-snug">
                    General Nursing and Midwifery
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

          {/* Background Image positioned relative to the footer area */}
          <div
            className="absolute -bottom-72 left-0 right-0 h-80 -z-10 opacity-[0.2] dark:opacity-[0.16] pointer-events-none"
            style={{
              backgroundImage: "url('/images/bgimage/flower2.png')",
              backgroundSize: '100% auto',
              backgroundPosition: 'center bottom',
              backgroundRepeat: 'no-repeat',
              maskImage: 'linear-gradient(to top, black 25%, transparent)',
              WebkitMaskImage: 'linear-gradient(to top, black 25%, transparent)',
            }}
          />
        </div>
      </EditorialSection>
    </EditorialPage>
  );
}
