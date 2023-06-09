import CardAdministration from "../components/card_administration";
import Navbar from "../components/navbar";
import servicesImage from "../assets/services.json";
import plansImage from "../assets/plans.json";
import clientsImage from "../assets/clients.json";
import providersImage from "../assets/delivery.json";
import usersImage from "../assets/users.json";
import employeesImage from "../assets/employees.json";


export default function Administration() {
    return (
        <>
            <Navbar routeName="administration" />
            <br />
            <div style={{ display: 'flex', height: '40%', flexDirection: 'column' }}>
                <div className="grid grid-cols-4 grid-flow-row gap-4 justify-items-center">
                    <CardAdministration lottieImage={servicesImage} title="Servicios" description="Entra aquí para ver todos los servicios, crear nuevos o editarlos." url="/services" />
                    <CardAdministration lottieImage={plansImage} title="Planes" description="Entra aquí para ver todos los planes de los servicios, crear nuevos o editarlos." url="/plans" />
                    <CardAdministration lottieImage={clientsImage} title="Clientes" description="Entra aquí para ver todos los clientes, puedes agregar y editar." url="/clients" />
                    <CardAdministration lottieImage={providersImage} title="Proveedores" description="Entra aquí para ver todos los proveedores. Si necesitas agregar uno o editar puedes hacerlo aquí." url="/providers" />
                    <CardAdministration lottieImage={employeesImage} title="Empleados" description="Entra aquí para ver todos los trabajadores de Michcom, puedes crear nuevos y editar los existentes." url="/employees" />
                    <CardAdministration lottieImage={usersImage} title="Usuarios" description="Entra aquí para ver todos los usuarios, puedes crear nuevos y editar los existentes." url="/users" />
                </div>
                <br />
            </div>
        </>
    )
}
