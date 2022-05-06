import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios';
import Formulario from './Componentes/Formulario/Formulario' ;
import VistaProducto from './Componentes/VistaProducto/VistaProducto' ;
import {BrowserRouter, Link, Route} from 'react-router-dom';

function App() {
  /*
  const [productos, setProductos] = useState( [] );
  const [titulo, setTitulo] = useState ('');
  const [precio, setPrecio] = useState(0);
  const [descripcion, setDescripcion] = useState('')


  const agregarProducto = (event) =>{
    event.preventDefault();
      const nuevoProducto = { titulo, precio, descripcion}
      console.log("producto:", nuevoProducto)
    
    axios.post ( ' http://localhost:8080/api/product/new ' , {
      titulo,
      precio,
      descripcion
    })
      .then ( response => console.log(response))
      .catch ( err => console.log(err))
  }


  useEffect (() => {
    axios.get ( 'http://localhost:8080/api/product' )
      .then ( response => {
        setProductos (response.data);
      });
  }, []);

*/

  return (
    <BrowserRouter>
    {/*
        <h1> Product Manager </h1>
        <form onSubmit={agregarProducto}>
            <label htmlFor="titulo">Titulo:</label>
            <input type="text" id="titulo" onChange={ (event) => setTitulo(event.target.value)}></input>
            <nav>
            <label htmlFor="precio">Precio:</label>
            <input type="number" id="precio" onChange={ (event) => setPrecio(event.target.value)}></input>
            </nav>
            <label htmlFor="descripcion">
                    Descripcion:
            </label>
            <input type="text" id="descripcion" onChange={ (event) => setDescripcion(event.target.value)}></input>
            <nav>
            <button type="submit">
                Create
            </button>
            </nav>
        </form>
        <h1> All Products: </h1>
            {productos.map((producto, index) => {
                    return (
                        <nav>
                            <Link to= {"/" + producto._id} key={index}>{producto.titulo} </Link>
                          </nav>
                    )})
            }
      */}
      <Route path = "//" render = { (routeProps) => <Formulario {...routeProps}/>}/>
      <Route path= {"/:id"} render= { (routeProps) => <VistaProducto {...routeProps} />}/>
    </BrowserRouter>
  );
}

export default App;
