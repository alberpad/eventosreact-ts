import React from 'react';
import Header from './components/Header';
import Form, { IDatosBusqueda } from './components/Form';
import Eventos from './components/Eventos';

interface IState {
  categorias: any[];
  eventos: any[];
}

class App extends React.Component {
  token = '6W4RNW7YFL52G3RZ6GWA';
  orden = 'date';
  state = {
    categorias: [],
    eventos: []
  };
  obtenerCategorias = async () => {
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${
      this.token
    }&locale=es_ES`;

    const response = await fetch(url);
    const categorias: any = await response.json();
    this.setState({
      categorias: categorias.categories
    });
  };
  obtenerEventos = async (busqueda: IDatosBusqueda) => {
    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${
      busqueda.nombre
    }&sort_by=${this.orden}&categories=${busqueda.categoria}&token=${
      this.token
    }&locale=es_ES`;

    const response = await fetch(url);
    const eventos: any = await response.json();
    this.setState({
      eventos: eventos.events
    });
  };

  componentDidMount() {
    this.obtenerCategorias();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="uk-container">
          <Form
            obtenerEventos={this.obtenerEventos}
            categorias={this.state.categorias}
          />
          <Eventos eventos={this.state.eventos} />
        </div>
      </div>
    );
  }
}

export default App;
