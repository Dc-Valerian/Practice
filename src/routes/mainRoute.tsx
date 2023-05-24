import { createBrowserRouter } from "react-router-dom"
import AdminLayout from "../components/block/admin/AdminLayout"

import Display from "../pages/Display"
import ClassWork from "../pages/ClassWork"
import ContactPage from "../pages/ContactPage"
import AboutPage from "../pages/AboutPage"
import ChildrenState from "../components/reUse/ChildrenState"
import Register from "../pages/Register"
import SignUp from "../pages/Register/SignUp"
import Signin from "../pages/Register/Signin"
import Error from "../Error/Error"
import Error2 from "../Error/Error2"
import Error3 from "../Error/Error3"
import DarkMode from "../Global/DarkMode"

export const mainRoute = createBrowserRouter([
    {
        path: "/",
        element: <AdminLayout />,
        children: [

            {
                index: true,
                element: <ClassWork />
            },
            {
                path: "display",
                element: <Display />
            },
            {
                path: "about",
                element: <AboutPage />
            },
            {
                path: "register",
                element: <Register>
                    <SignUp />
                </Register>
            },
            {
                path: "sign-in",
                element: <Register>
                    <Signin />
                </Register>
            },
            {
                path: "*",
                element:<Error/>
            },

            {
                path: "contact",
                element:
                 <ChildrenState>
                    <ContactPage />
                </ChildrenState>
            }
        ]
    }
]) 