import {
  EditorialDivider,
  EditorialPage,
  EditorialSection,
} from "@/components/editorial-layout";
import { Instagram } from "@/components/icons/Instagram";
import { Facebook } from "@/components/icons/Facebook";

interface ContactProps {}

export function Contact({}: ContactProps) {
  const email = "pallabipati2023@gmail.com";

  return (
    <EditorialPage>
      <EditorialSection width="compact">
        <div className="pt-8">
          <div className="text-center mb-8">
            <h1 className="text-[24px] font-semibold tracking-tight text-black/90 dark:text-white/90 mb-1">
              Get in Touch
            </h1>
            <p className="text-[14px] text-black/45 dark:text-white/45">
              I&apos;m always open to new opportunities and professional connections.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <EditorialDivider className="w-24 bg-black/10 dark:bg-white/10" />
          </div>

          <div className="space-y-10">
            <div className="text-center">
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.05em] text-black/45 dark:text-white/45 mb-4">
                Direct Contact
              </h3>
              <a
                href={`mailto:${email}`}
                className="text-[18px] font-medium text-black/85 dark:text-white/85 underline underline-offset-4 decoration-black/10 dark:decoration-white/10 hover:decoration-black/40 dark:hover:decoration-white/40 transition-all duration-200"
              >
                {email}
              </a>
            </div>

            <div className="text-center">
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.05em] text-black/45 dark:text-white/45 mb-4">
                Social Channels
              </h3>
              <div className="flex justify-center gap-6">
                <a
                  href="https://www.instagram.com/rimipati5" 
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-[14px] text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors duration-200"
                >
                  <Instagram className="size-5" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100080508494335" 
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-[14px] text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors duration-200"
                >
                  <Facebook className="size-5" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.05em] text-black/45 dark:text-white/45 mb-6 text-center">
                Send a Message
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2.5 text-[14px] bg-black/2 dark:bg-white/2 border border-black/5 dark:border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-black/20 dark:focus:ring-white/20 transition-all duration-200"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2.5 text-[14px] bg-black/2 dark:bg-white/2 border border-black/5 dark:border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-black/20 dark:focus:ring-white/20 transition-all duration-200"
                  />
                </div>
                <textarea
                  placeholder="Tell me about your opportunity..."
                  rows={4}
                  className="w-full px-4 py-2.5 text-[14px] bg-black/2 dark:bg-white/2 border border-black/5 dark:border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-black/20 dark:focus:ring-white/20 transition-all duration-200 resize-none"
                />
                <div className="flex justify-center pt-2 pb-12">
                  <button
                    type="submit"
                    disabled
                    className="px-8 py-2.5 text-[14px] font-medium text-white bg-black dark:bg-white dark:text-black rounded-full hover:opacity-90 transition-all duration-200 shadow-md active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </EditorialSection>
    </EditorialPage>
  );
}
