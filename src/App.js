import React from 'react';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Footer from './components/footer/Footer';
import Projects from "./components/projects/Projects";
import Publications from "./components/publications/Publications";

const App = () => {
    return (
        <>
            <Header />
            <main className = 'main'>
                <Home/>
                <About/>
                <Skills/>
                <Qualification/>
                <Publications/>
                {/*<Projects/>*/}
                <Footer/>
            </main>
        </>
    )
}

export default App