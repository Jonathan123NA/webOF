export function Content({ tableData }) {
    const getHeaders = () => {
        if (tableData.length > 0) {
            return Object.keys(tableData[0]);
        }
        return [];
    };

    const headers = getHeaders();

    return (
        <main className='main -ml-48 flex flex-grow flex-col p-4 transition-all duration-150 ease-in md:ml-0'>
            <div className='p-10 w-full h-full inline-block items-center justify-center bg-white text-center text-5xl font-bold rounded-lg shadow-md dark:bg-zinc-800 dark:text-white'>
                <div className='pb-6 bg-white dark:bg-zinc-800'>
                    <label htmlFor='table-search' className='sr-only'>Search</label>
                    <div className='relative mt-1'>
                        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                            <svg className='w-4 h-4 text-gray-500 dark:text-gray-400' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'>
                                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z' />
                            </svg>
                        </div>
                        <input type='text' id='table-search' className='block font-medium p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Search for items' />
                    </div>
                </div>
                <div className="relative overflow-x-auto sm:rounded-lg">
                    <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                        <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-zinc-900">
                            Titulo de la tabla
                            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
                        </caption>
                        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-zinc-700 dark:text-gray-400'>
                            <tr>
                                <th scope='col' className='p-4'>
                                    <div className='flex items-center'>
                                        <input id='checkbox-all-search' type='checkbox' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-zinc-700 dark:border-gray-600' />
                                        <label htmlFor='checkbox-all-search' className='sr-only'>checkbox</label>
                                    </div>
                                </th>
                                {
                                    headers.map((header, index) => (
                                        <th key={index} scope='col' className='px-6 py-3'>
                                            {header}
                                        </th>
                                    ))
                                }
                                <th scope='col' className='px-6 py-3'></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableData.map((item, index) => {
                                    const isLastItem = index === tableData.length - 1;
                                    const rowClassName = `bg-white ${isLastItem ? '' : 'border-b'} dark:bg-zinc-900 dark:border-gray-700 hover:bg-zinc-50 dark:hover:bg-gray-800`;

                                    return (
                                        <tr key={item.id} className={rowClassName}>
                                            <td className='w-4 p-4'>
                                                <div className='flex items-center'>
                                                    <input id={`checkbox-table-search-${item.id}`} type='checkbox' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-zinc-700 dark:border-gray-600' />
                                                    <label htmlFor={`checkbox-table-search-${item.id}`} className='sr-only'>checkbox</label>
                                                </div>
                                            </td>
                                            <th className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                                                {item.id}
                                            </th>
                                            {Object.keys(item).map((key) => {
                                                if (key !== 'id') {
                                                    return (
                                                        <td key={key} className='px-6 py-4'>
                                                            {item[key]}
                                                        </td>
                                                    )
                                                }
                                                return null;
                                            })}
                                            <td className='px-6 py-4'>
                                                <a href='#' className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>Edit</a>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </main >
    )
}