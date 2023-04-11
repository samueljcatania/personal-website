import {Link} from 'react-router-dom';
import ProgressiveImage from 'react-progressive-graceful-image';
import {motion} from "framer-motion";

const transition = {duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]}

function Splash({imageSize}) {
    return (
        <div className='container'>
            <div className='container window-height d-flex align-items-center'>
                <div className='container'>
                    <div className='container rounded-3 g-0'
                         style={{
                             width: imageSize.width,
                             height: imageSize.height,
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
                    <div className='container' style={{width: imageSize.width}}>
                        <div className='row'>
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
            </div>
        </div>
    )
}

export default Splash;
