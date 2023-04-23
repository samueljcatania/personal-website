import React from 'react';
import {Link} from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";

function Navbar({refs}) {
    const windowSize = useWindowSize()

    const scrollTo = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({behavior: 'smooth', block: 'start'})
        }
    }

    return (
        <nav className='grid grid-cols-1 sm:flex flex-wrap p-3 bg-theme shadow-lg sticky top-0 z-20'>
            <div className='flex justify-between'>
                <Link to='/'>
                    <div className='flex align-middle pt-1 sm:pt-0'>
                        <span className='font-semibold text-xl font-hahmlet'>Samuel Catania</span>
                    </div>
                </Link>
                {windowSize[0] < 640 &&
                    <button className='flex justify-end border rounded-md border-black'>
                        <img src={require('../assets/navbar/Dark-Mode_512.png')} alt='Change Light/Dark Mode'
                             width='32' height='32'/>
                    </button>}
            </div>
            <div className='flex-grow flex justify-start pt-2 sm:pt-0 mr-7 sm:mx-7 w-auto text-sm gap-5'>
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
                <button className='border rounded-md border-black'>
                    <img src={require('../assets/navbar/Dark-Mode_512.png')} alt='Change Light/Dark Mode'
                         width='32' height='32'/>
                </button>}
        </nav>
    );
}


export default Navbar;
