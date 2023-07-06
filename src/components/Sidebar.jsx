import { DefaultButton } from './DefaultButton';

export function Sidebar() {
    return (
        <aside className='sidebar w-56 -translate-x-full transform bg-white p-4 transition-transform duration-150 ease-in md:translate-x-0 md:shadow-md dark:bg-zinc-800'>
            <div className='mt-6'>
                <header className='flex justify-center items-center flex-col'>
                    <div className='flex items-center mb-6'>
                        <img className='w-6 h-6 mr-3 rounded-full shadow-lg' src='../../public/vite.svg' alt='logo image' />
                        <h1 className='block font-semibold text-gray-900 dark:text-white'>Orden Facil</h1>
                    </div>
                    <h2 className='block font-medium text-gray-900 dark:text-gray-300'>@username</h2>
                </header>
                <nav className='grid gap-4 mt-12 mb-80'>
                    <DefaultButton label='Buscar' />
                    <DefaultButton label='Usuarios' />
                    <DefaultButton label='Articulos' />
                </nav>
                <footer className='mt-auto justify-end'>
                    <DefaultButton label='Cerrar Sesion' />
                </footer>
            </div>
        </aside>
    )
}