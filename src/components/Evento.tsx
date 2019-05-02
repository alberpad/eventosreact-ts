import React from 'react';
import { directive } from '@babel/types';
interface IEventoProps {
  infoEvento: any;
  key: string;
}
const Evento: React.FC<IEventoProps> = (props) => {
  const { name, description, logo, url } = props.infoEvento;
  let descNorm: string = '';
  if (description.text) descNorm = description.text;
  if (descNorm.length > 250) {
    descNorm = descNorm.substr(0, 250);
  }
  if (!name) return <div />;
  return (
    <div>
      <div className="uk-card uk-card-default">
        <div className="uk-card-media-top">
          {logo ? <img src={logo.url} alt={name.text} /> : ''}
        </div>
        <div className="uk-card-body">
          <h3 className="uk-card-title">{name.text}</h3>
          <p>{descNorm}</p>
        </div>
        <div className="uk-card-footer">
          <a
            href={url}
            target="_blank"
            className="uk-button uk-button-secondary"
          >
            Más Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default Evento;
