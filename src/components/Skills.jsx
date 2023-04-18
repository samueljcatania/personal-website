// Components
import SingleSkill from "./SingleSkill";
// Data
import {skillData} from "../data/skillData";

function Skills() {
    return (
        <div className='flex justify-center mt-32 w-screen'>
            <div className='grid w-3/4 xl:w-1/2 2xl:w-1/3'>
                <div className='flex justify-center'>
                    <h3 className='font-bold font-nunito mb-9 text-4xl md:text-5xl'>
                        Skills
                    </h3>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-20 gap-y-5'>
                    {skillData.map((skillName, id) => (
                        <SingleSkill key={id} skillName={skillName} id={id}></SingleSkill>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills;
