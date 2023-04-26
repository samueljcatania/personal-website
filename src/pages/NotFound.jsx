import {Link} from "react-router-dom";

function NotFound() {
    return (
        <div className='flex justify-center items-center h-screen w-screen bg-theme dark:bg-dark-theme'>
            <div className='grid place-items-center w-screen'>
                <h1 className='font-bold font-hahmlet xl:text-9xl mb-10 dark:text-dark-theme-text'>
                    404
                </h1>
                <h3 className='font-bold font-nunito text-5xl mb-1 dark:text-dark-theme-text'>
                    Sorry, this page couldn't be found.
                </h3>
                <p className='font-nunito text-lg dark:text-dark-theme-text mt-4 mb-6'>
                    But dont worry, there's plenty of other things on the homepage.
                </p>
                <Link to='/home'>
                    <button
                        className='mt-12 bg-black hover:bg-opacity-75 text-white font-bold py-2 px-4 rounded
                        dark:bg-white dark:text-black dark:hover:bg-opacity-75 duration-200 dark:duration-200'>
                        Back to Home
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound;
