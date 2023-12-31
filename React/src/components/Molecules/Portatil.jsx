import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../../assets/css/index_css.css'
import {useParams} from "react-router-dom"

const endPoint='http://127.0.0.1:8000/api'
const ShowPortatil = () => {
    const [portatil, setPortatils] = useState([])
    const [img, setimg] = useState('')
    const [descripcion, setdescripcion] = useState('')
    const [price, setprice] = useState(0)
    const [stock, setstock] = useState(0)
    const {id} = useParams()

    useEffect ( ()=> {
        getAll()
    }, [])

    const getAll = async () => {
        try {
            const response = await axios.get(`${endPoint}/Portatiles`);
            setPortatils(response.data);
        } catch (error) {
            console.error('Error al obtener datos:', error);
        }
    };
    
    const deletePortatil = async (id) => {
        try {
            await axios.delete(`${endPoint}/Portatil/${id}`);
            getAll();
        } catch (error) {
            console.error('Error al eliminar portátil:', error);
        }
    };

    const store = async(e) => {
        e.preventDefault()
        await axios.post(`${endPoint}/Portatil`, {descripcion:descripcion, price:price, stock:stock, img:img})
        getAll();
    }

    const updatePortatil = async () => {
        try {
            const response = await axios.put(`${endPoint}/Portatil/${id}`, {
                descripcion,
                price,
                stock,
                img,
            });
            console.log('Update response:', response.data);
            getAll();
        } catch (error) {
            console.error('Error al actualizar portátil:', error.response?.data || error.message);
        }
    };
    
    

    useEffect ( ()=> {
        const getPortatilById = async() => {
            const response = await axios.get(`${endPoint}/Portatil/${id}`)
            setdescripcion(response.data.descripcion)
            setprice(response.data.price)
            setstock(response.data.stock)
            setimg(response.data.img)
        }
        getPortatilById()
    }, [])
    
  return (
    <div>
        <div>
        <h1 className='TitlePor'><b><i>Portatiles</i></b></h1>
        </div>
            <div className='NewRecord'>
                <button type="button" class="btn btn-outline-dark" data-toggle="modal" data-target="#Registrar">
                    Nuevo Registro
                </button>
            </div>
        <div className="ContenedorPortatiles">
            <div className="PortatilesProductos">
            {
                portatil.map ((portatile)=>(
                <div class="card">
                <l key={portatile.id}/>
                <div className='img-top'><img src={portatile.img} class="card-img-top" alt=""/></div>
                    <div class="card-body">
                        <h6 class="card-title">{portatile.descripcion}</h6>
                        <p class="card-text">${portatile.price.toLocaleString('es-ES')}</p>
                        <div className='Stock'><b><i>In Stock</i></b></div><p class="card-text">{portatile.stock}</p>
                        <div className='row'>
                            <a href="#" class="btn btn-outline-dark">Buy</a>
                            <button onClick={()=>deletePortatil(portatile.id)} className="btn btn-outline-danger">Delete</button>
                            <button onClick={()=>getPortatilById(portatile.id)} className="btn btn-outline-warning" data-toggle="modal" data-target="#Editar">Edit</button>
                        </div>
                    </div>
                </div>
                ))
            }
            </div>
        </div>
        {/* <!-- Modal Registar --> */}
        <div class="modal fade" id="Registrar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Nuevo Portatil</h5>
                    </div>
                    <div class="modal-body">
                        <form onSubmit={store}>
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Nombre Producto</label>
                                <div class="col-sm-10">
                                    <input value={descripcion} onChange={(e)=> setdescripcion(e.target.value)}  type="text"  class="form-control" id="exampleFormControlInput1" placeholder="Nombre"/>
                                </div>
                            </div>
                            <div className='precio'>
                                <label class=" precio col-form-label">Precio</label>
                                    <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">$</span>
                                    </div>
                                    <input value={price} onChange={(e)=> setprice(e.target.value)} type="number" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder='0'/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-6 col-form-label">Cantidad Comprada</label>
                                <div class="col-sm-6">
                                    <input value={stock} onChange={(e)=> setstock(e.target.value)} type="number" class="form-control" id="exampleFormControlInput1" placeholder="0"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label">Link IMG</label>
                                <div class="col-sm-9">
                                    <input value={img} onChange={(e)=> setimg(e.target.value)} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Link"/>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="Submit" class="btn btn-success">New Record</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        {/* Editar Modal */}
        <div className="modal fade" id="Editar" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Editar Portatil
                            </h5>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={updatePortatil}>
                                {/* ... (previous form fields) */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ShowPortatil
