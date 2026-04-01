import {
  EditorialDivider,
  EditorialPage,
  EditorialSection,
} from "@/components/editorial-layout";

interface ExperienceProps { }

export function Experience({ }: ExperienceProps) {
  return (
    <EditorialPage>
      <EditorialSection width="compact">
        <div className="pt-8 relative isolate">
          <h1 className="mb-8 text-[15px] font-semibold tracking-[-0.015em]">
            Professional Experience
          </h1>

          <div className="space-y-12">
            <div>
              <div className="flex items-start gap-4 border-b border-black/5 dark:border-white/10 pb-4 mb-4">
                <img
                  src="/images/company/neotia_logo.jpeg"
                  alt="Neotia Bhagirathi Hospital Logo"
                  className="size-10 rounded-lg object-contain bg-white p-1 shrink-0 shadow-sm"
                />
                <div className="flex justify-between items-start gap-2 flex-1 min-w-0">
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
              </div>
              <p className="text-[14px] leading-relaxed text-black/70 dark:text-white/70">
                Responsible for delivering high-quality patient care, including assessment, medication administration, and care planning. Working within a multidisciplinary team to ensure patient safety and positive outcomes.
              </p>
            </div>

            <div>
              <div className="flex items-start gap-4 border-b border-black/5 dark:border-white/10 pb-4 mb-4">
                <img
                  src="/images/company/mallaRaddy_logo.jpeg"
                  alt="Malla Reddy Hospital Logo"
                  className="size-10 rounded-lg object-contain bg-white p-1 shrink-0 shadow-sm"
                />
                <div className="flex justify-between items-start gap-2 flex-1 min-w-0">
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
              </div>
              <p className="text-[14px] leading-relaxed text-black/70 dark:text-white/70">
                Focused on foundational nursing duties, patient monitoring, and supporting senior staff in a busy hospital environment. Gained valuable hands-on experience in clinical assessments and patient support.
              </p>
            </div>
            <div>
              <div className="flex items-start gap-4 border-b border-black/5 dark:border-white/10 pb-4 mb-4">
                <img
                  src="/images/company/NH_logo.png"
                  alt="Narayana Health City Logo"
                  className="size-10 rounded-lg object-contain bg-white p-1 shrink-0 shadow-sm"
                />
                <div className="flex justify-between items-start gap-2 flex-1 min-w-0">
                  <div>
                    <h3 className="text-[15px] font-medium text-black/85 dark:text-white/85 leading-snug">
                      Staff Nurse (Intern)
                    </h3>
                    <p className="text-[14px] text-black/60 dark:text-white/60 leading-snug">
                      Narayana Multispeciality Hospital
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
              </div>
              <p className="text-[14px] leading-relaxed text-black/70 dark:text-white/70">
                Hands-on experience at a leading cardiac care center, assisting in specialized patient monitoring and cardiovascular procedures under expert clinical supervision.
              </p>
            </div>
          </div>

          <EditorialDivider className="my-12 bg-black/8 dark:bg-white/8" />

          {/* Background Image positioned relative to the footer area */}
          <div
            className="absolute -bottom-32 left-0 right-0 h-80 -z-10 opacity-[0.2] dark:opacity-[0.16] pointer-events-none"
            style={{
              backgroundImage: "url('/images/bgimage/flower1.png')",
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
