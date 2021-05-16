import {BiCalendar, BiTrash} from "react-icons/bi";
import Search from "./components/Search";
import AddAppointments from "./components/AddAppointments";
import appoinmentList from "./data.json";

function App() {
  return (
    /* para centrar un container (setea un max width de un elemento) se usa mx-auto
    luego se añade un margin top de 3px y un font weigth de 100*/
    <div className="App container mx-auto mt-3 font-thin">
      {/*text-5xl asigna un font-size de 3rem y un line-heigh:1 
      elementos en linea (inline-block )*/}
      <h1 className="text-5xl mb-5" >
        <BiCalendar  className="inline-block text-red-400 align-top"/>Your appointments</h1>
        {/*Hacemos el llamado a nuestro componente AddAppointments*/}
        <AddAppointments/>
        {/*Hacemos el llamado a nuestro primer componente Search*/}
        <Search/>
        {/*Se crea un ul y dentro de este a la lista que hemos importado se mapea por los elementos que se encuentran en nuestra data.json */}
        <ul className= "divide-y divide-gray-200">
          {appoinmentList.map(appointment => (
            <li className="px-3 py-3 flex items-start">
              <button type="button"
                className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <BiTrash /></button>
              <div className="flex-grow">
                <div className="flex items-center">
                  <span className="flex-none font-medium text-2xl text-blue-500">{appointment.petName}</span>
                  <span className="flex-grow text-right">{appointment.aptDate}</span>
                </div>
                <div><b className="font-bold text-blue-500">Owner:</b> {appointment.ownerName}</div>
                <div className="leading-tight">{appointment.aptNotes}</div>
              </div>
            </li>
          ))
          }
        </ul>
    </div>
  );
}

export default App;
