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
        <div className='flex justify-center items-center h-screen'>
            <div className="grid grid-cols-1 flex justify-center">
                <div className='flex rounded-lg overflow-hidden'
                     style={{
                         width: imageSize.width,
                         height: imageSize.height
                     }}>
                    <Link to={`/home`}>
                        <ProgressiveImage
                            src={require('../images/larger-compressed-splash-image.jpg')}
                            placeholder={require('../images/compressed-splash-image.jpg')}>
                            {(src) => <motion.img whileHover={{scale: 1.1}}
                                                  transition={transition}
                                                  src={src}
                                                  alt='Samuel Catania'/>}
                        </ProgressiveImage>
                    </Link>
                </div>
                <div className='flex h-10'>
                    <div className='grid grid-cols-2 h-10' style={{width: imageSize.width}}>
                        <motion.div className='container text-start'
                                    exit={{opacity: 0}}
                                    transition={transition}>
                            Western University
                        </motion.div>
                        <motion.div className='container text-end'
                                    exit={{opacity: 0}}
                                    transition={transition}>
                            London, Canada
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Splash;
