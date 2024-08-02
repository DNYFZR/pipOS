import "./Stats.css";
import React, { useState } from "react";
import TypingEffect from "../components/Effects";
import { userProfile } from "../App";

const SettingsUI: React.FC = () => {
  const [viewStats, setViewStats] = useState<boolean>(false);
  return(
    <>
      {viewStats === false?
        <>        
          <img className="vault-icon" src="./images/vault-welcome-logo.png" />
          <TypingEffect tag="h2" text="LOADING SETTINGS MENU..."/>
          <button className="fade-in-button" onClick={() => setViewStats(true)}>VIEW</button>
        </> : 
        <>
          <img src="./icons/vault-icon.png" className="vault-boy" />
          <div className="user-stats">
          

            <div className="user-tiles">
              <div className="user-data">
                <img className="user-icon" src="./icons/heart-128.png" />
                <input disabled className="input-icon" value={userProfile.health}/>
              </div> 
          
              <div className="user-data">
                <img className="user-icon" src="./icons/radioactive-128.png" />
                <input disabled className="input-icon" value={userProfile.rads}/>
              </div>
            </div>

            <div className="user-tiles">
              <div className="user-data">
                <img className="user-icon" src="./icons/grad-cap-128.png" />
                <input disabled className="input-icon" value={userProfile.intelligence}/>
              </div> 
          
              <div className="user-data">
                <img className="user-icon" src="./icons/briefcase-128.png" />
                <input disabled type="text" className="input-icon" value={`${userProfile.weightCarried} / ${userProfile.weightLimit}`}/>
              </div>
            </div>

            <div className="user-tiles">
              <div className="user-data">
                <img className="user-icon" src="./icons/grad-cap-128.png" />
                <input disabled className="input-icon" value={userProfile.intelligence}/>
              </div> 
          
              <div className="user-data">
                <img className="user-icon" src="./icons/briefcase-128.png" />
                <input disabled type="text" className="input-icon" value={`${userProfile.weightCarried} / ${userProfile.weightLimit}`}/>
              </div>
            </div>
          </div>  
        </>
      }
    </>
  );
};

export default SettingsUI;