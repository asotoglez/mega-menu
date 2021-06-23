import React, { useMemo } from 'react';
import './MenuItem.css';

function MenuItem({ label, active, elements = [] }) {
  const buildSubmenuItems = useMemo(
    () =>
      elements.map(({ id, label = '-' }) => (
        <div className="menu__submenuItem" key={id}>
          {label}
        </div>
      )),
    [elements]
  );
  return (
    <>
      <div
        className={`menu__item menu__item--border ${
          active ? 'menu__item--active' : ''
        }`}
      >
        {label}
      </div>
      <div
        className={`menu__submenu ${
          active && elements[0] ? 'menu__submenu--visible' : ''
        }`}
      >
        {buildSubmenuItems}
      </div>
    </>
  );
}

export default MenuItem;
