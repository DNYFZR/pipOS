import React, { useState } from "react";
import "./Special.css";

interface SpecialDataProps {
  strength: number;
  perception: number;
  endurance: number;
  charisma: number;
  intelligence: number;
  agility: number;
  luck: number;
};

const SpecialCategories: string[] = ["strength", "perception", "endurance", "charisma", "intelligence", "agility", "luck"];

const SpecialData:React.FC = () => {
  const userSpecial:SpecialDataProps = {
    strength: 9,
    perception: 8,
    endurance: 7,
    charisma: 6,
    intelligence: 5,
    agility: 4,
    luck: 3
  };

  const descriptions: Object = {
    "STRENGTH" : "Strength determines how much you can carry, and the damage done by melee attacks.",
    "PERCEPTION" : "Perception affects your V.A.T.S combat system accuracy",
    "ENDURANCE" : "Endurance modifies your Hit Points, and sets the rate at which Action Points deplete (while sprinting).",
    "CHARISMA" : "Charisma influences your ability to persuade others, max settlement sizes, and prices traders & merchants will charge you.",
    "INTELLIGENCE" : "Intelligence determines how difficult hacking terminals will be, and the multiplier applied to XP gains.",
    "AGILITY" : "Agility is how maximum action points & pickpocketing chances are calculated, it also influences your chances of being detected while sneaking.",
    "LUCK" : "Luck determines the recharge rate of the Critical Hit meter. It can indirectly improve how much caps and ammo one finds, and other random occurances.",
  };

  const [selectedAttribute, setSelectedAttribute] = useState<string>(SpecialCategories[0]);

  return (
    <div className="special-container"> 
        <div className="special-menu">
          {SpecialCategories.map((v, _) => 
            <button 
              className={selectedAttribute == v? "special-menu-item active" : "special-menu-item"} 
              onClick={() => setSelectedAttribute(v)}
            >{v.toUpperCase()} <s/> {Object(userSpecial)[v.toLowerCase()]}</button>           
          )}
        </div>

        <div className="special-content">
          <img className="special-image" src="./images/vault-boy-green.png"/>
          <h4>{Object(descriptions)[selectedAttribute.toUpperCase()]}</h4>
        </div>
    </div>
  );
};

export default SpecialData;