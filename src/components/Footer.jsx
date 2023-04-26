function Footer({darkMode}) {
    return (
        <div className='mt-20'>
            <div className='font-general-regular flex flex-col justify-center items-center'>
                <ul className='flex gap-4 my-2'>
                    <a className='hover:opacity-50 dark:hover:opacity-30 p-4 duration-200'
                       href='https://github.com/samueljcatania'
                       target='_blank'
                       rel='noopener noreferrer'>
                        {darkMode
                            ? <img src={require('../assets/footer/dark-mode/GitHub_512_DarkMode.png')}
                                   alt='Link to GitHub'
                                   width='32'/>
                            : <img src={require('../assets/footer/light-mode/GitHub_512_LightMode.png')}
                                   alt='Link to GitHub'
                                   width='32'/>
                        }
                    </a>
                    <a className='hover:opacity-50 dark:hover:opacity-30 p-4 duration-200'
                       href='https://www.linkedin.com/in/samueljcatania'
                       target='_blank'
                       rel='noopener noreferrer'>
                        {darkMode
                            ? <img src={require('../assets/footer/dark-mode/LinkedIn_512_DarkMode.png')}
                                   alt='Link to LinkedIn'
                                   width='32'/>
                            : <img src={require('../assets/footer/light-mode/LinkedIn_512_LightMode.png')}
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
