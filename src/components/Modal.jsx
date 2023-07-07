export function Modal({ showModal, closeModal }) {
    const handleModal = () => {
        closeModal();
    };

    return (
        <>
            {showModal && (
                <div id='staticModal' className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-80 z-50'>
                    <div className='relative w-full max-w-2xl max-h-full'>
                        <div className='relative bg-white rounded-lg shadow dark:bg-zinc-900'>
                            <div className='flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600'>
                                <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                                    Agregar
                                </h3>
                                <button type='button' onClick={handleModal} className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white' data-modal-hide='staticModal'>
                                    <svg className='w-3 h-3' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 14'>
                                        <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6' />
                                    </svg>
                                    <span className='sr-only'>Close modal</span>
                                </button>
                            </div>
                            <div className='p-6 space-y-6'>
                                <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                                </p>
                            </div>
                            <div className='flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600'>
                                <button type='button' onClick={handleModal} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Agregar</button>
                                <button type='button' onClick={handleModal} className='text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-zinc-900 focus:z-10 dark:bg-zinc-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-zinc-600 dark:focus:ring-zinc-600'>Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}