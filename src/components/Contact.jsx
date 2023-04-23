function Contact() {
    return (
        <div className='flex justify-center mt-32 w-screen'>
            <div className='grid w-3/4 xl:w-1/2 2xl:w-1/3'>
                <div className='grid place-items-center'>
                    <h3 className='font-bold font-nunito text-4xl md:text-5xl mb-1 dark:text-dark-theme-text'>
                        Contact
                    </h3>
                    <div className='border-2 w-40 md:w-52 mb-9 border-black dark:border-dark-theme-text'></div>
                </div>
                <div className='sm:w-3/4 place-self-center'>
                    <form action='#' className='space-y-8'>
                        <div>
                            <input type='text' id='name'
                                   className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                                   placeholder='Name' required/>
                        </div>
                        <div>
                            <input type='email' id='email'
                                   className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                                   placeholder='Email' required/>
                        </div>
                        <div className='sm:col-span-2'>
                        <textarea
                            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                            id='message'
                            rows='6'>
                        </textarea>
                        </div>
                        <button
                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                            type='submit'>
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
