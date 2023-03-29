const Carta = ({ nombre, imagen }) =>         
    <div className="card col-3 text-center">{nombre}: <img src={imagen} alt="referencia" className="rounded mx-auto d-block my-2" width="200"/></div>
            

export default Carta;