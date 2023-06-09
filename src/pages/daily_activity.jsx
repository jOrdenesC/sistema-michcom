import { useState } from "react"
import ModalNewActivity from "../components/modal_new_daily_activity"
import Navbar from "../components/navbar"

export default function DailyActivity() {
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            <Navbar routeName="dailyActivity" />
            <br />
            <div className="flex w-11/12 justify-between m-auto">
                <button onClick={() => {
                    setOpen(true)
                }} className="bg-gray-800 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded">
                    Nuevo registro
                </button>
                <div style={{
                    width: "50%",
                }}>
                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Buscar</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Busca por rut, nombre de cliente o correo..." required />
                    </div>
                </div>
            </div>
            <p>Actividades que se hacen durante el día (soporte) para generar informes a fin de mes</p>
            <ModalNewActivity open={open} close={handleClose} />
        </>
    )
}
