import React, { useState } from 'react';
import axios from 'axios';

const CrearPersonaje = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [count, setCount] = useState('');
  const [especie, setEspecie] = useState('');
  const [Arma, setArma] = useState('');
  const [img, setImg] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      nombre: nombre,
      edad: edad,
      count: count,
      especie: especie,
      Arma: Arma,
      img : img
    };

    axios.post('http://127.0.0.1:8000/api/register', formData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        // Manejar el error si ocurrió algún problema en la solicitud
        console.error(error);
      });
  };

  return (
    <div className='ElementCls'>
        <form onSubmit={handleSubmit} className='form'>
        <div>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" className='form-control form_input' id="nombre" value={nombre} onChange={e => setNombre(e.target.value)} /><br/>
        </div>
        <div>
            <label htmlFor="edad">Edad:</label>
            <input type="number" className='form-control form_input' id="edad" value={edad} onChange={e => setEdad(e.target.value)} /><br/>
        </div>
        <div>
            <label htmlFor="count">Count:</label>
            <input type="text" className='form-control form_input' id="count" value={count} onChange={e => setCount(e.target.value)} /><br/>
        </div>
        <div>
            <label htmlFor="especie">Especie:</label>
            <input type="text" className='form-control form_input' id="especie" value={especie} onChange={e => setEspecie(e.target.value)} /><br/>
        </div>
        <div>
            <label htmlFor="arma">Arma:</label>
            <input type="text" className='form-control form_input' id="Arma" value={Arma} onChange={e => setArma(e.target.value)} /><br/> 
        </div>
        <div>
            <label htmlFor="arma">IMG (Imgur)</label>
            <input type="link" className='form-control form_input' id="img" value={img} onChange={e => setImg(e.target.value)} /> <br/>
        </div>
        <button type="submit" className='btn btn-success btn-coment s-100'>Enviar</button>
        </form>
    </div>
  );
};

export default CrearPersonaje;