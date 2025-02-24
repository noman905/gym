import { About } from "./about";
import "./App.css";
import { Choose } from "./choose";
import { Coach } from "./Coaches";
import { Hero } from "./Hero";
import { Inbox } from "./inbox";



export const App = () => {
  return (
    
      <div>
        <Hero />
        <Choose />
        <About />
        <Coach />
        <Inbox />
      </div>
    
  );
};

