import "./Stats.css";
import React from "react";

interface User {
  name: string;
  id:string;
  rank: number;
  designation:string;
  dob:string;
  location: string;
  health: number;
  rads: number;
  intelligence: number;
  weightCarried: number;
  weightLimit:number;
}

const userProfile: User = {
  name: "DANNY",
  id: "DNYFZR",
  rank: 69,
  designation: "CHIEF ENGINEER",
  dob: "01/01/2188",
  location: "COMMONWEALTH",
  health: 80,
  rads: 15,
  intelligence: 95,
  weightCarried: 325,
  weightLimit: 350,
};

const StatsUI: React.FC = () => {
  const imageRoster:string[] = [
    "./images/vault-boy-green-railroad.png", 
    "./images/vault-boy-green.png", 
    "./images/vault-boy-green-atom.png",
    "./images/vault-boy-green-bos.png", 
    "./images/vault-boy-green-gasmask.png", 
    "./images/vault-boy-green-hood.png",
  ];

  const randomImage = imageRoster[Math.floor(Math.random() * imageRoster.length)];

  return(
    <>
      <div className="user-stats">
        <div className="user-tiles">
          <div className="user-data">
            <img className="user-icon" src="./icons/heart-128.png" />
            <input disabled className="input-icon" value={"85%"}/>
          </div> 
      
          <div className="user-data">
            <img className="user-icon" src="./icons/radioactive-128.png" />
            <input disabled className="input-icon" value={"12.5%"}/>
          </div>

          <div className="user-data">
            <img className="user-icon" src="./icons/meter-128.png" />
            <input disabled type="text" className="input-icon" value={"3.14 km"}/>
          </div>
        </div>
      </div>

        <img src={randomImage} className="vault-boy" />
        <h3>{userProfile.designation} (LEVEL {userProfile.rank})</h3>

      <div className="user-stats">
        <div className="user-tiles">
          <div className="user-data">
            <img className="user-icon" src="./icons/battery-128.png" />
            <input disabled className="input-icon" value={"62.3%"}/>
          </div> 
          
          <div className="user-data">
            <img className="user-icon" src="./icons/satellite-128.png" />
            <input disabled className="input-icon" value={"88%"}/>
          </div> 
      
          <div className="user-data">
            <img className="user-icon" src="./icons/weight-128.png" />
            <input disabled type="text" className="input-icon" value={`${userProfile.weightCarried} kg`}/>
          </div>
        </div>
      </div>  
    </>
  );
};

export default StatsUI;