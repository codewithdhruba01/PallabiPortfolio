import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Navbar } from "@/components/navbar";
import { Home } from "@/pages/Home";
import { Experience } from "@/pages/Experience";
import { Education } from "@/pages/Education";
import { Resume } from "@/pages/Resume";
import { Contact } from "@/pages/Contact";

export default function App() {
  const [view, setView] = useState<"home" | "experience" | "education" | "resume" | "contact">(() => {
    const path = window.location.pathname.replace("/", "");
    const validViews = ["home", "experience", "education", "resume", "contact"];
    return (validViews.includes(path) ? path : "home") as any;
  });
  const shouldReduceMotion = useReducedMotion();

  // Update URL when view changes
  useEffect(() => {
    const path = view === "home" ? "/" : `/${view}`;
    if (window.location.pathname !== path) {
      window.history.pushState(null, "", path);
    }
  }, [view]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace("/", "");
      const validViews = ["home", "experience", "education", "resume", "contact"];
      setView((validViews.includes(path) ? path : "home") as any);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update Metadata
    const baseUrl = "https://pallabiprofile.vercel.app";
    const metadata = {
      home: {
        title: "Pallabi Pati — Staff Nurse",
        description: "Personal website of Pallabi Pati — Staff Nurse",
        image: `${baseUrl}/meta/home.png`,
        url: `${baseUrl}/`
      },
      experience: {
        title: "Experience — Pallabi Pati",
        description: "Professional experience and clinical journey of Pallabi Pati.",
        image: `${baseUrl}/meta/Experience.png`,
        url: `${baseUrl}/experience`
      },
      education: {
        title: "Education — Pallabi Pati",
        description: "Academic background and medical training of Pallabi Pati.",
        image: `${baseUrl}/meta/Education.png`,
        url: `${baseUrl}/education`
      },
      resume: {
        title: "Resume — Pallabi Pati",
        description: "Professional CV, certifications, and skills of Pallabi Pati.",
        image: `${baseUrl}/meta/Resume.png`,
        url: `${baseUrl}/resume`
      },
      contact: {
        title: "Contact — Pallabi Pati",
        description: "Get in touch with Pallabi Pati for inquiries or collaborations.",
        image: `${baseUrl}/meta/Contact.png`,
        url: `${baseUrl}/contact`
      }
    };

    const currentMetadata = metadata[view];
    if (currentMetadata) {
      document.title = currentMetadata.title;
      
      // Update description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) metaDescription.setAttribute("content", currentMetadata.description);

      // Update OG Title, Description, Image, URL
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute("content", currentMetadata.title);

      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) ogDescription.setAttribute("content", currentMetadata.description);

      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) ogImage.setAttribute("content", currentMetadata.image);

      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute("content", currentMetadata.url);

      // Update Twitter Title, Description, Image, URL
      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (twitterTitle) twitterTitle.setAttribute("content", currentMetadata.title);

      const twitterDescription = document.querySelector('meta[name="twitter:description"]');
      if (twitterDescription) twitterDescription.setAttribute("content", currentMetadata.description);

      const twitterImage = document.querySelector('meta[name="twitter:image"]');
      if (twitterImage) twitterImage.setAttribute("content", currentMetadata.image);

      const twitterUrl = document.querySelector('meta[name="twitter:url"]');
      if (twitterUrl) twitterUrl.setAttribute("content", currentMetadata.url);
    }
  }, [view]);

  return (
    <>
      <Navbar currentView={view} setView={setView} />
      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
          transition={{
            duration: 0.32,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {view === "home" && <Home setView={setView} shouldReduceMotion={shouldReduceMotion ?? false} />}
          {view === "experience" && <Experience />}
          {view === "education" && <Education />}
          {view === "resume" && <Resume />}
          {view === "contact" && <Contact />}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
