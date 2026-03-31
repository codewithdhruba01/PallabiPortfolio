import { createFileRoute, Link } from "@tanstack/react-router";
import {
  EditorialDivider,
  EditorialPage,
  EditorialSection,
} from "@/components/editorial-layout";
import { Navbar } from "@/components/navbar";

export const Route = createFileRoute("/resume")({
  component: ResumePage,
});

function ResumePage() {
  const resumeId = "1yn5s0Nzn1a8nKjZZ0O6eRDOCzSxaVEhZ";
  const previewUrl = `https://drive.google.com/file/d/${resumeId}/preview`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${resumeId}`;

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
            
            <div className="text-center mb-8">
              <h1 className="text-[24px] font-semibold tracking-tight text-black/90 dark:text-white/90 mb-1">
                Resume
              </h1>
              <p className="text-[14px] text-black/45 dark:text-white/45">
                View and download my professional resume.
              </p>
            </div>

            <div className="flex justify-center mb-8">
              <EditorialDivider className="w-24 bg-black/10 dark:bg-white/10" />
            </div>

            <div className="relative w-full aspect-[1/1.4] rounded-xl overflow-hidden border border-black/5 dark:border-white/10 shadow-sm bg-black/5 dark:bg-white/5 mb-8">
              <iframe
                src={previewUrl}
                className="absolute inset-0 w-full h-full"
                allow="autoplay"
                title="Resume Preview"
              />
            </div>

            <div className="flex justify-center pb-12">
              <a
                href={downloadUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center py-2.5 px-8 text-[14px] font-medium text-white bg-black dark:bg-white dark:text-black rounded-full hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
              >
                Download Resume
              </a>
            </div>

            <p className="text-center text-[11px] text-black/30 dark:text-white/30">
              © {new Date().getFullYear()} Pallabi Pati. All rights reserved.
            </p>
          </div>
        </EditorialSection>
      </EditorialPage>
    </>
  );
}
