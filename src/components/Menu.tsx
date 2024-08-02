import React, { useState } from "react";
import "./Special.css";

interface MenuProps {
  items: string[] | number[];
}

const Menu:React.FC<MenuProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<string | number>(items[0]);

  return (
    <>
      {items.map((v) => 
        <button 
          className={selectedItem == v? "special-menu-item active" : "special-menu-item"} 
          onClick={() => setSelectedItem(v)}
        >{typeof v === "number"? v : v.toUpperCase()}</button>           
      )}
    </>
  );
};

export default Menu;