import "./Stats.css";
import React from "react";
import Router, { RouterMap } from "../components/AppRouter";
import TypingEffect from "../components/Effects";
import { userProfile } from "../App";
import SpecialData from "../components/Special";

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

  const subPages: RouterMap = {
    "STATUS": () => userInfo(),
    "SPECIAL": () => <SpecialData />,
    "PERKS": () =>  <TypingEffect tag="h3" text="AWAITING SOFTWARE PATCH..."/>,
  };

  const userInfo = () => {
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

  return(
    <>
      <Router appRoutes={subPages} subMenu={true} />
    </>
  );
};

export default StatsUI;