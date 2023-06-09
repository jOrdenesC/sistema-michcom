import ModalEmployees from "../components/modal_employees";
import Navbar from "../components/navbar"
import { useEffect, useState } from "react";
import lottieImage from "../assets/no-data.json";
import Lottie from "react-lottie";
import { getEmployees } from "../api/employees";
import loadingImage from "../assets/loading.svg";
import DataTable from "react-data-table-component";


export default function Employees() {

    const [open, setOpen] = useState(false);
    const [type, setType] = useState(null);
    const [data, setData] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [searched, setSearched] = useState("");

    const [lottieOptions, setLottieOptions] = useState({
        animationData: null,
        loop: true,
        autoplay: true,
    });

    useEffect(() => {
        setLottieOptions((prevOptions) => ({
            ...prevOptions,
            animationData: lottieImage,
        }));
    }, [lottieImage]);


    useEffect(() => {
        async function loadUsers() {
            setLoading(true);
            const response = await getEmployees();
            if (response.status === 200) {
                setData(response.data);
                setLoading(false);
            }
        }
        loadUsers();
    }, []);


    const handleClose = () => {
        setOpen(false);
    }

    const handleSearch = (event) => {
        setSearched(event.target.value);
        console.log(searched);
    }


    const columns = [
        {
            name: 'Rut',
            selector: row => <p className="capitalize">{row.rut}</p>,
            sortable: true

        },
        {
            name: 'Nombre',
            selector: row => <p className="capitalize">{row.name}</p>,
            sortable: true

        },
        {
            name: 'Área de trabajo',
            selector: row => <p>{row.area == "development" ? 'Desarrollo' : 'Soporte'}</p>,
            sortable: true
        },
        {
            name: 'Correo',
            selector: row => <p>{row.email.toUpperCase()}</p>,
            sortable: true
        },
        {
            name: 'Teléfono',
            selector: row => <p className="capitalize">{row.tel}</p>,
            sortable: true
        },
        {
            name: 'Dirección',
            selector: row => <p className="capitalize">{row.address}</p>,
            sortable: true
        },
    ];



    return (
        <>
            <Navbar routeName="administration" />
            <br />
            <p className="text-xl font-bold" >Empleados de Michcom</p>
            <br />
            {loading ?
                <>
                    <div className="flex justify-center">
                        <br />
                        <br />
                        <br />
                        <img src={loadingImage} />
                    </div>
                </> : <>
                    <div className="flex w-11/12 justify-between m-auto">
                        <button onClick={() => {
                            setType('create');
                            setOpen(true);
                        }} className="bg-gray-800 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded">
                            Nuevo empleado
                        </button>
                        <div style={{
                            width: "50%",
                        }}>
                            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Buscar</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input onChange={handleSearch} type="search" id="default-search" className="block w-full p-4 pl-10 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Busca por rut, nombre de empleado o correo..." required />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="w-11/12 m-auto">
                        <DataTable
                            onRowClicked={(row) => {
                                console.log(row)
                                setType('edit')
                                setSelectedUser(row);
                                setOpen(true);
                            }}
                            customStyles={{
                                headCells: {
                                    style: {
                                        color: "white",
                                        fontSize: "16px"
                                    }
                                },
                                headRow: {
                                    style: {
                                        backgroundColor: "rgb(31 41 55);",
                                        borderRadius: "5px 5px 0px 0px",
                                    }
                                },
                                rows: {
                                    style: {
                                        cursor: "pointer",
                                        fontSize: "16px"
                                    }
                                }
                            }}
                            striped
                            noDataComponent={
                                <>
                                    <br />
                                    <br />
                                    <Lottie options={lottieOptions} height={"500px"} />
                                </>
                            }
                            pagination
                            highlightOnHover
                            paginationComponentOptions={{
                                rowsPerPageText: 'Filas por página',
                                rangeSeparatorText: 'de',
                                noRowsPerPage: false,
                                selectAllRowsItem: false,
                                selectAllRowsItemText: 'Todos'
                            }}
                            columns={columns}
                            data={data.filter((item) => {
                                if (searched === "") {
                                    return item;
                                } else if (
                                    item.name.toLowerCase().includes(searched.toLowerCase())
                                ) {
                                    return item;
                                } else if (item.email.toLowerCase().includes(searched.toLowerCase())) {
                                    return item;
                                } else if (item.rut.toLowerCase().includes(searched.toLowerCase())) {
                                    return item;
                                }
                            })}


                        />
                    </div>
                </>
            }

            <ModalEmployees open={open} close={handleClose} data={{ type: type, row: selectedUser }} />
        </>
    )
}
