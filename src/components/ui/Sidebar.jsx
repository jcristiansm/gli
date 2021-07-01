import React from 'react';
import SidebarOption from './SidebarOption';

import { options } from '../../data/data';
import logo from '../../assets/img/gli-logo-color.png';
import externalLink from '../../assets/img/external-link.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>
      <div className="options">
        {options.map((option) => (
          <SidebarOption key={option.id} {...option} />
        ))}
      </div>
      <div className="help">
        <div className="help-txt">
          <p>¿Necesitas ayuda?</p>
          <a href="#">Ir a la sección de ayuda</a>
        </div>
        <img src={externalLink} alt="icono" />
      </div>
      <div className="sidebar-footer">
        <p>&copy; Copyright GLI 2021</p>
      </div>
    </div>
  );
};

export default Sidebar;
