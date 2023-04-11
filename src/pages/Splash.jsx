import {Link} from 'react-router-dom';
import ProgressiveImage from 'react-progressive-graceful-image';

function Splash() {
    return (
        <div className='container'>
            <div className='text-center m-md-6'>
                <Link to={`/home`}>
                    <ProgressiveImage
                        src={require('../images/splash_image.webp')}
                        placeholder={require('../images/splash_image.webp')}>
                        {(src) => <img className='img-fluid w-50 rounded' src={src} alt='Samuel Catania'/>}
                    </ProgressiveImage>
                </Link>
            </div>
            <div className='container w-50'>
                <div className='row mt-2'>
                    <div className='col p-0 text-start'>
                        Web Developer
                    </div>
                    <div className='col p-0 text-end'>
                        Student
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Splash;
