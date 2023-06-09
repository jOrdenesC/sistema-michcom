import CardDashboard from "../components/card_dashboard_gain";
import CardDashboardLoss from "../components/card_dashboard_loss";
import CardMonthlyPayers from "../components/card_monthly_payers";
import ModalViewAllPays from "../components/modal_view_all_pays";
import Navbar from "../components/navbar";
import ReactECharts from 'echarts-for-react';
import { useState } from "react";

export default function Dashboard() {

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const optionsSalidas = {
        grid: { top: 8, right: 8, bottom: 24, left: 36 },
        xAxis: {
            max: 'dataMax'
            // type: 'category',
            // data: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
        },
        yAxis: {
            type: 'category',
            data: ['Bryan', 'Rodrigo', 'Natalia', 'Gisela'],
            inverse: true,
            animationDuration: 300,
            animationDurationUpdate: 300
        },
        series: [
            {
                realtimeSort: true,
                name: 'Salidas',
                type: 'bar',
                data: [5, 7, 2, 1],
                itemStyle: {
                    color: 'green',
                },
                label: {
                    show: true,
                    position: 'right',
                    valueAnimation: true
                }
            }
        ],
        legend: {
            show: true
        },
        tooltip: {
            trigger: 'axis',
        },
    };


    const options = {
        grid: { top: 8, right: 8, bottom: 24, left: 36 },
        xAxis: {
            max: 'dataMax'
        },
        yAxis: {
            type: 'category',
            data: ['Empresa 1', 'Empresa 2', 'Empresa 3', 'Empresa 4', 'Empresa 5'],
            inverse: true,
            animationDuration: 300,
            animationDurationUpdate: 300
        },
        series: [
            {
                realtimeSort: true,
                name: 'Horas',
                type: 'bar',
                itemStyle: {
                    color: '#ffc107',

                },
                data: [10, 20, 30, 110, 50],
                label: {
                    show: true,
                    position: 'right',
                    valueAnimation: true
                }
            }
        ],
        legend: {
            show: true
        },
        tooltip: {
            trigger: 'axis',
        },
    };

    const options2 = {
        series: [
            {
                data: [{
                    value: 100,
                    name: 'Hola'
                },
                {
                    value: 200,
                    name: 'Hola1'
                }, {
                    value: 300,
                    name: 'Hola2'
                }, {
                    value: 400,
                    name: 'Hola3'
                },
                ],
                type: 'pie',
                smooth: true,
            },
        ],
        // radius: ['40%', '70%'],
        tooltip: {
            trigger: 'axis',
        },
    };

    return (
        <div className="bg-gray-100 h-max">
            <Navbar routeName="dashboard" />
            <br />
            <p className="text-xl font-bold" >Salidas de soporte</p>
            <br />
            <div className="flex justify-evenly w-12/12">
                <div className="w-3/12 rounded-md p-6">
                    <CardMonthlyPayers className="shadow-lg" openModal={() => {
                        setOpen(true)
                    }} />
                </div>
                <div className="w-2.5/12 p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Total recaudado por mes: </h5>
                        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                            Ver detalles
                        </a>
                    </div>
                    <div className="bg-white p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="rounded-full bg-purple-500 text-white p-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M22 12h-4l-3 9L9 3l-3 9H2"
                                        />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <p className="text-gray-700 text-lg font-bold">Total recaudado</p>
                                    <p className="text-gray-500 text-sm">Marzo</p>
                                </div>
                            </div>
                            <p className="text-purple-500 text-3xl font-bold">$150,000</p>
                        </div>
                    </div>
                    <div className="bg-white p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="rounded-full bg-purple-500 text-white p-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M22 12h-4l-3 9L9 3l-3 9H2"
                                        />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <p className="text-gray-700 text-lg font-bold">Total recaudado</p>
                                    <p className="text-gray-500 text-sm">Abril</p>
                                </div>
                            </div>
                            <p className="text-purple-500 text-3xl font-bold">$150,000</p>
                        </div>
                    </div><div className="bg-white p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="rounded-full bg-purple-500 text-white p-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M22 12h-4l-3 9L9 3l-3 9H2"
                                        />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <p className="text-gray-700 text-lg font-bold">Total recaudado</p>
                                    <p className="text-gray-500 text-sm">Mayo</p>
                                </div>
                            </div>
                            <p className="text-purple-500 text-3xl font-bold">$150,000</p>
                        </div>
                    </div><div className="bg-white p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="rounded-full bg-purple-500 text-white p-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M22 12h-4l-3 9L9 3l-3 9H2"
                                        />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <p className="text-gray-700 text-lg font-bold">Total a recaudar</p>
                                    <p className="text-gray-500 text-sm">Junio</p>
                                </div>
                            </div>
                            <p className="text-purple-500 text-3xl font-bold">$150,000</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-evenly w-2/12">
                    <CardDashboard />
                    <CardDashboard />
                    <CardDashboardLoss />
                </div>
                <div className="w-3/12 rounded-md p-6">
                    <ReactECharts className="shadow-lg" option={options2} />
                </div>
            </div>
            <br />
            <p className="text-xl font-bold" >Salidas de soporte</p>
            <br />
            <div className="flex justify-evenly w-12/12">
                <div className="w-5/12 border-2 bg-white rounded-md p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Horas dedicadas a cada empresa (Junio)</h5>
                        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                            Ver todos
                        </a>
                    </div>
                    <ReactECharts option={options} />
                </div>
                <div className="w-5/12 border-2 bg-white rounded-md p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Salidas a terreno (Junio)</h5>
                        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                            Ver todos
                        </a>
                    </div>
                    <ReactECharts option={optionsSalidas} />
                </div>
            </div>
            {/* <p>Mostrar gráficos de ganancias mensual, mostrar los próximos pagos del mes (Están por vencer)</p> */}
            <ModalViewAllPays open={open} close={handleClose} />
        </div>
    )
}
