import React from 'react'
import {HashRouter, Routes, Route, Navigate} from 'react-router-dom'
import { Layout } from './layout/Layout'
import Pages, {PATH} from './Pages'
import PreJunior from "./pages/PreJunior";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";
import Error404 from "./pages/Error404";

/*
* 1 - в файле Pages.tsx дописать роуты на все страницы
* 2 - в файле Sidebar.tsx дописать className так чтоб вешался класс s.active когда мы уже на соответствующей странице
* 3 - застилизовать хэдэр и сайдбар в соответствии с дизайном
* */

function HW5() {
    return (
        <HashRouter>
            {/*в gh-pages лучше работает HashRouter, с BrowserRouter скорее всего не пройдёт тест*/}
            <Layout>
                <Pages />
            </Layout>
        </HashRouter>
    )
}

export default HW5
