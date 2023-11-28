import { createContext , useState , useEffect  } from "react";

export const TaskContext =  createContext()

export function TaskContextProvider(props){
    const [dato , setDato] = useState([]);
    const [categoria , setCategoria] = useState([]);
    // let x = 20

    

    function cargarDatos(){
        fetch('https://fakestoreapi.com/products/')
            .then( res =>res.json())
            .then(data => setDato(data))
        // const response = await fetch('https://fakestoreapi.com/products/1');
        // const data = await response.json();
        // setDato(data); 
    }
    useEffect(() => { // carga la pagina cuando el useEffect esta 
        cargarDatos();}, 
    []);

    function handleCargarCategorias() {
        // setCategoria(dato[0].filter((cate) => cate.price > 0 ));
        // console.log("array de dato" + dato[0])
        console.log(dato[0])
        // console.log([dato[0].price,dato[1].price])
    }
                
    return(
        <TaskContext.Provider value={{
            dato : dato,
            handleCargarCategorias : handleCargarCategorias 
            // categoria : categoria
        }
        }>
            {props.children}
        </TaskContext.Provider>
    )
}