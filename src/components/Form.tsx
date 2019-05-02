import React, { Component } from 'react';

export interface IDatosBusqueda {
  nombre: string;
  categoria: string;
}

interface IFormProps {
  categorias: any[];
  obtenerEventos: (a: IDatosBusqueda) => void;
}
class Form extends Component<IFormProps> {
  nombreEventoRef = React.createRef<HTMLInputElement>();
  categoriaRef = React.createRef<HTMLSelectElement>();

  buscarEvento = (e: React.FormEvent) => {
    e.preventDefault();
    const datosBusqueda: IDatosBusqueda = {
      nombre: this.nombreEventoRef.current
        ? this.nombreEventoRef.current.value
        : '',
      categoria: this.categoriaRef.current
        ? this.categoriaRef.current.value
        : ''
    };
    this.props.obtenerEventos(datosBusqueda);
  };

  cargarOpciones = (key: string) => {
    const categoria: any = this.props.categorias[parseInt(key)];
    const { id, name_localized } = categoria;
    if (!id || !name_localized) return;
    return (
      <option key={id} value={id}>
        {name_localized}
      </option>
    );
  };

  render() {
    const idCategorias: string[] = Object.keys(this.props.categorias);

    return (
      <form onSubmit={this.buscarEvento}>
        <fieldset className="uk-fieldset uk-margin">
          <legend className="uk-legend uk-text-center">
            Busca tu evento por nombre o categoría
          </legend>
          <div className="uk-column-1-3@m uk-margin">
            <div className="uk-margin">
              <input
                ref={this.nombreEventoRef}
                type="text"
                className="uk-input"
                placeholder="Nombre de Evento o ciudad"
              />
            </div>
            <div className="uk-margin">
              <select ref={this.categoriaRef} className="uk-select">
                {idCategorias.map(this.cargarOpciones)}
              </select>
            </div>
            <div className="uk-margin">
              <button className="uk-button uk-button-danger">Buscar</button>
            </div>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default Form;
