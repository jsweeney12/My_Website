import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './app.scss';
import Menu from './components/Menu/Menu';

function App() {
    const [data, setData] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        fetch("/jakesweeney/home")
        .then(
            res => res.status
        )
        .then(
            data => {
                setData(data)
            }
        )
    }, [])

    return (
        <div>
            {(data !== 201) ? (
                <p>ERROR: {data}</p>
            ) : (
                <div className='app'>
                    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Navbar>
                    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>
                    <div className='website-segments'>
                        <Intro/>
                        <Experience/>
                        <Projects/>
                        <Contact/>
                    </div>
                </div>
            )}
        </div>
    );
}
export default App;
