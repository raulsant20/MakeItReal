import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

export default function Menu() {
  return (
    <div className="Menu">
      <Link className="Menu__home" to="/">
        Home
      </Link>
      <Link className="Menu__about" to="/about">
        About
      </Link>
    </div>
  );
}
