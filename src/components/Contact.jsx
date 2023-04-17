function Contact() {
    return (
        <section className=''>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-nunito font-bold text-center text-gray-900 dark:text-white">Contact
                    (Under Construction)</h2>
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
                        <a href="https://github.com/samueljcatania"
                           className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300">
                            <i className="text-xl sm:text-2xl md:text-3xl">
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24"
                                     strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </i>
                        </a>
                        <a href="https://www.linkedin.com/in/samueljamescatania"
                           className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300">
                            <i className="text-xl sm:text-2xl md:text-3xl">
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24"
                                     strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </i>
                        </a>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Contact;
