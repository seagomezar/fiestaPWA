import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <section className="hero is-info is-fullheight">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
          Bienvenido al concurso de mi fiesta
        </h1>
        <h2 className="subtitle">
          ¿Estás listo para comenzar?
        </h2>
        <Link to="/login" className="button">Si, Empecemos 🎉</Link>
      </div>
    </div>
  </section>
);
