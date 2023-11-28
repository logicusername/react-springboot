import Panel from "./Panel.jsx";
import PanelEntre from "./PanelEntre.jsx"
import PanelEspacio from "./PanelEspacio.jsx";
import "./index.css";
import PanelEspacioProductos from "./PanelEspacioProductos.jsx";


export function App(){
    return(
        <div className="body">
            <Panel />
            <PanelEntre />
            <PanelEspacioProductos />
            <PanelEspacio />            
        </div>
    )
}
export default App;
