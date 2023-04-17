// function Navbar() {
//     return (
//         <nav className='bg-gray-50 flex fixed w-screen mt-6'>
//             <div className='flex-1 flex justify-center mr-auto'>
//                 <a href='/' className='mx-2 font-nunito'>Samuel Catania</a>
//             </div>
//             <div className='flex-1 flex justify-center ml-auto'>
//                 <a href='/home' className='mx-2 font-nunito'>Home</a>
//             </div>
//         </nav>
//     )
// }
//
// export default Navbar;

import React, {useState, useEffect} from 'react';

function Navbar() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`flex items-center justify-between flex-wrap p-6 bg-white shadow-lg ${isSticky ? 'fixed top-0 left-0 right-0' : ''}`}>
            <div className="flex items-center flex-shrink-0 text-black mr-6">
                <span className="font-semibold text-xl font-hahmlet tracking-tight">Samuel Catania</span>
            </div>
            <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${isSticky ? 'block' : 'hidden'}`}>
                <div className="text-sm lg:flex-grow">
                    <a href="#responsive-header"
                       className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-500 mr-4">
                        Home
                    </a>
                    <a href="#responsive-header"
                       className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-500 mr-4">
                        About
                    </a>
                    <a href="#responsive-header"
                       className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-500">
                        Contact
                    </a>
                </div>
                <div>
                    <button
                        className="inline-block px-4 py-2 leading-none border rounded text-black border-black hover:text-gray-500 hover:border-gray-500 mt-4 lg:mt-0">
                        Theme
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
