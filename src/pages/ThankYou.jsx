import {Link} from "react-router-dom";

function ThankYou() {
    return (
        <div className='flex justify-center items-center h-screen w-screen bg-theme dark:bg-dark-theme'>
            <div className='grid place-items-center w-screen'>
                <h3 className='font-bold font-nunito text-4xl md:text-5xl mb-1 dark:text-dark-theme-text'>
                    Thank you!
                </h3>
                <p className='font-nunito text-md dark:text-dark-theme-text'>I'll get back to you as soon as
                    possible.</p>
                <Link to='/home'>
                    <button
                        className='mt-12 bg-black hover:bg-opacity-75 text-white font-bold py-2 px-4 rounded
                        dark:bg-white dark:text-black dark:hover:bg-opacity-75'>
                        Return to Home
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ThankYou;
