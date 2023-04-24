function Footer({darkMode}) {
    return (
        <div className='mt-20'>
            <div className='font-general-regular flex flex-col justify-center items-center'>
                <ul className='flex gap-4 my-2'>
                    <a className='hover:bg-gray-100 p-4 duration-300 rounded-full'
                       href='https://github.com/samueljcatania'
                       target='_blank'
                       rel='noopener noreferrer'>
                        {darkMode
                            ? <img src={require('../assets/footer/dark/GitHub_512_DarkMode.png')}
                                   alt='Link to GitHub'
                                   width='32'/>
                            : <img src={require('../assets/footer/light/GitHub_512_LightMode.png')}
                                   alt='Link to GitHub'
                                   width='32'/>
                        }
                    </a>
                    <a className='hover:bg-gray-100 p-4 duration-300 rounded-full'
                       href='https://www.linkedin.com/in/samueljamescatania'
                       target='_blank'
                       rel='noopener noreferrer'>
                        {darkMode
                            ? <img src={require('../assets/footer/dark/LinkedIn_512_DarkMode.png')}
                                   alt='Link to LinkedIn'
                                   width='32'/>
                            : <img src={require('../assets/footer/light/LinkedIn_512_LightMode.png')}
                                   alt='Link to LinkedIn'
                                   width='32'/>
                        }
                    </a>
                </ul>
            </div>
        </div>
    )
}

export default Footer;
