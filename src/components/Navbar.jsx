import React from 'react';
import {Link} from "react-router-dom";

function Navbar({refs}) {
    const scrollTo = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({behavior: 'smooth', block: 'start'})
        }
    }

    return (
        <nav className='flex items-center flex-wrap p-4 bg-theme shadow-lg sticky top-0 z-20'>
            <div className='flex items-center flex-shrink-0 mr-6'>
                <span className='font-semibold text-xl font-hahmlet'>Samuel Catania</span>
            </div>
            <div className='flex-grow flex items-center w-auto'>
                <div className='text-sm lg:flex-grow'>
                    <Link className="mt-4 inline-block lg:mt-0 mr-4"
                          to='/'>
                        Splash
                    </Link>
                    <button className="block mt-4 lg:inline-block lg:mt-0 mr-4"
                            onClick={() => scrollTo(refs.about)}>
                        About
                    </button>
                    <button className="block mt-4 lg:inline-block lg:mt-0 mr-4"
                            onClick={() => scrollTo(refs.skills)}>
                        Skills
                    </button>
                    <button className="block mt-4 lg:inline-block lg:mt-0 mr-4"
                            onClick={() => scrollTo(refs.projects)}>
                        Projects
                    </button>
                    <button className="block mt-4 lg:inline-block lg:mt-0 mr-4"
                            onClick={() => scrollTo(refs.contact)}>
                        Contact
                    </button>
                </div>
                <div>
                    <button
                        className="inline-block px-4 py-2 leading-none border rounded text-black border-black mt-4 lg:mt-0">
                        <img src={require('../assets/navbar/Dark-Mode_512.png')} alt='Change Light/Dark Mode'
                             width='24'/>
                    </button>
                </div>
            </div>
        </nav>
    );
}


export default Navbar;
