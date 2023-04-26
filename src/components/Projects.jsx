// Components
import SingleProject from "./SingleProject";
// Data
import {projectData} from "../data/projectData";

function Projects() {
    return (
        <div className='grid place-items-center mt-28 w-screen'>
            <div className='grid w-3/4 xl:w-1/2 2xl:w-1/3'>
                <div className='grid place-items-center'>
                    <h3 className='font-bold font-nunito text-4xl md:text-5xl mb-1 dark:text-dark-theme-text'>
                        Projects
                    </h3>
                    <div className='border-2 w-40 md:w-52 mb-24 border-black dark:border-dark-theme-text'></div>
                </div>
            </div>
            <div className='grid w-screen gap-72 z-0'>
                {projectData.map((projectInfo, id) => (
                    <SingleProject key={id} projectInfo={projectInfo} id={id}></SingleProject>
                ))}
            </div>
        </div>
    )
}

export default Projects;
