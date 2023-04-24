import {useRef} from "react";
import {motion, useInView} from "framer-motion";
// Hooks
import useWindowSize from "../hooks/useWindowSize";

function SingleSkill({skillName, id}) {
    const windowSize = useWindowSize()
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true, margin: '0px 300px -5% 300px'
    })

    return (
        <motion.div ref={ref}
                    style={{
                        transform: isInView ? 'none' : (id % 2 === 0 ? (windowSize[0] < 1280 ? 'translateX(-15%)' : 'translateX(-300px)') : (windowSize[0] < 1280 ? 'translateX(15%)' : 'translateX(300px)')),
                        opacity: isInView ? 1 : 0,
                        transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1)'
                    }}>
            <motion.div
                className='flex flex-col items-center border rounded-lg shadow-md border-black dark:border-dark-theme-text'
                whileHover={{scale: 1.1}}>
                <div className='flex place-items-center p-4 gap-2'>
                    {/*{((skillName === 'Tailwind' || skillName === 'Git') && (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) ?*/}
                    {/*        <img src={require('../assets/skills/512/light/' + skillName + '_512_Light.png')} alt={skillName}*/}
                    {/*             width='32'/>*/}
                    {/*        : <img src={require('../assets/skills/512/' + skillName + '_512.png')} alt={skillName}*/}
                    {/*               width='32'/>*/}
                    {/*)}*/}
                    <h3 className='text-2xl font-nunito font-bold dark:text-dark-theme-text'>{skillName}</h3>
                </div>
            </motion.div>
        </motion.div>)
}

export default SingleSkill;
