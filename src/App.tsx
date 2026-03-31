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
