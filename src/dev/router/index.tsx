import {createHashRouter, Navigate} from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout'
import { generateMusic12DocumentRoutes } from "../../books/Music12Document/data/music12DocumentLoader.tsx";
import { generateMusicTheoryDocumentRoutes } from "../../books/MusicTheoryDocument/data/musicTheoryDocumentLoader.tsx";
import { generateTonicMLDocumentRoutes } from "../../books/TonicMLDocument/data/tonicmlDocumentLoader.tsx";
import { generateTonicMLScoreRoutes } from "../../books/TonicMLScore/data/tonicmlScoreLoader.tsx";
import About from '../apps/About';
import Settings from '../apps/Settings';
import Home from '../apps/Home';
import Mtkit from '../apps/Mtkit';
import TonicMLEditor from '../apps/TonicMLEditor';
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// 未匹配路由时：打印错误地址并跳转到首页
const BadRouteRedirect: React.FC = () => {
    const location = useLocation()
    
    useEffect(() => {
        console.warn(`访问了不存在的路由: ${location.pathname}`)
    }, [location.pathname])
    
    return <Navigate to="/home/" replace />
}

//

export default createHashRouter([
    {
        path: "",
        element: <Navigate to="/home/" replace />
    },
    {
        path: "/",
        element: <MainLayout/>,
        children:  [
            {
                path: "home",
                element: <Home />
            },
            ...generateMusic12DocumentRoutes(),
            ...generateMusicTheoryDocumentRoutes(),
            ...generateTonicMLDocumentRoutes(),
            ...generateTonicMLScoreRoutes(),
            {
                path: "about",
                element: <About />
            },
            {
                path: "settings",
                element: <Settings />
            },
            {
                path: "mtkit",
                element: <Mtkit />
            },
            {
                path: "tonicml",
                element: <TonicMLEditor />
            }
        ]
    },
    {
        path: "*",
        element: <BadRouteRedirect />
    }
]);