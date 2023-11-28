import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./index.css"
import PanelCategoria from "./PanelCategoria";
import letratienda from './lusanuncio.png';

function Buscador () {
    const [buscador, setBuscador] = useState();

    return(
        <div className="flex justify-center ">
            <img className="m-3 w-44" src={letratienda} alt="" />
            {/* <input placeholder ="buscar" onChange={(e) => setBuscador(e.target.value)}className="bg-white font-semibold mt-4 w-80" type="text" /> */}
            <input placeholder =" buscar" className="bg-white font-semibold mt-4 w-80" type="text" />
            <button className="bg-white mt-4 font-mono"> <FiSearch className="ml-2 mr-2"/></button>
            {/* <PanelCategoria buscador={buscador}/> */}
        </div>
        
    )
}   
export default Buscador;