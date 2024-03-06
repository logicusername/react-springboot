import { useState, useContext } from "react";

import "./index.css";
import { useEffect } from "react";
function PanelCategoria() {
  // const [openProfile, setOpenProfile] = useState(false)
  let [dato, setDato] = useState([]);
  const [datosdos, setDatosDos] = useState([]);
  const [cambio, setCambio] = useState();

  const [datop, setDatop] = useState(0);

  useEffect(() => {
    async function cargarDatos() {
      // const response = await fetch("https://springcp-405117.uc.r.appspot.com/products");
      const response = await fetch('https://api-ecommercetr.onrender.com/products');
      const dats = await response.json();
      setDatosDos(dats);
      // console.log(dats)
      
      if( cambio === "todos"){
        setDato(datosdos);
      }
      else if (cambio === "celulares") {
        setDato(datosdos.filter((datas) => datas.category === "celular" ));
      }
      else if (cambio === "camaras") {
        setDato(datosdos.filter((datas) => datas.category === "camara" ));
      } 
      else if (cambio === "tablets") {
        setDato(datosdos.filter((datas) => datas.category === "tablet"))
      }
      else if (cambio === "computadores portatiles") {
        setDato(datosdos.filter((datas) => datas.category === "computadores portatiles"))
      }
      else if (cambio === "computadores escritorio") {
        setDato(datosdos.filter((datas) => datas.category === "computadores escritorio"))
      }
      
    }
    cargarDatos();
  }, [cambio]);

  // const [menuTecnologia, setMenuTecnologia] = useState(false);

  // function toggleMenuTecnologia() {
  //   setMenuTecnologia(!menuTecnologia);
  // }
  return (
    <div className="display">
      <div className="listado">
        <div className="w-44 p-4">
          <h1 className="font-semibold text-xl"> Tecnologia </h1>
          <button className="p-2 font-semibold hover:bg-slate-200 w-40 h-8 text-left hover:text-lg hover:text-slate-500/75" onClick={() => { setCambio("celulares");}}> Celulares </button><br />
          <button className="p-2 font-semibold hover:bg-slate-200 w-40 text-left hover:text-lg hover:text-slate-500" onClick={() => { setCambio("camaras");}}> Camaras </button><br />
          <button className="p-2 font-semibold hover:bg-slate-200 w-40 text-left hover:text-lg hover:text-slate-500" onClick={() => { setCambio("tablets");}}> Tablets </button><br />
          <button className="p-2 font-semibold text-start hover:bg-slate-200 w-40 hover:text-lg hover:text-slate-500" onClick={() => { setCambio("computadores portatiles");}}> Computadores portatiles </button><br />
          <button className="p-2 text-start font-semibold hover:bg-slate-200 w-40 hover:text-lg hover:text-slate-500" onClick={() => { setCambio("computadores escritorio");}}> Computadores de escritorio </button><br />
          <br />
          <button className="font-semibold text-lg text-left" onClick={() => { setCambio("todos");}}> Todos los productos </button>  
          {/* {menuTecnologia && (  
          )} */}
        </div>
      </div>  
      <div className="ml-44">
        <div className="arregloProductos">
          {dato.map((datoarreglo) => {
            return (
              <div className="p-3 ml-7">
                <div className="bg-white w-96 flex rounded-lg shadow-lg">
                <img
                  className="w-40 h-48 object-scale-down ml-2"
                  src= {datoarreglo.image}
                  alt=""
                />
                <div className="p-10">
                <h1 className="font-thin">{datoarreglo.name}</h1>
                <h1 className="font-thin">descripcion: {datoarreglo.description}</h1>
                <h1 className="font-thin">precio: {datoarreglo.price}</h1>  
                </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default PanelCategoria;
