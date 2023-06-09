// import { useEffect, useState } from "react";
import PropTypes from "prop-types";


export default function ModalViewAllPays({ open, close }) {

    // const [servicesData, setServicesData] = useState([]);

    // useEffect(() => {
    //     async function getData() {
    //         let data = []
    //         const res = await getServices();
    //         for (const element in res.data) {
    //             data.push({
    //                 value: res.data[element]._id,
    //                 label: res.data[element].title
    //             })
    //         }
    //         setServicesData(data);
    //     }

    //     getData();

    // }, [data])



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
                                        Todos los pagos del mes
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

                                <div className="relative overflow-x-auto">
                                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 rounded-l-lg">
                                                    Empresa
                                                </th>
                                                <th scope="col" className="px-6 py-3 rounded-l-lg">
                                                    Servicio
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Qty
                                                </th>
                                                <th scope="col" className="px-6 py-3 rounded-r-lg">
                                                    Price
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-white dark:bg-gray-800">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    Apple MacBook Pro 17
                                                </th>
                                                <td className="px-6 py-4">
                                                    1
                                                </td>
                                                <td className="px-6 py-4">
                                                    $2999
                                                </td>
                                                <td className="px-6 py-4">
                                                    $99
                                                </td>
                                            </tr>
                                            <tr className="bg-white dark:bg-gray-800">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    Microsoft Surface Pro
                                                </th>
                                                <td className="px-6 py-4">
                                                    1
                                                </td>
                                                <td className="px-6 py-4">
                                                    $1999
                                                </td>
                                                <td className="px-6 py-4">
                                                    $99
                                                </td>
                                            </tr>
                                            <tr className="bg-white dark:bg-gray-800">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    Magic Mouse 2
                                                </th>
                                                <td className="px-6 py-4">
                                                    1
                                                </td>
                                                <td className="px-6 py-4">
                                                    $99
                                                </td>
                                                <td className="px-6 py-4">
                                                    $99
                                                </td>
                                            </tr>
                                        </tbody>
                                        {/* <tfoot>
                                            <tr className="font-semibold text-gray-900 dark:text-white">
                                                <th scope="row" className="px-6 py-3 text-base">Total</th>
                                                <td className="px-6 py-3">3</td>
                                                <td className="px-6 py-3">21,000</td>
                                            </tr>
                                        </tfoot> */}
                                    </table>
                                </div>

                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
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

ModalViewAllPays.propTypes = {
    open: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired
};