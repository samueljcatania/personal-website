function About() {
    return (
        <div className='flex justify-center mt-20'>
            <div className='grid place-items-center w-3/4 xl:w-1/2 2xl:w-1/3'>
                <h3 className='font-bold font-nunito text-4xl md:text-5xl mb-1 dark:text-dark-theme-text'>
                    About
                </h3>
                <div className='border-2 w-40 md:w-52 mb-10 border-black dark:border-dark-theme-text'></div>
                <p className='font-nunito text-justify dark:text-dark-theme-text'>
                    I’m a third-year bachelor's student pursuing an Honours Specialization in Computer Science at
                    Western University, with a passion for exploring the latest trends and topics in all things machine
                    learning, full-stack web development, and software engineering. I love the creative freedom and
                    flexibility that comes with building websites and web applications, and I'm constantly exploring new
                    frameworks and libraries to enhance my skills. The field of machine learning also fascinates me with
                    its unique blend of creativity, logic, and technology, inspiring me to explore its various
                    applications with supervised, unsupervised, and deep learning algorithms to tackle real-world
                    problems. When I’m not at my computer I like to spend my time reading, running, and playing board
                    games.
                </p>
                <a className='bg-black hover:bg-opacity-75 text-white font-bold py-2 px-4 rounded dark:bg-white
                             dark:text-black dark:hover:bg-opacity-75 duration-200 dark:duration-200 mt-10'
                   href={require('../assets/resume/Samuel-Catania_Resume.pdf')}
                   target='_blank'
                   rel='noopener noreferrer'>
                    Resume
                </a>

            </div>
        </div>)
}

export default About;
