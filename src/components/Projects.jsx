// Components
import SingleProject from "./SingleProject";

function Projects() {
    return (
        <div className='flex justify-center mt-32 w-screen'>
            <div className='grid w-3/4 xl:w-1/2 2xl:w-1/3'>
                <div className='grid place-items-center'>
                    <h3 className='font-bold font-nunito text-4xl md:text-5xl mb-1 dark:text-dark-theme-text'>
                        Projects
                    </h3>
                    <div className='border-2 w-40 md:w-52 mb-9 border-black dark:border-dark-theme-text'></div>
                </div>
                <SingleProject/>
                <SingleProject/>
                <SingleProject/>
            </div>
        </div>
    )
}

export default Projects;
