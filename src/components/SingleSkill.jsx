import {motion} from "framer-motion";

function SingleSkill({skillName}) {
    return (
        <motion.div className='flex flex-col items-center border rounded-lg md:flex-row md:max-w-xl'
                    whileHover={{scale: 1.1}}>
            <div className='grid place-items-center p-4'>
                <img src={require('../assets/' + skillName + '.png')} alt={skillName}/>
                <h3 className='text-2xl font-nunito font-bold'>{skillName}</h3>
            </div>
        </motion.div>
    )
}

export default SingleSkill;
