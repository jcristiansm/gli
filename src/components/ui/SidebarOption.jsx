import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarOption = ({ img, txt, link }) => {
  return (
    <NavLink exact to={link} className="navlink">
      <div className={`option ${txt === 'Cursos' ? 'option-bg' : ''} `}>
        <img src={img} alt="icon" />
        <span>{txt}</span>
      </div>
    </NavLink>
  );
};

export default SidebarOption;
