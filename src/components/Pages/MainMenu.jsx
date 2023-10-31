import React from 'react';
import '../../assets/css/index_css.css';
import Imagen from '../../assets/img/OIG.png';
import { NavLink } from 'react-router-dom';


const MainMenu = () => (
    <div className="">
        <ul class="index">
            <div className="foto">
                <img src={Imagen} className="" alt="webTech" />
                <div className="text">
                    <p className="">WebTech of Efrain</p>
                    <p className="little-text"></p>
                </div>
            </div>
            
        </ul>
        <div className="contentMain">
            <div className="Synopsis">
                <h1 className='nameH'>Synopsis</h1>
                <div className="contentH">
                    <p className="textH">Plunderer tells stories of fantasy, action and hero. The year is 305 of the Archian calendar. Today, 
                    the world is ruled by so-called "numbers". In fact, all humans have something called a "count" attached to them. That number 
                    is 1 meter in a sense, and it can be anything. Miles traveled, people you know, meals prepared... everything. problem? When that "count", 
                    or tally, reaches 0, you are sent to a place called the Abyss. Hina, the main character of the story, lost her mother when her mother's counter 
                    reached 0. Her goal now is to fulfill her mother's dying wish of finding the legendary Red Baron.</p>
                    <img src={''} className="CounterH" alt="" />
                </div>
            </div>
            <div className="Trailer">
                <h1 className='nameH'>Portafolio BG Inversiones</h1>
                <div className="contentV">
                    <iframe className='TrailerVid' width="560" height="315" src="https://www.youtube.com/embed/YiO_mGhuORI?si=VHnKCN1hjXZFiuib" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                
                </div>
            </div>
        </div>
    </div>
    
)

export default MainMenu;