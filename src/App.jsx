import "./App.css";
import { lazy, Suspense } from "react";

// Lazy Loading Components (improves performance)
const Hero = lazy(() => import("./hero"));
const Choose = lazy(() => import("./choose"));
const About = lazy(() => import("./about"));
const Coach = lazy(() => import("./Coaches"));
const Inbox = lazy(() => import("./inbox"));

export const App = () => {
  return (
    <Suspense fallback={<div className="text-center text-white">Loading...</div>}>
      <>
        <Hero />
        <Choose />
        <About />
        <Coach />
        <Inbox />
      </>
    </Suspense>
  );
};
