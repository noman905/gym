import { createBrowserRouter, Outlet } from "react-router-dom";

import { App } from "./App";

import { RouterProvider } from "react-router-dom";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { About } from "./about";
import { Coach } from "./Coaches";
import { Contact } from "./Contact";
import { Errorpage } from "./error";
import { useMemo } from "react";



export const Router=useMemo((()=>{

   const  router=createBrowserRouter([
       {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Errorpage />,

       

        children:[

          {

                path:"/",

                element:<App />
             
                   
              },
            
        
              ,{
              path:"/Contact",

              element:<Contact />

             

              },
              {
                path:"/Coaches" ,
                element:<Coach />
              }
              ,{

                path:"/About",

                element:<About />
             
  
                }
            

        ]}]);
   
   





return <RouterProvider  router={router}/>



}));





 const AppLayout=useMemo((()=>{

   return(
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>

   )



 }));
