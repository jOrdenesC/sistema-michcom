import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { getServices } from '../api/services'


export default function ModalPlans({ open, close, data }) {
    const [selectedService, setSelectedService] = useState(null);
    const [selectedDivisa, setSelectedDivisa] = useState(null);

    const [servicesData, setServicesData] = useState([]);


    const [newPlanData, setNewPlanData] = useState({
        title: '',
        price: '',
        service: '',
        description: '',
        divisa: ''
    });

    const handleInputChange = (e, key) => {
        setNewPlanData({
            ...newPlanData,
            [key]: e.target.value
        })
    }

    const save = async () => {
        console.log(data);
    }

    useEffect(() => {
        if (data.type === 'edit') {
            setSelectedDivisa({
                value: data.row.divisa,
                label: data.row.divisa
            })
            setSelectedService({
                value: data.row.services._id,
                label: data.row.services.title
            })

            setNewPlanData({
                title: data.row.title,
                price: data.row.price,
                service: data.row.services,
                description: data.row.description,
                divisa: data.row.divisa
            })
        } else {
            setNewPlanData({
                title: '',
                price: '',
                service: '',
                description: '',
                divisa: ''
            })
        }

        async function getData() {
            let data = []
            const res = await getServices();
            for (const element in res.data) {
                data.push({
                    value: res.data[element]._id,
                    label: res.data[element].title
                })
            }
            setServicesData(data);
        }

        getData();

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
                                    <h3 className="text-3xl font-semibold text-white">
                                        Nuevo plan
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-1 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
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
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selecciona el servicio</label>
                                                <Select
                                                    value={selectedService}
                                                    placeholder="Selecciona el servicio"
                                                    onChange={(e) => {
                                                        setSelectedService(e.target)
                                                    }}
                                                    options={servicesData}
                                                />
                                            </div>
                                            <div className="mb-6">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre de plan</label>
                                                <input onChange={(e) => {
                                                    handleInputChange(e, 'title')
                                                }} value={newPlanData.title} type="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Nombre de plan" required />
                                            </div>
                                        </div>
                                        <div className='w-1/2 p-6'>
                                            <div className="mb-6">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Divisa de plan</label>
                                                <Select
                                                    value={selectedDivisa}
                                                    placeholder="Selecciona la divisa"
                                                    onChange={(e) => {
                                                        setSelectedDivisa(e.target)
                                                    }}
                                                    options={[{ value: 'CLP', label: 'CLP' }, { value: 'USD', label: 'USD' }]}
                                                />
                                            </div>
                                            <div className="mb-6">
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio de plan</label>
                                                <input onChange={(e) => {
                                                    handleInputChange(e, 'price')
                                                }} value={newPlanData.price} type="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={selectedDivisa + '100.00'} required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-6 p-6">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripción de plan</label>
                                        <textarea maxLength={300} onChange={(e) => {
                                            handleInputChange(e, 'description')
                                        }} value={newPlanData.description} type="text-area" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Detalles del plan..." required />
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
                                        Guardar plan
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

ModalPlans.propTypes = {
    open: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
};