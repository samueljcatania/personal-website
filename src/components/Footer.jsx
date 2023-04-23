function Footer() {
    return (
        <div>
            <div className='border-b border-black dark:border-dark-theme-text'></div>
            <div className='font-general-regular flex flex-col justify-center items-center'>
                <ul className='flex gap-4'>
                    <a className='hover:bg-gray-100 shadow-sm p-4 duration-300'
                       href='https://github.com/samueljcatania'
                       target='_blank'
                       rel='noopener noreferrer'>
                        <img src={require('../assets/footer/Github_512.png')} alt='Link to Github'
                             width='32'/>
                    </a>
                    <a className='hover:bg-gray-100 shadow-sm p-4 duration-300'
                       href='https://www.linkedin.com/in/samueljamescatania'
                       target='_blank'
                       rel='noopener noreferrer'>
                        <img src={require('../assets/footer/LinkedIn_512.png')} alt='Link to LinkedIn'
                             width='32'/>
                    </a>
                </ul>
            </div>
        </div>
    )
}

export default Footer;
