// Components
import SingleSkill from "./SingleSkill";

// Data
import {skillData} from "../data/skillData";

function Skills() {
    return (
        <div className='flex justify-center mt-32 w-screen'>
            <div className='grid place-items-center w-screen xl:w-1/2 2xl:w-1/3'>
                <h3 className='font-bold font-nunito mb-9 text-4xl md:text-5xl'>
                    Skills
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-20 gap-y-5'>
                    {skillData.map((skillName, id) => (
                        <SingleSkill skillName={skillName} key={id}></SingleSkill>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills;
