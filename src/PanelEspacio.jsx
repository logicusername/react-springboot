import PanelCategoria from "./PanelCategoria.jsx";
import PanelEspacioProductos from "./PanelEspacioProductos.jsx";
import "./index.css";

function PanelEspacio() {
  return (
    <div className="margen">
    {/* <div className="margen ml-24 mt-0 bg-orange-300 flex z-20 ">     */}

      <PanelCategoria />
    </div>
  );
}
export default PanelEspacio;
