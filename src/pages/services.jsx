import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { getServices } from "../api/services";
import loadingImage from "../assets/loading.svg";
import DataTable from "react-data-table-component";
import ModalServices from "../components/modal_services";
import lottieImage from "../assets/no-data.json";
import Lottie from "react-lottie";


export default function Services() {

  const [open, setOpen] = useState(false);
  const [type, setType] = useState(null);
  const [data, setData] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
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
    async function loadPlans() {
      setLoading(true);
      const response = await getServices();
      if (response.status === 200) {
        setData(response.data);
        setLoading(false);
      }
    }
    loadPlans();
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
      name: 'Servicio',
      selector: row => <p className="capitalize">{row.title}</p>,
      sortable: true
    },
    {
      name: '¿Posee planes?',
      selector: row => <p className="capitalize">{row.havePlan ? 'Sí' : 'No'}</p>,
      sortable: true
    },
    {
      name: 'Descripción',
      selector: row => <p>{row.description}</p>,
      sortable: true
    },
    {
      name: 'Valor',
      selector: row => <p className="capitalize">{row.havePlan ? '-' : row.price + ' ' + row.divisa}</p>,
      sortable: true
    }
  ];



  return (
    <>
      <Navbar routeName="administration" />
      <br />
      <p className="text-xl font-bold" >Servicios</p>
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
            }} className="bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
              Nuevo servicio
            </button>
            <div style={{
              width: "50%",
            }}>
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Buscar</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input onChange={handleSearch} type="search" id="default-search" className="block w-full p-4 pl-10 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-800 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-800 dark:focus:border-gray-500" placeholder="Busca por nombre de plan..." required />
              </div>
            </div>
          </div>
          <br />
          <div className="w-11/12 m-auto">
            <DataTable
              onRowClicked={(row) => {
                console.log(row)
                setType('edit')
                setSelectedPlan(row);
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
              pagination
              highlightOnHover
              noDataComponent={
                <>
                  <br />
                  <br />
                  <Lottie options={lottieOptions} height={"500px"} />
                </>
              }
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
                  item.title.toLowerCase().includes(searched.toLowerCase())
                ){
                  return item;
                }
              })}


            />
          </div>
        </>
      }

      <ModalServices open={open} close={handleClose} data={{ type: type, row: selectedPlan }} />
    </>
  )
}
