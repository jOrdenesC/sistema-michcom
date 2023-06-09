import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Navbar from "../components/navbar";

export default function Calendar() {
    return (
        <>
            <Navbar routeName="calendar" />
            <div className="w-11/12" style={{
                margin: "auto"
            }}>
                <FullCalendar
                    themeSystem="lux"
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    locale={"es"}
                    firstDay={1}
                />
            </div>
        </>
    )
}
