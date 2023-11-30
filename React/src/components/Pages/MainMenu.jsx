import React from 'react';
import '../../assets/css/index_css.css';
import Imagen from '../../assets/img/Fondo.png';
import Imagen2 from '../../assets/img/Tableta.jpg';
import Portatiles from '../../assets/img/Portatiles.png';
import Computadores from '../../assets/img/Computadores.png';
import Accesorios from '../../assets/img/Accesorios.png';
import { NavLink } from 'react-router-dom';
import ShowPortatil from '../Molecules/Portatil';


const MainMenu = () => (
    <div className="">
        <ul class="index">
            <div className="foto">
                <img src={Imagen} className="foto-img" alt="webTech" />
                <div className="text">
                    <p className="">WebTech of Efrain</p>
                    <p className="little-text">Proyecto Desarrollo Web y Móvil &copy;2023</p>
                </div>
            </div>
        </ul>
        <div className="contentMain">
            <div className="Synopsis">
                <h1 className='nameH'><b><i>Nosotros</i></b></h1>
                <div className="contentH">
                    <p className="textH">Somos una compañía que desde sus inicios ha tenido el sueño de formar parte del desarrollo económico y social del país, 
                        aportando talento profesional dotado de valores que garantice a cada uno de nuestros clientes y colaboradores integridad y calidad en nuestros 
                        productos y servicios. 
                        <br/><br/> 
                        <div className='MisiVisi'>
                            <h3 className='Mision'><b>Mision</b></h3>
                            <p>Generar solución a cada uno de los requerimientos de nuestros clientes, trabajando con eficiencia y eficacia, creando lazos de confianza y 
                                honestidad que den garantía de nuestros valores y nuestra calidad profesional.</p>
                            <h3 className='Mision'><b>Vision</b></h3>
                            <p>Al 2025 tener presencia comercial en 3 de las más grandes ciudades del país, consolidarnos como una de las mejores opciones para cada unidad 
                                de negocio de nuestra empresa, contar con el mejor grupo profesional enfocado siempre a ofrecer innovación, aporte social y desarrollo 
                                económico a cada colaborador de la compañía y a cada cliente que contrate con nosotros.
                            </p>
                            <br/><br/>
                        </div>
                    </p>
                    <img src={Imagen2} className="CounterH" alt="Tablet" />
                </div>
            </div>
            <div>
                <h1 className='TitlePPC'><b><i>Productos por categoria</i></b></h1>
            </div>
            <div className="ContenedorProductos">
                <div className="ProductosP">
                    <img src={Portatiles} className="Producto" alt="Tablet" />
                    <img src={Computadores} className="Producto" alt="Tablet" />
                    <img src={Accesorios} className="Producto" alt="Tablet" />
                </div>
            </div>
            <hr/>
            <ShowPortatil/>
            <div className="Trailer">
                <h1 className='nameH'><b><i>Portafolio BG Inversiones</i></b></h1>
                <div className="contentV">
                    <iframe className='TrailerVid' width="560" height="315" src="https://www.youtube.com/embed/YiO_mGhuORI?si=VHnKCN1hjXZFiuib" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                
                </div>
            </div>
        </div>
    </div>
    
)

export default MainMenu;