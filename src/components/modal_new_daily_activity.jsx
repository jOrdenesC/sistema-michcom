import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getClients } from '../api/clients';
import { getEmployees } from '../api/employees';
import Select from 'react-select';
import { createDailyActivity } from '../api/daily_activities';
import Swal from 'sweetalert2';


export default function ModalNewActivity({ open, close }) {

    const [selectedWorker, setSelectedWorker] = useState(null);
    const [selectedHour, setSelectedHour] = useState(null);
    const [selectedClient, setSelectedClient] = useState(null);
    const [todo, setTodo] = useState('');


    const [workers, setWorkers] = useState([]);
    const [clients, setClients] = useState([]);
    const [hours, setHours] = useState([]);

    useEffect(() => {
        const clientsArr = [];
        const workersArr = [];
        const hoursArr = [];

        async function getData() {
            const responseDataClients = await getClients();
            const responseDataWorkers = await getEmployees();
            responseDataClients.data.forEach(client => {
                clientsArr.push({
                    value: client._id,
                    label: client.name
                })
            });

            responseDataWorkers.data.forEach(worker => {
                workersArr.push({
                    value: worker._id,
                    label: worker.name
                })
            });

            for (let index = 0; index < 24; index++) {
                hoursArr.push({
                    value: index + 1,
                    label: `${index + 1} horas`
                })
            }

            setWorkers(workersArr);
            setClients(clientsArr);
            setHours(hoursArr);

        }

        getData();
    }, [])

    const save = async () => {
        const response = await createDailyActivity(
            {
                employees: [selectedWorker],
                client: selectedClient,
                hours: selectedHour,
                description: todo,
                date: Date.now()
            }
        );

        if (response) {
            Swal.fire({
                title: 'Realizado',
                text: 'Se ha creado el empleado',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Ha ocurrido un error. Inténtalo nuevamente.',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
    }


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
                                        Agregar nuevo registro diario (Hoy 12-02)
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
                                <div className='flex justify-evenly p-6'>
                                    <div className='w-3/12 text-start'>
                                        <p className='text-lg font-semibold'>Selecciona el empleado</p>
                                        <br />
                                        <Select
                                            className='text-center'
                                            value={selectedWorker}
                                            placeholder="Selecciona el empleado"
                                            onChange={(e) => {
                                                setSelectedWorker(e.target)
                                            }}
                                            options={workers}
                                        />
                                    </div>
                                    <div className='w-3/12'>
                                        <p className='text-lg font-semibold'>Selecciona el cliente</p>
                                        <br />
                                        <Select
                                            value={selectedClient}
                                            placeholder="Selecciona el cliente"
                                            onChange={(e) => {
                                                setSelectedClient(e.target)
                                            }}
                                            options={clients}
                                        />
                                    </div>
                                    <div className='w-3/12'>
                                        <p className='text-lg font-semibold'>Indica las horas a trabajar</p>
                                        <br />
                                        <Select
                                            value={selectedHour}
                                            placeholder="Horas a trabajar"
                                            onChange={(e) => {
                                                setSelectedHour(e.target)
                                            }}
                                            options={hours}
                                        />
                                    </div>
                                </div>
                                <div className='flex justify-evenly p-6'>
                                    <div className='w-11/12 p-6'>
                                        <p className='text-lg font-semibold'>Tareas a realizar</p>
                                        <br />
                                        <textarea value={todo} onChange={(e) => setTodo(e.target.value)} type="text" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Indica las tareas que realizarán los empleados..." required />
                                    </div>
                                </div>



                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button onClick={close}
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        onClick={save}
                                        className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                    >
                                        Guardar registro
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

ModalNewActivity.propTypes = {
    open: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired
};