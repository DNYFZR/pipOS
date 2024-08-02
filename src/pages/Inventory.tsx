import "./Inventory.css";
import "./Radio.css";
import React, { useState } from "react";
import Router, { RouterMap } from "../components/AppRouter";


const InvUI:React.FC = () => {
  const weaponInv: string[] = [
    "Assault Rifle",
    "Combat Rifle",
    "Combat Shotgun",
    "Double-Barrel Shotgun",
    "Hunting Rifle",
    "Laser Musket",
    "Submachine Gun",
    "Heavy Gun",
    "Laser Gun",
    "Plasma Pistol",
    "Plasma Rifle",
    "Artillery Smoke Grenade",
    "Walking Cane",
    "Boxing Glove",
    "Deathclaw Gauntlet",
    "Knuckles",
    "Power Fist",
    "9mm M9FS Beretta",
    "9mm SMG",
    "SPAS-12",
    ".44 Heavy Machine Gun",
    "Incendiary Mortar",
    "Shredder",
    "Home-made Laser Pistol",
    "Home-made Laser Rifle",
    "Plasma Cannon",
    "Home-made bomb",
    "Incendiary grenade",
    "Toxic grenade",
    "M79 Grenade Launcher",
    "Acid Grenade",
    "Flash Grenade",
    "Powder Bag",
    "Shovel",
    "Nail Board",
    "Auto-axe",
    "Cleaver",
    "Plasma Saw",
    "Tesla Cleaver"
  ];
  const apparalInv: string[] = ["Kellogs Outfit", "Institute Courser Outfit", "Vault 111 Jumpsuit"];
  const aidInv: string[] = ["RadAway", "Stimpack", "Nukka Cola", "Nukka Cola Quantum"];

  const getInventory = (menuItems: string[] | number[]) => {
    const [selectedStation, setSelectedStation] = useState<string | number>(menuItems[0]);
  
    return (
      <div className="inv-menu">
        {menuItems.sort().map((v) => 
          <button 
            className={selectedStation == v? "inv-menu-item active" : "inv-menu-item"} 
            onClick={() => setSelectedStation(v)}
          >{typeof v === "number"? v : v.toUpperCase()}</button>           
        )}
      </div>
    );
  };

  const pageMap: RouterMap = {
    "WEAPONS": () => getInventory(weaponInv),
    "APPARAL": () => getInventory(apparalInv),
    "AID": () => getInventory(aidInv),
  };

  return (
    <>
      <h3>VAULT-TEC INVENTORY MANAGER v3.14.12</h3>
      <Router appRoutes={pageMap} subMenu={true} />
    </>
  );
};

export default InvUI;

