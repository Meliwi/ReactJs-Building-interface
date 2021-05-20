import {useState , useEffect, useCallback} from 'react'; 
import {BiCalendar} from "react-icons/bi";
import Search from "./components/Search";
import AddAppointments from "./components/AddAppointments";
import AppointmentInfo from "./components/AppointmentInfo";

function App() {

  //Hacemos uso de nuestro hook useState 
  let[appointmentList, setAppointmentList] = useState([]);

  /*Creamos el método de fetch data donde vamos a hacer la petición de nuestros 
    datos usando useCallBack el cual es otro hook 
  */
  const fetchData = useCallback(() => {
    fetch('./data.json')
    .then(response => response.json())
    .then(data => {
      setAppointmentList(data)
    });
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  return (
    /* para centrar un container (setea un max width de un elemento) se usa mx-auto
    luego se añade un margin top de 3px y un font weigth de 100*/
    <div className="App container mx-auto mt-3 font-thin px-3">
      {/*text-5xl asigna un font-size de 3rem y un line-heigh:1 
      elementos en linea (inline-block )*/}
      <h1 className="text-5xl mb-5" >
        <BiCalendar  className="inline-block text-red-400 align-top text-center"/>Your appointments</h1>
        {/*Hacemos el llamado a nuestro componente AddAppointments*/}
        <AddAppointments/>
        {/*Hacemos el llamado a nuestro primer componente Search*/}
        <Search/>
        {/*Se crea un ul y dentro de este a la lista que hemos importado se mapea por los elementos que se encuentran en nuestra data.json */}
        <ul className= "divide-y divide-gray-200">
          {appointmentList.map(appointment => (
            <AppointmentInfo key={appointment.id}
            appointment={appointment}/>
          ))
          }
        </ul>
    </div>
  );
}

export default App;
