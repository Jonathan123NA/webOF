export function Content() {
    return (
        <main className='main -ml-48 flex flex-grow flex-col p-4 transition-all duration-150 ease-in md:ml-0'>
            <div className='p-10 w-full h-full inline-block items-center justify-center bg-white text-center text-5xl font-bold rounded-lg shadow-md dark:bg-zinc-800 dark:text-white'>
                <div className='pb-6 bg-white dark:bg-zinc-800'>
                    <label for='table-search' className='sr-only'>Search</label>
                    <div className='relative mt-1'>
                        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                            <svg className='w-4 h-4 text-gray-500 dark:text-gray-400' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'>
                                <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z' />
                            </svg>
                        </div>
                        <input type='text' id='table-search' className='block font-medium p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Search for items' />
                    </div>
                </div>
                <div className="relative overflow-x-auto sm:rounded-lg">
                    <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                        <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-zinc-900">
                            Titulo de la tabla
                            <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
                        </caption>
                        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-zinc-700 dark:text-gray-400'>
                            <tr>
                                <th scope='col' className='p-4'>
                                    <div className='flex items-center'>
                                        <input id='checkbox-all-search' type='checkbox' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-zinc-700 dark:border-gray-600' />
                                        <label for='checkbox-all-search' className='sr-only'>checkbox</label>
                                    </div>
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Id
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Nombre
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Descripción
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Cantidad
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Estado
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Tipo
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='bg-white border-b dark:bg-zinc-900 dark:border-gray-700 hover:bg-zinc-50 dark:hover:bg-gray-600'>
                                <td className='w-4 p-4'>
                                    <div className='flex items-center'>
                                        <input id='checkbox-table-search-1' type='checkbox' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-zinc-700 dark:border-gray-600' />
                                        <label for='checkbox-table-search-1' className='sr-only'>checkbox</label>
                                    </div>
                                </td>
                                <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                                    Apple MacBook Pro 17'
                                </th>
                                <td className='px-6 py-4'>
                                    Silver
                                </td>
                                <td className='px-6 py-4'>
                                    Laptop
                                </td>
                                <td className='px-6 py-4'>
                                    $2999
                                </td>
                                <td className='px-6 py-4'>
                                    $2999
                                </td>
                                <td className='px-6 py-4'>
                                    <a href='#' className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>Edit</a>
                                </td>
                            </tr>
                            <tr className='bg-white dark:bg-zinc-900 hover:bg-gray-50 dark:hover:bg-gray-600'>
                                <td className='w-4 p-4'>
                                    <div className='flex items-center'>
                                        <input id='checkbox-table-3' type='checkbox' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
                                        <label for='checkbox-table-3' className='sr-only'>checkbox</label>
                                    </div>
                                </td>
                                <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                                    Apple iMac 27'
                                </th>
                                <td className='px-6 py-4'>
                                    Silver
                                </td>
                                <td className='px-6 py-4'>
                                    PC Desktop
                                </td>
                                <td className='px-6 py-4'>
                                    $3999
                                </td>
                                <td className='px-6 py-4'>
                                    $2999
                                </td>
                                <td className='px-6 py-4'>
                                    <a href='#' className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>Edit</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}