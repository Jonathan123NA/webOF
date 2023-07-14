import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function ArticlesModal({ showModal, closeModal, selectedItemId }) {

    const apiURL = 'http://localhost:3000/api';

    const [editingUser, setEditingUser] = useState({
        user_email: '',
        user_password: '',
        user_role: '',
        user_id_persona: ''
    });

    const handleModal = () => {
        closeModal();
    };

    useEffect(() => {
        if (selectedItemId) {
            axios
                .get(`${apiURL}/usuarios/${selectedItemId}`)
                .then((res) => {
                    const { email, password, rol, id_persona } = res.data;
                    setEditingUser({
                        user_email: email,
                        user_password: password,
                        user_role: rol,
                        user_id_persona: id_persona
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            setEditingUser({
                user_email: '',
                user_password: '',
                user_role: '',
                user_id_persona: ''
            });
        }
    }, [selectedItemId]);

    const handleAddArticle = () => {
        const {
            user_email,
            user_password,
            user_role,
            user_id_persona
        } = editingUser;

        const requestData = {
            email: user_email,
            password: user_password,
            rol: user_role,
            id_persona: user_id_persona
        };

        if (selectedItemId) {
            axios
                .put(`${apiURL}/usuarios/${selectedItemId}`, requestData)
                .then((res) => {
                    console.log(res);
                    closeModal();
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            axios
                .post(`${apiURL}/usuarios`, requestData)
                .then((res) => {
                    console.log(res);
                    closeModal();
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    return (
        <>
            {showModal && (
                <div id='staticModal' className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-80 z-50'>
                    <div className='relative w-full max-w-2xl max-h-full'>
                        <div className='relative bg-white rounded-lg shadow dark:bg-zinc-900'>
                            <div className='flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600'>
                                <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                                    Agregar usuario
                                </h3>
                                <button type='button' onClick={handleModal} className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white' data-modal-hide='staticModal'>
                                    <svg className='w-3 h-3' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 14'>
                                        <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6' />
                                    </svg>
                                    <span className='sr-only'>Close modal</span>
                                </button>
                            </div>
                            <div className='p-6 space-y-6'>
                                <form>
                                    <div className="mb-6">
                                        <label htmlFor='article_name' className='block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white'>Nombre</label>
                                        <input
                                            type='text'
                                            id='article_name'
                                            className='font-normal bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                            placeholder='Laptop HP'
                                            value={editingUser ? editingUser.article_name : ''}
                                            onChange={(e) => setEditingUser({
                                                ...editingUser,
                                                article_name: e.target.value
                                            })}
                                            required />
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor='article_description' className='block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white'>Descripción</label>
                                        <input
                                            type='text'
                                            id='article_description'
                                            name='article_description'
                                            className='font-normal bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                            placeholder='Color azul'
                                            value={editingUser ? editingUser.article_description : ''}
                                            onChange={(e) => setEditingUser({
                                                ...editingUser,
                                                article_description: e.target.value
                                            })}
                                            required />
                                    </div>
                                    <div className='grid gap-6 md:grid-cols-3'>
                                        <div>
                                            <label htmlFor='article_amount' className='block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white'>Cantidad</label>
                                            <input
                                                type='number'
                                                id='article_amount'
                                                name='article_amount'
                                                className='font-normal bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                                placeholder='5'
                                                value={editingUser ? editingUser.article_amount : ''}
                                                onChange={(e) => setEditingUser({
                                                    ...editingUser,
                                                    article_amount: parseInt(e.target.value, 10)
                                                })}
                                                required />
                                        </div>
                                        <div>
                                            <label htmlFor='article_status' className='block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white'>Estado</label>
                                            <input
                                                type='number'
                                                id='article_status'
                                                name='article_status'
                                                className='font-normal bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                                placeholder='0'
                                                value={editingUser ? editingUser.article_status : ''}
                                                onChange={(e) => setEditingUser({
                                                    ...editingUser,
                                                    article_status: parseInt(e.target.value, 10)
                                                })}
                                                required />
                                        </div>
                                        <div>
                                            <label htmlFor='article_type' className='block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white'>Tipo</label>
                                            <input
                                                type='number'
                                                id='article_type'
                                                name='article_type'
                                                className='font-normal bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                                placeholder='1'
                                                value={editingUser ? editingUser.article_type : ''}
                                                onChange={(e) => setEditingUser({
                                                    ...editingUser,
                                                    article_type: parseInt(e.target.value, 10)
                                                })}
                                                required />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className='flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600'>
                                <button type='button' onClick={handleAddArticle} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Agregar</button>
                                <button type='button' onClick={handleModal} className='text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-zinc-900 focus:z-10 dark:bg-zinc-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-zinc-600 dark:focus:ring-zinc-600'>Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}