import {BiCalendar} from 'react-icons/bi';
import {useState} from 'react';

const AddAppointment = ({onSendAppointment, lastId}) => {
    //Método que inicializa nuestras variables en vacío
    const clearData ={
        ownerName : '', 
        petName: '',
        aptDate: '', 
        aptTime: '', 
        aptNotes: ''
    }

    {/* this is what's going to allow our application to show or hide the rest of the form*/}
    let [toggleForm, setToggleForm] = useState(false)
    {/*Creamos unas variables para manejar las citas añadidas (add appointment),
    el estado inicial de estas es vacio como lo indica clearData*/}
    let [formData, setFormData] = useState(clearData)

    function formDataPublish(){
        //Creamos un objeto appointmentInfo
        const appointmentInfo = {
            id: lastId + 1,
            ownerName : formData.ownerName, 
            petName: formData.petName,
            aptDate: formData.aptDate + ' '+ formData.aptTime, 
            aptNotes: formData.aptNotes
        }
        //Se usa el método que añadirá la información a nuestro objeto
        onSendAppointment(appointmentInfo)
        //Esto hace que se limpien los datos del formulario
        setFormData(clearData)
        //esconde el formulario
        setToggleForm(!toggleForm)
    }

    return(
        <div>
            {/*
            -bg-blue-400: Creación de un botón con color blue-400 (estos colores están listados en la 
                página de la documentación de tailwindcss)
            -rounded-t-md: border-top-left-radius: 0.375rem; border-top-right-radius: 0.375rem;
            */}
            {/*necesitamos crear un evento para el botón, al clickear se ejecuta un arrow function, 
            el cual usa el método setToggleForm y setea el estado del toggleform a lo opuesto que esta nuestro toggleForm
            
            -- Revisa el estado del toggleForm si es true entonces nuestro button tiene estilo rounded-t-md 
            si no este será rounded-md
            */}
            <button onClick = {() => {setToggleForm(!toggleForm)}} 
                className={`bg-blue-500 hover:bg-blue-600 text-white px-2 py-3 min-w-full text-center rounded-t-md
                ${toggleForm ? 'rounded-t-md' : 'rounded-md'}`}>
                <div><BiCalendar className="inline-block align-text-top pl-5" /> Add Appointment</div>
            </button>
            {   
                //check for the toggle form and if it exists display the form 
                toggleForm  && 
                <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                        <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                        Owner Name
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input type="text" name="ownerName" id="ownerName"
                            /*Se añade un onChange en el input del dueño de la mascota, donde se obtiene el valor 
                            del input que estamos tratando, lo que se hace es usar el método setFormData y si algo cambia en alguno de
                            los campos input del formulario entonces se accederá a toda esa información */
                            onChange={(event) => {setFormData({...formData, ownerName: event.target.value})}}
                            value = {formData.ownerName}
                            className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                        </div>
                    </div>
            
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                        <label htmlFor="petName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                        Pet Name
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input type="text" name="petName" id="petName"
                            onChange={(event) => {setFormData({...formData, petName: event.target.value})}}
                            value = {formData.petName}                        
                            className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                        </div>
                    </div>
    
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                        <label htmlFor="aptDate" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                        Apt Date
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input type="date" name="aptDate" id="aptDate"
                            onChange={(event) => {setFormData({...formData, aptDate: event.target.value})}}
                            value = {formData.aptDate}                         
                            className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                        </div>
                    </div>
            
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                        <label htmlFor="aptTime" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                        Apt Time
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input type="time" name="aptTime" id="aptTime"
                            onChange={(event) => {setFormData({...formData, aptTime: event.target.value})}}
                            value = {formData.aptTime} 
                            className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                        </div>
                    </div>
            
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                        <label htmlFor="aptNotes" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                        Appointment Notes
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <textarea id="aptNotes" name="aptNotes" rows="3"
                            onChange={(event) => {setFormData({...formData, aptNotes: event.target.value})}}
                            value = {formData.aptNotes}                         
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Detailed comments about the condition"></textarea>
                        </div>
                    </div>
                    <div className="pt-5">
                        <div className="flex justify-end">
                        {/*Cuando se presione el boton submit, este ejecutará la función formDataPublish*/}
                        <button type="submit" onClick={formDataPublish} className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                            Submit
                        </button>
                        </div>
                    </div>
                </div>
            }
      </div>
    );
}

export default AddAppointment;