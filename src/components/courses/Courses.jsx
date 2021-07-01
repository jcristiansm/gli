import React from 'react';
import { Link } from 'react-router-dom';

import arrowRight from '../../assets/img/arrow_right.png';
import filter from '../../assets/img/filter.png';

const Courses = () => {
  return (
    <main className="courses">
      <div className="links">
        <Link className="links-home" to="/">
          Inicio
        </Link>
        <span>
          <img src={arrowRight} alt="icon" />
        </span>
        <Link className="links-courses" to="/cursos">
          Cursos
        </Link>
      </div>
      <h1>Cursos y capacitación</h1>
      <div className="courses-options">
        <div className="search-options">
          <input type="text" placeholder="Buscar" />
          <button>BUSCAR</button>
          <div>
            <img src={filter} alt="icon" />
          </div>
        </div>
        <div className="other-options">
          <button className="btn-download">Descargar</button>
          <button className="btn-new">Agregar nuevo curso</button>
        </div>
      </div>
    </main>
  );
};

export default Courses;
