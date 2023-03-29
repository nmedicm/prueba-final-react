import { useEffect, useState } from "react";
import Carta from "./Carta";

const MiApi = () => {



    const [datos, setDatos] = useState([]);
    const [busqueda, setBusqueda] = useState("")

    useEffect(() => {
        obtenerData();
    }, []);

    const obtenerData = async () => {
        const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";
        const respuesta = await  fetch(url);
        const { drinks } = await respuesta.json();
        
        const tragos = drinks.map((trago) => {
            return{
                id: trago.idDrink,
                nombre: trago.strDrink,
                imagen: trago.strDrinkThumb
            };
        });

        setDatos(tragos.sort());

    };


    return (

        <>
            <div className="container">
                <nav className="navbar">
                    <div class="container-fluid">
                    <label class="navbar-brand" htmlFor="busqueda">Buscador de Tragos No-Alcohólicos</label>
                    <form className="d-flex">
                        <input
                        id="busqueda"
                        type="text"
                        className="form-control me-2 my-3"
                        placeholder="Busca un trago"
                        onChange={(e) => setBusqueda(e.target.value)}
                        value={busqueda}
                        />
                    </form>
                    </div>
                </nav>


            
                <div className="row">
                    {
                        datos
                            .filter((item) => {
                                if( item.nombre.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase()) ){
                                    return true;
                                }

                                return false;
                            })
                            .map((item) => {
                                return <Carta key={item.id} nombre={item.nombre} imagen={item.imagen}/>;
                            })
                    }
                </div>
            </div>
        </>

    );
};

export default MiApi;