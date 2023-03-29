import React from 'react';
import './Menu.scss';

export default function Menu({menuOpen}) {
  return (
    <div className={menuOpen ? "menu active": "menu" }>
      <ul>
        <li><a href="#intro">Intro</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
      </ul>
    </div>
  )
}
