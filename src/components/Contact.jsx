function Contact() {
    return (
        <div className='flex justify-center mt-32 w-screen'>
            <div className='grid w-3/4 xl:w-1/2 2xl:w-1/3'>
                <div className='grid place-items-center'>
                    <h3 className='font-bold font-nunito text-4xl md:text-5xl mb-1'>
                        Contact
                    </h3>
                    <div className='border-2 w-40 md:w-52 mb-9'></div>
                </div>
                <div className='py-8 lg:py-16 px-4 mx-auto'>
                    <form action="#" className="space-y-8">
                        <div>
                            <input type="text" id="name"
                                   className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                   placeholder="Name" required/>
                        </div>
                        <div>
                            <input type="email" id="email"
                                   className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                   placeholder="Email" required/>
                        </div>
                        <div className="sm:col-span-2">
                        <textarea id="message" rows="6"
                                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"></textarea>
                        </div>
                        <button type="submit"
                                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send
                        </button>
                    </form>
                </div>
                <div className="pt-5 mt-5 border-t-2 border-primary-light dark:border-secondary-dark">
                    <div className="font-general-regular flex flex-col justify-center items-center mb-5">
                        <ul className="flex gap-4">
                            <a className="text-gray-400 rounded-lg bg-gray-50 hover:bg-gray-100 shadow-sm p-4 duration-300"
                               href='https://github.com/samueljcatania'
                               target='_blank'
                               rel='noopener noreferrer'>
                                <img src={require('../assets/footer/Github_512.png')} alt='Link to Github'
                                     width='32'/>
                            </a>
                            <a className="text-gray-400 rounded-lg bg-gray-50 hover:bg-gray-100 shadow-sm p-4 duration-300"
                               href='https://www.linkedin.com/in/samueljamescatania'
                               target='_blank'
                               rel='noopener noreferrer'>
                                <img src={require('../assets/footer/LinkedIn_512.png')} alt='Link to LinkedIn'
                                     width='32'/>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
