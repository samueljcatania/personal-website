import SingleProject from "./SingleProject";
import {skillData} from "../data/skillData";
import SingleSkill from "./SingleSkill";

function Projects() {
    return (
        <div className='flex justify-center mt-32 w-screen'>
            <div className='grid w-3/4 xl:w-1/2 2xl:w-1/3'>
                <div className='flex justify-center'>
                    <h3 className='font-bold font-nunito mb-9 text-4xl md:text-5xl'>
                        Projects
                    </h3>
                </div>
                <SingleProject/>
                <SingleProject/>

                <SingleProject/>

            </div>
        </div>
    )
}

export default Projects;
