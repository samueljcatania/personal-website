import {Link} from 'react-router-dom';
import ProgressiveImage from 'react-progressive-graceful-image';
import {motion} from "framer-motion";
// Hooks
import UseImagePreloader from "../hooks/UseImagePreloader";
// Images
import Image3 from "../images/splash_image3.webp";
import Image4 from "../images/larger-compressed-splash-image.jpg";
import Image5 from "../images/compressed-splash-image.jpg";

const transition = {duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]}

const pictures: string[] = [
    Image3, Image4, Image5
]

function Splash({imageSize}) {
    const {imagesPreloaded} = UseImagePreloader(pictures)

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
                                                      src={Image3}
                                                      alt='Samuel Catania'/>}
                            </ProgressiveImage>
                        </Link>
                    </div>
                    <div className='container' style={{width: imageSize.width}}>
                        <div className='row'>
                            <motion.div className='col p-0 text-start'
                                        exit={{opacity: 0}}
                                        transition={transition}>
                                Western University
                            </motion.div>
                            <motion.div className='col p-0 text-end'
                                        exit={{opacity: 0}}
                                        transition={transition}>
                                London, Canada
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Splash;
