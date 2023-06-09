import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { createProvider } from '../api/providers';

export default function ModalProviders({open, close, data}) {
    const [newProviderData, setNewProviderData] = useState({
        name: '',
        rut: '',
        address: '',
        tel: '',
        email: '',
        giro: ''
    });

    const handleInputChange = (e, key) => {
        setNewProviderData({
            ...newProviderData,
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
        const response = await createProvider(newProviderData);
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
            setNewProviderData({
                rut: data.row.rut,
                name: data.row.name,
                email: data.row.email,
                tel: data.row.tel,
                address: data.row.address,
                giro: data.row.giro
            })
        } else {
            setNewProviderData({
                rut: '',
                name: '',
                email: '',
                tel: '',
                address: '',
                giro: ''
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
                                        Nuevo proveedor
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
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rut de proveedor</label>
                                                <input onChange={(e) => {
                                                    handleInputChange(e, 'rut')
                                                }} value={newProviderData.rut} type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Rut de proveedor" required />
                                            </div>
                                            <div className="mb-6">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de proveedor</label>
                                                <input onChange={(e) => {
                                                    handleInputChange(e, 'name')
                                                }} value={newProviderData.name} type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Nombre de proveedor (Empresa o persona)" required />
                                            </div>
                                            <div className="mb-6">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo de proveedor</label>
                                                <input onChange={(e) => {
                                                    handleInputChange(e, 'email')
                                                }} value={newProviderData.email} type="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="example@michcom.com" required />
                                            </div>

                                        </div>
                                        <div className='w-1/2 p-6'>
                                            <div className="mb-6">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Teléfono de proveedor</label>
                                                <input onChange={(e) => {
                                                    handleInputChange(e, 'tel')
                                                }} value={newProviderData.tel} type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="+56912345678" required />
                                            </div>
                                            <div className="mb-6">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dirección de proveedor</label>
                                                <input onChange={(e) => {
                                                    handleInputChange(e, 'address')
                                                }} value={newProviderData.address} type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder='Ej: Merino Jarpa' required />
                                            </div>
                                            <div className="mb-6">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Giro de proveedor</label>
                                                <input onChange={(e) => {
                                                    handleInputChange(e, 'giro')
                                                }} value={newProviderData.giro} type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder='Ej: Informática' required />
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
                                        Guardar proveedor
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

ModalProviders.propTypes = {
    open: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}