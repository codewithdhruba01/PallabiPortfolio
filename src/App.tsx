import { useState, useEffect } from "react";
import { useReducedMotion } from "motion/react";
import { Navbar } from "@/components/navbar";
import { Home } from "@/pages/Home";
import { Experience } from "@/pages/Experience";
import { Education } from "@/pages/Education";
import { Resume } from "@/pages/Resume";
import { Contact } from "@/pages/Contact";

export default function App() {
  const [view, setView] = useState<"home" | "experience" | "education" | "resume" | "contact">(() => {
    const hash = window.location.hash.replace("#", "");
    const validViews = ["home", "experience", "education", "resume", "contact"];
    return (validViews.includes(hash) ? hash : "home") as any;
  });
  const shouldReduceMotion = useReducedMotion();

  // Update hash when view changes
  useEffect(() => {
    if (view === "home") {
      window.history.replaceState(null, "", window.location.pathname);
    } else {
      window.location.hash = view;
    }
  }, [view]);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update Metadata
    const metadata = {
      home: {
        title: "Pallabi Pati — Staff Nurse",
        description: "Personal website of Pallabi Pati — Staff Nurse",
        image: "/meta/home.png"
      },
      experience: {
        title: "Experience — Pallabi Pati",
        description: "Professional experience and clinical journey of Pallabi Pati.",
        image: "/meta/Experience.png"
      },
      education: {
        title: "Education — Pallabi Pati",
        description: "Academic background and medical training of Pallabi Pati.",
        image: "/meta/Education.png"
      },
      resume: {
        title: "Resume — Pallabi Pati",
        description: "Professional CV, certifications, and skills of Pallabi Pati.",
        image: "/meta/Resume.png"
      },
      contact: {
        title: "Contact — Pallabi Pati",
        description: "Get in touch with Pallabi Pati for inquiries or collaborations.",
        image: "/meta/Contact.png"
      }
    };

    const currentMetadata = metadata[view];
    if (currentMetadata) {
      document.title = currentMetadata.title;
      
      // Update description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) metaDescription.setAttribute("content", currentMetadata.description);

      // Update OG Title
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute("content", currentMetadata.title);

      // Update OG Description
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) ogDescription.setAttribute("content", currentMetadata.description);

      // Update OG Image
      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) ogImage.setAttribute("content", currentMetadata.image);

      // Update Twitter Title
      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (twitterTitle) twitterTitle.setAttribute("content", currentMetadata.title);

      // Update Twitter Description
      const twitterDescription = document.querySelector('meta[name="twitter:description"]');
      if (twitterDescription) twitterDescription.setAttribute("content", currentMetadata.description);

      // Update Twitter Image
      const twitterImage = document.querySelector('meta[name="twitter:image"]');
      if (twitterImage) twitterImage.setAttribute("content", currentMetadata.image);
    }
  }, [view]);

  return (
    <>
      <Navbar currentView={view} setView={setView} />
      {view === "home" && <Home setView={setView} shouldReduceMotion={shouldReduceMotion ?? false} />}
      {view === "experience" && <Experience setView={setView} />}
      {view === "education" && <Education setView={setView} />}
      {view === "resume" && <Resume setView={setView} />}
      {view === "contact" && <Contact setView={setView} />}
    </>
  );
}
