import { createBrowserRouter } from "react-router-dom";
import About from "../component/About";
import Contact from "../component/Contact";
import Home from "../component/Home";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
   {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/about",
            element: <About/>
        },
        {
            path: "/contact",
            element: <Contact/>
        }
    ]
   }

])