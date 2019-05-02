import React, { Component } from 'react';
import Evento from './Evento';
import { directive } from '@babel/types';

interface IEventosProps {
  eventos: any[];
}
class Eventos extends Component<IEventosProps> {
  render() {
    if (this.props.eventos.length > 0) {
      return (
        <div className="uk-child-width-1-3@m" uk-grid="true">
          {Object.keys(this.props.eventos).map((key: string) => (
            <Evento key={key} infoEvento={this.props.eventos[parseInt(key)]} />
          ))}
        </div>
      );
    } else {
      return <div>No hay eventos que mostrar</div>;
    }
  }
}

export default Eventos;

{
  /* <div className="uk-child-width-1-3@m" uk-grid="true">
  {Object.keys(this.props.eventos).map((key: string) => (
    <Evento key={key} infoEvento={this.props.eventos[parseInt(key)]} />
  ))}
</div> */
}
