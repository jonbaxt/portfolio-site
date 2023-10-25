import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import TopSection from "./Components/TopSection/TopSection";
import NewAbout from "./Components/Sections/NewAbout";
import Skills from "./Components/Sections/Skills";
import Contact from "./Components/Sections/Contact";
import Projects from "./Components/Sections/Projects";
import Error from "./Components/Error";


export default (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<TopSection/>} exact />
            <Route path='/about' element={<NewAbout />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />

            <Route path='*' element={<Error />} />
        </Routes>
    </BrowserRouter>
)