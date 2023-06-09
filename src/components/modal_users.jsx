import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { createUser } from '../api/users';

export default function ModalComponent({ open, close, data }) {
    const [newUserData, setNewUserData] = useState({
        username: '',
        email: '',
        phone: '',
        role: '',
        charge: ''
    });

    const handleInputChange = (e, key) => {
        setNewUserData({
            ...newUserData,
            [key]: e.target.value
        })
    }

    const save = async () => {
        console.log(data);
        if (data.type === 'edit') {
            update();
        } else {
            create();
        }
    }

    const update = async () => {

    }

    const create = async () => {
        const response = await createUser(newUserData);
        if (response) {
            Swal.fire({
                title: 'Realizado',
                text: 'Se ha creado el empleado',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'No se ha podido crear el empleado. Inténtalo nuevamente.',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
    }

    useEffect(() => {
        if (data.type === 'edit') {
            setNewUserData({
                username: data.row.username,
                email: data.row.email,
                phone: data.row.tel,
                role: data.row.role,
                charge: data.row.charge
            })
        } else {
            setNewUserData({
                username: '',
                email: '',
                phone: '',
                role: '',
                charge: ''
            })
        }

    }, [data])



    return (
        <>
            {open && (
                <>
                    <div
                        className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative my-6 mx-auto w-7/12">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t bg-gradient-to-r from-cyan-400 via-lightBlue-400 to-blue-400">
                                    <h3 className="text-3xl text-white font-semibold">
                                        Nuevo usuario
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-white opacity-1 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => close()}
                                    >
                                        <span className=" text-white opacity-1 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            X
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <div className='flex'>
                                        <div className='w-1/2 p-6'>
                                            <div className="mb-6">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de usuario</label>
                                                <input onChange={(e) => {
                                                    handleInputChange(e, 'username')
                                                }} value={newUserData.username} type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Nombre de usuario" required />
                                            </div>
                                            <div className="mb-6">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo de usuario</label>
                                                <input onChange={(e) => {
                                                    handleInputChange(e, 'email')
                                                }} value={newUserData.email} type="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="example@michcom.com" required />
                                            </div>
                                            <div className="mb-6">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Teléfono de usuario</label>
                                                <input onChange={(e) => {
                                                    handleInputChange(e, 'phone')
                                                }} value={newUserData.phone} type="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="+56912345678" required />
                                            </div>
                                        </div>
                                        <div className='w-1/2 p-6'>
                                            <div className="mb-6">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cargo del usuario</label>
                                                <input onChange={(e) => {
                                                    handleInputChange(e, 'charge')
                                                }} value={newUserData.charge} type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Secretaria" required />
                                            </div>
                                            <div className="mb-6">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rol de usuario</label>
                                                <input onChange={(e) => {
                                                    handleInputChange(e, 'role')
                                                }} value={newUserData.role} type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder='Admin' required />
                                            </div>
                                            <div className="mb-6">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Avatar de usuario</label>
                                                <input type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder='perro' required />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => close()}
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => save()}
                                    >
                                        Guardar usuario
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            )}
        </>
    )
}

ModalComponent.propTypes = {
    open: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
};