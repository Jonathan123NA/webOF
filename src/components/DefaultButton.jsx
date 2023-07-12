export function DefaultButton({ label, svg, tableTitle, tableNameToUrl, tableName }) {
    const handleClick = () => {
        tableTitle && tableTitle(label);
        tableNameToUrl && tableNameToUrl(tableName);
    }

    return (
        <button type="button" class="w-full text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-r-xl text-sm px-7 py-4 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-zinc-700 dark:border-zinc-800 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
            onClick={handleClick}>
            <svg className='w-4 h-4 text-gray-800 dark:text-white mr-4' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d={svg}></path>
            </svg>
            {label}
        </button>
    )
}