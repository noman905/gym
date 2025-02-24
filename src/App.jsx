import "./App.css";

import { Hero } from "./Hero";
import { Choose } from "./choose";
import { About } from "./about";
import { Coach } from "./Coaches";
import { Inbox } from "./inbox";


export const App = () => {
  return (
    
      <>
        <Hero />
        <Choose />
        <About />
        <Coach />
        <Inbox />
      </>
   
  );
};

