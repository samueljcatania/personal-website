import React from 'react';
import {Link} from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";

function Navbar({refs}) {
    const windowSize = useWindowSize()

    //     let themeToggleDarkIcon = document.getElementById('darkModeIcon');
    // let themeToggleLightIcon = document.getElementById('lightModeIcon');
    //
    // if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    //     themeToggleDarkIcon.classList.remove('hidden');
    //
    // } else {
    //     themeToggleLightIcon.classList.remove('hidden');
    //
    // }
    //
    // let themeToggleButton = document.getElementById('themeButton');
    // let bodyStyles = document.body.style;

    function handleThemeClick(event) {
        event.preventDefault();

        let themeToggleDarkIcon = document.getElementById('darkModeIcon');
        let themeToggleLightIcon = document.getElementById('lightModeIcon');
        let bodyStyles = document.body.style;

        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');

        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');

                localStorage.setItem('color-theme', 'dark');
                bodyStyles.setProperty('--background-color', '#27272a');

            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
                bodyStyles.setProperty('--background-color', '#f0d8bb');
            }

        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
                bodyStyles.setProperty('--background-color', '#f0d8bb');

            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
                bodyStyles.setProperty('--background-color', '#27272a');
            }
        }
    }


    const scrollTo = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({behavior: 'smooth', block: 'start'})
        }
    }

    return (
        <nav
            className='grid grid-cols-1 sm:flex flex-wrap p-3 bg-theme shadow-lg sticky top-0 z-20 dark:bg-dark-theme dark:shadow-2xl'>
            <div className='flex justify-between'>
                <Link to='/'>
                    <div className='flex align-middle pt-0.5 sm:pt-0'>
                        <span
                            className='font-semibold text-xl font-hahmlet dark:text-dark-theme-text'>
                            Samuel Catania
                        </span>
                    </div>
                </Link>
                {windowSize[0] < 640 &&
                    <button className='flex justify-end border rounded-md border-black dark:border-dark-theme-text'>
                        <img src={require('../assets/navbar/Dark-Mode_512.png')} alt='Change Light/Dark Mode'
                             width='32' height='32'/>
                    </button>}
            </div>
            <div
                className='flex-grow flex justify-start pt-2 sm:pt-0 mr-7 sm:mx-7 w-auto text-sm gap-5 dark:text-dark-theme-text'>
                <button onClick={() => scrollTo(refs.about)}>
                    About
                </button>
                <button onClick={() => scrollTo(refs.skills)}>
                    Skills
                </button>
                <button onClick={() => scrollTo(refs.projects)}>
                    Projects
                </button>
                <button onClick={() => scrollTo(refs.contact)}>
                    Contact
                </button>
            </div>
            {windowSize[0] >= 640 &&
                <button className='border rounded-md border-black dark:border-dark-theme-text'
                        id='themeButton'
                        onClick={handleThemeClick}>
                    <img className='hidden'
                         src={require('../assets/navbar/Dark-Mode_512.png')}
                         id='darkModeIcon'
                         alt='Change Light/Dark Mode'
                         width='32' height='32'/>
                    <img className='hidden'
                         src={require('../assets/navbar/Light-Mode_512.png')}
                         id='lightModeIcon'
                         alt='Change Light/Dark Mode'
                         width='32' height='32'/>
                </button>}
        </nav>
    );
}


export default Navbar;
