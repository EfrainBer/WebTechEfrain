import React from 'react';
import axios from 'axios';

class Personajes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/data')
      .then(resp => {
        this.setState({
          posts: resp.data
        });
      });
  }

  render() {
    const { posts } = this.state;
    const { match } = this.props;
    const personaje = posts.filter(c => c.id === parseInt(match.params.id))[0];

    return (
      <>
        {
          personaje ? (
            <div className="Detalle">
              <div className="card-detalle card">
                <div className="imgcontentA">
                  <img src={personaje.img} className="card-img-top" alt={personaje.img} />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{personaje.nombre}</h5>
                  <p className="card-text">Edad: {personaje.edad}</p>
                  <p className="card-text">Count: {personaje.count}</p>
                  <p className="card-text">Especie: {personaje.especie}</p>
                  <p className="card-text">Arma: {personaje.Arma}</p>
                  <br />
                  <div className="vrt">
                    <a href="/PersonajesAPI" className="btn btn-dark">Ver todos</a>
                  </div>
                </div>
              </div>
            </div>
          ) :
          <h1>El id del personaje no existe</h1>
        }
      </>
    );
  }
}

export default Personajes;