import React from 'react'

export function Dashboard({setTableTitle, setTableNameToUrl}) {

    const handleArticles = () => {
        setTableTitle('Articulos')
        setTableNameToUrl('Articulos')
    }

    const handleUsers = () => {
        setTableTitle('Usuarios')
        setTableNameToUrl('Usuarios')
    }

    return (
        <main className='main -ml-48 flex flex-grow flex-col p-4 transition-all duration-150 ease-in md:ml-0'>
            <div className='p-16 w-full h-full inline-block items-center justify-center bg-white text-center text-5xl font-bold rounded-lg shadow-md dark:bg-zinc-800 dark:text-white'>
                <header className='flex items-center justify-between pb-4 bg-white dark:bg-zinc-800'>
                    <h1 className='mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white'>Orden <span className='text-blue-600 dark:text-blue-500'>Facil</span>.</h1>
                </header>
                <section className='flex flex-row items-center w-full gap-6 mt-4'>
                    <a onClick={() => handleUsers() } className='cursor-pointer block w-96 px-12 py-12 bg-white border border-gray-200 rounded-xl shadow hover:bg-gray-100 dark:bg-zinc-700 dark:border-zinc-800 dark:hover:bg-zinc-900'>
                        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Usuarios</h5>
                        <p className='text-sm font-normal text-gray-600 dark:text-gray-400'>Administra los usuarios de la aplicación.</p>
                    </a>
                    <a onClick={() => handleArticles() } className='cursor-pointer block w-96 px-12 py-12 bg-white border border-gray-200 rounded-xl shadow hover:bg-gray-100 dark:bg-zinc-700 dark:border-zinc-800 dark:hover:bg-zinc-900'>
                        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Articulos</h5>
                        <p className='text-sm font-normal text-gray-600 dark:text-gray-400'>Administra los articulos de la aplicación.</p>
                    </a>
                </section>
            </div>
        </main >
    )
}