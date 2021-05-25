import {BiSearch, BiCaretDown} from "react-icons/bi"
import {FcCheckmark} from "react-icons/fc"
import {useState} from 'react';


//Este es el componente que se despliega en sort by 
const DropDown =({toggle, orderBy, onOrderByChange, sortBy, onSortByChange}) =>{
    //Si toggle es falso (toggle es la variable creada en el componente Search igualado a toggleSort) entonces retorne null
    if(!toggle){
        return null;
    }
    return(
        /*
        - origin-top-rigth: transform-origin: top right (me permite cambiar la posición de los elementos transformados)
        transform-origin: x-axis, y-axis
        - absolute: position absolute -> esto lo que hace es posicionar un elemento fuera del flujo normal del documento 
        causando así que sus elementos vecinos actuen como si este no existiera.
        - rounded-md: border-radius: 0.375rem
        */
        <div className="origin-top-right absolute right-0 mt-2 w-56
            rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            {/*
            - py-1: padding-top: 0.25rem, padding-bottom:0.125rem 
            */}    
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {/* 
            - px-4: padding-left: 1rem, padding-right:1rem 
            - text-sm: font-size: 0.875rem, line-height: 1.25rem;
            */}
            <div onClick = {() => onSortByChange('petName')} 
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
                role="menuitem">Pet Name {(sortBy) === 'petName' && <FcCheckmark />}</div>
            <div onClick = {() => onSortByChange('ownerName')} 
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
                role="menuitem">Owner Name  {(sortBy) === 'ownerName' && <FcCheckmark />}</div>
            <div onClick = {() => onSortByChange('aptDate')} 
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
                role="menuitem">Date {(sortBy) === 'Date' && <FcCheckmark />}</div>
            <div onClick = {() => onOrderByChange('asc')} 
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer border-gray-1 border-t-2"
                role="menuitem">Asc {(orderBy) === 'asc' && <FcCheckmark />}</div>
            <div onClick = {() => onOrderByChange('desc')} 
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
                role="menuitem">Desc {(orderBy) === 'desc' && <FcCheckmark />}</div>
            </div>
        </div>
    )
}

//Este es mi componente de la barra de búsqueda
const Search = ({query, onQueryChange, sortBy, onSortByChange, orderBy, onOrderByChange}) => {
    let [toggleSort, setToggleSort] = useState(false)
    return (
        //- py-5: padding-top:1.25rem, padding-bottom:1.25rem 
        <div className="py-5">
            <div className="mt-1 relative rounded-md shadow-sm">
                {/*
                -inset-y-0: esto es top:0px, bottom:0px
                -pl-3: padding-left: 0.75rem 
                -pointer-events-none: Hace que un elemento ignore los eventos de pointer.
                */}
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <BiSearch />
                    <label htmlFor="query" className="sr-only" />
                </div>
                {/*con el atributo onChange se puede escuchar a nuestro input
                   y obtienes el valor del input usando event.target.value, 
                   entonces lo que se hace aquí al final es obtener el valor
                   ingresado en el input */}
                <input type="text" name="query" id="query" value={query}
                    onChange={(event) => {onQueryChange(event.target.value)}}
                    className="pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300" placeholder="Search" />
                <div className="absolute inset-y-0 right-0 flex items-center">
                    <div>
                    {/*
                    -px-4: padding-left: 1rem, padding-right:1.25rem
                    -ml-2: margin-left:0.5rem 
                    Básicamente lo que hace el método setToggleSort es cambiar el estado 
                    de nuestra variable toggleSort 
                    */}
                    <button type="button" onClick = {() => setToggleSort(!toggleSort)}
                        className="justify-center px-4 py-2 bg-blue-400 border-2 border-blue-400 text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center" id="options-menu" aria-haspopup="true" aria-expanded="true">
                        Sort By <BiCaretDown className="ml-2" />
                    </button>
                    <DropDown toggle = {toggleSort}
                        sortBy={sortBy}
                        onSortByChange = {mySort => onSortByChange(mySort)}
                        orderBy = {orderBy}
                        onOrderByChange = {mySort => onOrderByChange(mySort)}
                    />
                    </div>
                </div>
            </div>
      </div>
    );
}

export default Search;