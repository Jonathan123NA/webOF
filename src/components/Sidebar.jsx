import { SidebarButton } from './SidebarButton';

export function Sidebar({ setTableTitle, setTableNameToUrl, userName, handleLogout }) {
  return (
    <aside className='sidebar w-56 -translate-x-full transform bg-white transition-transform duration-150 ease-in md:translate-x-0 md:shadow-md dark:bg-zinc-800'>
      <div className='flex flex-col h-full'>
        <div className='mt-6'>
          <header className='flex justify-center items-center flex-col p-4'>
            <div className='flex items-center mb-6'>
              <img className='w-6 h-6 mr-3 rounded-full shadow-lg' src='../../public/vite.svg' alt='logo image' />
              <h1 className='block font-semibold text-gray-900 dark:text-white'>Orden Facil</h1>
            </div>

            {userName && (
              <h2 className='block font-medium text-gray-900 dark:text-gray-300'>{userName}</h2>
            )}
          </header>
          <nav className='grid mt-10 mb-auto mr-4'>
            {/* Aquí van los botones de navegación */}
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
          <button
            className='w-full text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-r-xl text-sm px-7 py-4 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-zinc-700 dark:border-zinc-800 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2'
            onClick={handleLogout}
          >
            Cerrar Sesión
          </button>
        </footer>
      </div>
    </aside>
  );
}
