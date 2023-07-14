import { SidebarButton } from './SidebarButton';

export function Sidebar({ setTableTitle, setTableNameToUrl }) {
    return (
        <aside className='sidebar w-56 -translate-x-full transform bg-white transition-transform duration-150 ease-in md:translate-x-0 md:shadow-md dark:bg-zinc-800'>
            <div className='flex flex-col h-full'>
                <div className='mt-6'>
                    <header className='flex justify-center items-center flex-col p-4'>
                        <div className='flex items-center mb-6'>
                            <img className='w-6 h-6 mr-3 rounded-full shadow-lg' src='../../public/vite.svg' alt='logo image' />
                            <h1 className='block font-semibold text-gray-900 dark:text-white'>Orden Facil</h1>
                        </div>
                        <h2 className='block font-medium text-gray-900 dark:text-gray-300'>@username</h2>
                    </header>
                    <nav className='grid mt-10 mb-auto mr-4'>
                        <SidebarButton
                            label='Usuarios'
                            svg="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                            tableTitle={setTableTitle}
                            tableNameToUrl={setTableNameToUrl}
                            tableName='usuarios' />
                        <SidebarButton
                            label='Articulos'
                            svg="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                            tableTitle={setTableTitle}
                            tableNameToUrl={setTableNameToUrl}
                            tableName='articulos' />
                    </nav>
                </div>
                <footer className='mt-auto justify-end mb-8 mr-4'>
                    <SidebarButton
                        label='Cerrar Sesion'
                        svg="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </footer>
            </div>
        </aside>
    )
}