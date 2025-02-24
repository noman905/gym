import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";
import { App } from "./App";
import  Footer  from "./footer";
import Navbar from "./navbar";

// Lazy Loading (Code Splitting)
const About = lazy(() => import("./about"));
const Coaches = lazy(() => import("./Coaches"));
const Contact = lazy(() => import("./Contact"));
const Errorpage = lazy(() => import("./error"));

// Layout Component
const AppLayout = () => (
  <>
    <Navbar />
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
    <Footer />
  </>
);

// Define Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Errorpage />,
    children: [
      { path: "/", element: <App /> },
      { path: "/Contact", element: <Contact /> },
      { path: "/Coaches", element: <Coaches /> },
      { path: "/About", element: <About /> },
    ],
  },
]);

// Export Router
export const Router = () => <RouterProvider router={router} />;
