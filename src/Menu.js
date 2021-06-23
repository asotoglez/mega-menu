import React, { useMemo, useState } from 'react';
import './Menu.css';
import MenuItem from './MenuItem';

function Menu({ elements = [], active }) {
  const [activeMenuItem, setActiveMenuItem] = useState(active);
  const buildMenuItemList = useMemo(
    () =>
      elements.map(({ id, label = '-', elements = [] }) => (
        <div key={id} onClick={() => setActiveMenuItem(id === activeMenuItem ? '-' : id)}>
          <MenuItem label={label} active={activeMenuItem === id} elements={elements} />
        </div>
      )),
    [elements, activeMenuItem]
  );

  return <div className="menu">{buildMenuItemList}</div>;
}

export default Menu;
