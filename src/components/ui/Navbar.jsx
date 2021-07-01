import React from 'react';
import search from '../../assets/img/search.png';
import avatar from '../../assets/img/avatar.png';
import logout from '../../assets/img/log-out.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <span>
        <img src={search} alt="icon" />
      </span>
      <div className="user">
        <span>
          <img src={avatar} alt="avatar" />
        </span>
        <div className="user-info">
          <p>Adrian Stefan</p>
          <p>Reccursos Humanos</p>
        </div>
      </div>
      <span className="navbar-logout">
        <img src={logout} alt="icon" />
      </span>
    </nav>
  );
};

export default Navbar;
