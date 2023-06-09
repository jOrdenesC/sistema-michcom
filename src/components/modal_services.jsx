import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export default function ModalServices({ open, close, data }) {
    const [newServiceData, setNewServiceData] = useState({
        title: '',
        price: '',
        divisa: '',
        description: '',
        havePlan: false
    });

    const handleInputChange = (e, key) => {
        setNewServiceData({
            ...newServiceData,
            [key]: e.target.value
        })
    }

    const handleChangeCheckbox = (value, key) => {
        setNewServiceData({
            ...newServiceData,
            [key]: value
        }
        )
    }

    const save = async () => {
        console.log(data);
    }

    useEffect(() => {
        if (data.type === 'edit') {
            setNewServiceData({
                username: data.row.username,
                email: data.row.email,
                phone: data.row.tel,
                role: data.row.role,
                charge: data.row.charge,
                havePlan: data.row.havePlan,
            })
        } else {
            setNewServiceData({
                username: '',
                email: '',
                phone: '',
                role: '',
                charge: '',
                havePlan: false,
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
                                        Nuevo servicio
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
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre del servicio</label>
                                                <input onChange={(e) => {
                                                    handleInputChange(e, 'username')
                                                }} value={newServiceData.username} type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Nombre de servicio" required />
                                            </div>
                                            <div className="mb-6 ">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">¿El servicio posee planes?</label>
                                                <div className='p-2.5' onClick={() => {
                                                    handleChangeCheckbox(!newServiceData.havePlan, 'havePlan')
                                                    console.log(newServiceData.havePlan);
                                                }}>
                                                    <label className={newServiceData.havePlan ? " bg-blue-500 cursor-pointer rounded-lg border-2 border-blue-200 py-3 px-6 font-bold text-white" : "bg-gray-200 select-none cursor-pointer rounded-lg border-2 border-gray-200 py-3 px-6 font-bold text-white transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200  p-2.5"}>{newServiceData.havePlan ? 'Con planes' : 'Sin planes'}</label>
                                                    <input type="checkbox" className="hidden" />
                                                </div>
                                            </div>
                                            {/* <div className="mb-6">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de plan</label>
                                                <input onChange={(e) => {
                                                    handleInputChange(e, 'title')
                                                }} value={newServiceData.title} type="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Nombre de plan" required />
                                            </div> */}
                                            
                                        </div>
                                        <div className='w-1/2 p-6'>
                                            <div className="mb-6">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Divisa de plan</label>
                                                <input onChange={(e) => {
                                                    handleInputChange(e, 'divisa')
                                                }} value={newServiceData.divisa} type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="CLP - USD" required />
                                            </div>
                                            <div className="mb-6">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio de plan</label>
                                                <input onChange={(e) => {
                                                    handleInputChange(e, 'price')
                                                }} value={newServiceData.price} type="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="100.00" required />
                                            </div>
                                            
                                        </div>

                                    </div>
                                    <div className="mb-6 p-6">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripción de plan</label>
                                                <textarea onChange={(e) => {
                                                    handleInputChange(e, 'description')
                                                }} value={newServiceData.description} type="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Detalles del plan..." required />
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
                                        Guardar servicio
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

ModalServices.propTypes = {
    open: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
};