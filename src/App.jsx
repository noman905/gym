import "./App.css";
import { lazy, Suspense } from "react";

const Hero = lazy(() => import("./Hero"));
const Choose = lazy(() => import("./Choose"));
const About = lazy(() => import("./About"));
const Coach = lazy(() => import("./Coaches"));
const Inbox = lazy(() => import("./Inbox"));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Hero />
        <Choose />
        <About />
        <Coach />
        <Inbox />
      </div>
    </Suspense>
  );
};

