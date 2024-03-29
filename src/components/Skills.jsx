// Components
import SingleSkill from "./SingleSkill";
// Data
import {skillData} from "../data/skillData";

function Skills({darkMode}) {
    return (
        <div className='flex justify-center mt-28 w-screen'>
            <div className='grid w-3/4 xl:w-1/2 2xl:w-1/3'>
                <div className='flex-shrink'>
                    <div className='grid place-items-center'>
                        <h3 className='font-bold font-nunito text-4xl md:text-5xl mb-1 dark:text-dark-theme-text'>
                            Skills
                        </h3>
                        <div className='border-2 w-40 md:w-52 mb-10 border-black dark:border-dark-theme-text'></div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-20 gap-y-5 z-0'>
                    {skillData.map((skillName, id) => (
                        <SingleSkill key={id} skillName={skillName} id={id} darkMode={darkMode}></SingleSkill>))}
                </div>
            </div>
        </div>)
}

export default Skills;
