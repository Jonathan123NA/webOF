import React, { useState, useEffect } from 'react';
import { IconButton } from './IconButton';
import { IconTextButton } from './IconTextButton';
import { ArticlesModal } from './ArticlesModal';
import { UsersModal } from './UsersModal';
import axios from 'axios';

export function Content({ tableData, setTableData, tableTitle, tableNameToUrl }) {

    const apiURL = 'https://ordenfacil.azurewebsites.net/api';

    const [showModal, setShowModal] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        setSearchText('');
    }, [tableNameToUrl]);

    const getHeaders = () => {
        if (tableData.length > 0) {
            return Object.keys(tableData[0]);
        }
        return [];
    };

    const headers = getHeaders();
    const defaultTableTitle = 'Buscar';

    const updateTableData = () => {
        axios
            .get(`${apiURL}/${tableNameToUrl}`)
            .then((res) => {
                setTableData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleDelete = (id) => {
        console.log(`${apiURL}/${tableNameToUrl}/${id}`);
        axios.delete(`${apiURL}/${tableNameToUrl}/${id}`)
        
            .then(() => {
                const updatedTableData = tableData.filter((item) => item.id !== id);
                setTableData(updatedTableData);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const handleEdit = (id) => {
        setSelectedItemId(id);
        setShowModal(true);
    };

    const openModal = () => {
        setSelectedItemId(null);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        updateTableData();
    };

    const renderTableRow = (item, index) => {
        const isLastItem = index === tableData.length - 1;
        const rowClassName = `bg-white ${isLastItem ? '' : 'border-b'} dark:bg-zinc-900 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-950`;

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
                {Object.entries(item).map(([key, value]) => {
                    if (key !== 'id' && key !== 'id_persona') {
                        return (
                            <td key={key} className='px-6 py-4'>
                                {value}
                            </td>
                        );
                    }
                    return null;
                })}
                <td className='px-6 py-4'>
                    {
                        <>
                            <IconButton
                                color='blue'
                                svg='M7.418 17.861 1 20l2.139-6.418m4.279 4.279 10.7-10.7a3.027 3.027 0 0 0-2.14-5.165c-.802 0-1.571.319-2.139.886l-10.7 10.7m4.279 4.279-4.279-4.279m2.139 2.14 7.844-7.844m-1.426-2.853 4.279 4.279'
                                iconDescription='Edit'
                                onClick={() => handleEdit(item.id)} />
                            <IconButton
                                color='red'
                                svg='M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z'
                                iconDescription='Delete'
                                onClick={() => {
                                    if(tableNameToUrl === 'articulos') handleDelete(item.id)
                                    if(tableNameToUrl === 'usuarios') handleDelete(item.id_persona)
                                    }} />
                        </>
                    }
                </td>
            </tr>
        );
    };

    const filteredTableData = searchText === ''
        ? tableData
        : tableData.filter((item) =>
            String(item.id).includes(searchText) ||
            Object.values(item).some((value) => String(value).includes(searchText))
        );

    return (
        <main className='main -ml-48 flex flex-grow flex-col p-4 transition-all duration-150 ease-in md:ml-0'>
            <div className='p-10 w-full h-full inline-block items-center justify-center bg-white text-center text-5xl font-bold rounded-lg shadow-md dark:bg-zinc-800 dark:text-white'>
                <div className='flex items-center justify-between pb-4 bg-white dark:bg-zinc-800'>
                    <IconTextButton
                        label='Agregar'
                        svg='M12 4.5v15m7.5-7.5h-15'
                        viewBox='0 0 24 24'
                        onClick={openModal} />

                    {
                        showModal && tableTitle === 'Usuarios' && (
                            <UsersModal showModal={true} closeModal={closeModal} selectedItemId={selectedItemId} />
                        )
                    }
                    {
                        showModal && tableTitle === 'Articulos' && (
                            <ArticlesModal showModal={true} closeModal={closeModal} selectedItemId={selectedItemId} />
                        )
                    }
                    <label htmlFor='table-search' className='sr-only'>Search</label>
                    <div className='relative'>
                        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                            <svg className='w-4 h-4 text-gray-500 dark:text-gray-400' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'>
                                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z' />
                            </svg>
                        </div>
                        <input
                            type='text'
                            id='table-search'
                            className='block p-2.5 pl-10 font-medium text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            placeholder='Buscar'
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)} />
                    </div>
                </div>
                <div className='relative overflow-x-auto sm:rounded-lg'>
                    <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                        <caption className='p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-zinc-900'>
                            {tableTitle || defaultTableTitle}
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
                                    headers.map((header, index) => {
                                        if (header === 'id_persona') {
                                            return null;
                                        }
                                        return (
                                            <th key={index} scope='col' className='px-6 py-3'>
                                                {header}
                                            </th>
                                        )
                                    })
                                }
                                <th scope='col' className='px-6 py-3'>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTableData.map(renderTableRow)}
                        </tbody>
                    </table>
                </div>
            </div>
        </main >
    )
}