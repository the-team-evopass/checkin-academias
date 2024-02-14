import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../layout/layout";
import { PrivateRoute } from "./private";
import { Home } from "../pages/home";
import { Historico } from "../pages/historico";
import { Configuracoes } from "../pages/configuracoes";
import { Login } from "../pages/login";


const router = createBrowserRouter([

    {
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <PrivateRoute> <Home/> </PrivateRoute>
            },
            {
                path: "/historico",
                element: <PrivateRoute> <Historico/> </PrivateRoute>
            },
            {
                path: "/configuracoes",
                element: <PrivateRoute> <Configuracoes/> </PrivateRoute>
            }
        ]
    },
    {
        path: "*",
        element: <h1>Pagina 404</h1>
    },
    {
        path: "/login",
        element: <PrivateRoute> <Login/> </PrivateRoute>
    }
        
])

export {router};