import {useRef} from "react";
import {motion, useInView} from "framer-motion";
import useWindowSize from "../hooks/useWindowSize";

function SingleSkill({skillName, id}) {
    const windowSize = useWindowSize()
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        amount: 'all',
        margin: '0px 300px -5% 300px'
    })

    return (
        <motion.div ref={ref}
                    style={{
                        transform: isInView ? 'none' : (id % 2 === 0 ? 'translateX(-300px)' : 'translateX(300px)'),
                        opacity: isInView ? 1 : 0,
                        transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1)'
                    }}>
            <motion.div className='flex flex-col items-center border rounded-lg'
                        whileHover={{scale: 1.05}}>
                <div className='flex place-items-center p-4 pl-20 pr-20 gap-2'>
                    <img src={require('../assets/' + skillName + '.png')} alt={skillName}/>
                    <h3 className='text-2xl font-nunito font-bold'>{skillName}</h3>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default SingleSkill;
