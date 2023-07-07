export function IconButton({ svg, color, iconDescription, onClick }) {
    const buttonClassName = `text-white bg-${color}-700 hover:bg-${color}-800 focus:ring-4 focus:outline-none focus:ring-${color}-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-${color}-600 dark:hover:bg-${color}-700 dark:focus:ring-${color}-800`;

    return (
        <button type='button' className={buttonClassName} onClick={onClick} >
            <svg className='w-3 h-3 text-gray-800 dark:text-white' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 21 21'>
                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={svg} />
            </svg>
            <span className='sr-only'>{iconDescription}</span>
        </button>
    )
}