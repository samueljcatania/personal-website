import {Link} from 'react-router-dom';
import ProgressiveImage from 'react-progressive-graceful-image';
import {motion} from "framer-motion";

const transition = {duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]}

function Splash({imageWidth}) {
    return (
        <div className='container'>
            <div className='container text-center m-md-6 g-0 rounded-3'
                 style={{
                     width: imageWidth,
                     height: 'auto',
                     overflow: 'hidden',
                 }}>
                <Link to={`/home`}>
                    <ProgressiveImage
                        src={require('../images/larger-compressed-splash-image.jpg')}
                        placeholder={require('../images/compressed-splash-image.jpg')}>
                        {(src) => <motion.img className='img-fluid rounded-3'
                                              whileHover={{scale: 1.1}}
                                              transition={transition}
                                              src={src}
                                              alt='Samuel Catania'/>}
                    </ProgressiveImage>
                </Link>
            </div>
            <div className='container' style={{width: imageWidth}}>
                <div className='row mt-2'>
                    <motion.div className='col p-0 text-start'
                                exit={{opacity: 0}}
                                transition={transition}>
                        Web Developer
                    </motion.div>
                    <motion.div className='col p-0 text-end'
                                exit={{opacity: 0}}
                                transition={transition}>
                        Student
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Splash;
