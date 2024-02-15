import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../layout/layout";
import { PrivateRoute } from "./private";
import { Home } from "../pages/home";
import { Historico } from "../pages/historico";
import { Configuracoes } from "../pages/configuracoes";
import { Login } from "../pages/login";
import { CriarConta } from "../pages/criarConta";
import { VerificarEmail } from "../pages/verificarEmail";
import { RecuperarSenha } from "../pages/recuperarSenha";
import { NotFound } from "../pages/notFound";

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
        element: <NotFound/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/criarconta",
        element: <CriarConta/>
    },
    {
        path: "/verificaremail",
        element: <VerificarEmail/>
    },
    {
        path: "/recuperarsenha",
        element: <RecuperarSenha/>
    },
        
])

export {router};