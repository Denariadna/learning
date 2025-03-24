import {Route, Routes} from "react-router-dom";
import './index.scss';
import path from 'path';
import { Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AbotPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Suspense } from "react";

const App = () =>{
    return (
        <div className="app">
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/about' element={<AboutPageAsync/>}></Route>
                    <Route path='/' element={<MainPageAsync/>}></Route>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;