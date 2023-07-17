import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function UsersModal({ showModal, closeModal, selectedItemId }) {

    const modalTitle = selectedItemId ? 'Editar Usuario' : 'Agregar Usuario';

    const apiURL = 'http://localhost:3000/api';

    const [editingUser, setEditingUser] = useState({
        user_nombres: '',
        user_apellidos: '',
        user_telefono: '',
        user_email: '',
        user_password: '',
        user_rol: '',
    });

    const handleModal = () => {
        closeModal();
    };

    useEffect(() => {
        if (selectedItemId) {
            axios
                .get(`${apiURL}/usuarios/${selectedItemId}`)
                .then((res) => {
                    const { nombres, apellidos, telefono, email, password, rol, id_persona } = res.data;
                    setEditingUser({
                        user_nombres: nombres,
                        user_apellidos: apellidos,
                        user_telefono: telefono,
                        user_email: email,
                        user_password: password,
                        user_rol: rol,
                        user_id_persona: id_persona
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            setEditingUser({
                user_nombres: '',
                user_apellidos: '',
                user_telefono: '',
                user_email: '',
                user_password: '',
                user_rol: '',
            });
        }
    }, [selectedItemId]);

    const handleAddArticle = () => {
        const {
            user_nombres,
            user_apellidos,
            user_telefono,
            user_email,
            user_password,
            user_rol,
            user_id_persona
        } = editingUser;

        const requestData = {
            nombres: user_nombres,
            apellidos: user_apellidos,
            telefono: user_telefono,
            email: user_email,
            password: user_password,
            rol: user_rol,
            id_persona: user_id_persona
        };
        if (!user_nombres || !user_apellidos || !user_telefono 
            || !user_email || !user_password || !user_rol || !user_id_persona) return;

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
                                    {modalTitle}
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
                                        <div className='grid gap-6 md:grid-cols-2'>
                                            <div>
                                                <label htmlFor='user_nombres' className='block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white'>Nombre</label>
                                                <input
                                                    type='text'
                                                    id='user_nombres'
                                                    className='font-normal bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                                    placeholder='Jared'
                                                    value={editingUser ? editingUser.user_nombres : ''}
                                                    onChange={(e) => setEditingUser({
                                                        ...editingUser,
                                                        user_nombres: e.target.value
                                                    })}
                                                    required />
                                            </div>
                                            <div>
                                                <label htmlFor='user_apellidos' className='block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white'>Apellidos</label>
                                                <input
                                                    type='text'
                                                    id='user_apellidos'
                                                    className='font-normal bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                                    placeholder='Perez'
                                                    value={editingUser ? editingUser.user_apellidos : ''}
                                                    onChange={(e) => setEditingUser({
                                                        ...editingUser,
                                                        user_apellidos: e.target.value
                                                    })}
                                                    required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor='user_email' className='block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white'>Correo electronico</label>
                                        <input
                                            type='text'
                                            id='user_email'
                                            className='font-normal bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                            placeholder='jared@correo.com'
                                            value={editingUser ? editingUser.user_email : ''}
                                            onChange={(e) => setEditingUser({
                                                ...editingUser,
                                                user_email: e.target.value
                                            })}
                                            required />
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor='user_password' className='block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white'>Contraseña</label>
                                        <input
                                            type='text'
                                            id='user_password'
                                            name='user_password'
                                            className='font-normal bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                            placeholder='.....'
                                            value={editingUser ? editingUser.user_password : ''}
                                            onChange={(e) => setEditingUser({
                                                ...editingUser,
                                                user_password: e.target.value
                                            })}
                                            required />
                                    </div>
                                    <div className='grid gap-6 md:grid-cols-3'>
                                        <div>
                                            <label htmlFor='user_rol' className='block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white'>Rol</label>
                                            <select
                                                id='user_rol'
                                                name='user_rol'
                                                className='font-normal bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                                value={editingUser ? editingUser.user_rol : ''}
                                                onChange={(e) => setEditingUser({
                                                    ...editingUser,
                                                    user_rol: parseInt(e.target.value, 10)
                                                })}
                                                required
                                            >
                                                <option value='' disabled>Seleccionar rol</option>
                                                <option value='0'>Empleado</option>
                                                <option value='1'>Administrador</option>
                                            </select>
                                        </div>
                                            <input
                                                type='hidden'
                                                id='user_id_persona'
                                                name='user_id_persona'
                                                className='font-normal bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                                value={editingUser ? editingUser.user_id_persona : ''}
                                                onChange={(e) => setEditingUser({
                                                    ...editingUser,
                                                    user_id_persona: parseInt(e.target.value, 10)
                                                })}
                                                />
                                        <div>
                                            <label htmlFor='user_telefono' className='block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white'>Telefono</label>
                                            <input
                                                type='number'
                                                id='user_telefono'
                                                name='user_telefono'
                                                className='font-normal bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                                placeholder='5621789206'
                                                value={editingUser ? editingUser.user_telefono : ''}
                                                onChange={(e) => setEditingUser({
                                                    ...editingUser,
                                                    user_telefono: parseInt(e.target.value, 10)
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