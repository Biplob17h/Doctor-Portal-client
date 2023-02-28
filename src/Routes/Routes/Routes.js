import { createBrowserRouter } from "react-router-dom";
import Password from "../../Components/Password";
import Authentication from "../../Layout/Authentication";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Login from "../../Pages/Authentication/Login/Login";
import Register from "../../Pages/Authentication/Register/Register";
import Home from "../../Pages/Home/Home/Home";
import NotFound from "../../Pages/Shared/NotFound/NotFound";
import PrivateRoutes from "../PrivateRoutes.js/PrivateRoutes";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appointment',
                element: <PrivateRoutes><Appointment></Appointment></PrivateRoutes>
            }

        ]
    },
    {
        path: '/auth',
        element: <Authentication></Authentication>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
            {
                path: '/auth/notfound',
                element: <NotFound></NotFound>
            },
            {
                path:'/auth/reset',
                element:<Password></Password>
            }
        ]
    }
])

export default routes;