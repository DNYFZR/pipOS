import { useState } from "react"
import "./App.css"
import "./styles/CRT.css"
import "./styles/Screen.css"

import { User } from "./types/User"
import Router, { RouterMap } from "./components/AppRouter";
import StatsUI from "./pages/Stats";
import InvUI from "./pages/Inventory";
import AudioPlayer from "./pages/Radio";
import MapComponent from "./components/Map";

export const osTitle: string = "PIP-OS(R) V7.1.0.8";

export const userProfile: User = {
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

function App() {
  const commandLines: string[] = [
    'COPYRIGHT 2075 ROBCO(R)',
    'LOADER V1.1',
    'EXEC VERSION 41.10',
    '64K RAM SYSTEM', 
    '38911 BYTES FREE',
    'NO HOLOTAPE FOUND',
    'LOAD ROM(1): DEITRIX 303',
  ];

  const center: [number, number] = [50, 3];
  const zoom: number = 3.5;

  const appPages: RouterMap = {
    "STAT": () => <StatsUI />, 
    "INV": () => <InvUI/>,
    // "DATA": () => <LoadError />,
    "MAP": () => <MapComponent center={center} zoom={zoom} />,
    "RADIO": () => <AudioPlayer />,
  };


  const [standbyOn, setStandbyOn] = useState<boolean>(false);
  const [showWelcome, setShowWelcome] = useState<boolean>(true);
  const [torchOn, setTorchOn] = useState<boolean>(false);
  
  const handleStandby = () => {
    setStandbyOn(standbyOn? false : true);
    setTorchOn(false);
    setShowWelcome(true);
  };
  
  const handleTorch = () => {
    setShowWelcome(true);
    setTorchOn(torchOn? false : true);
    setStandbyOn(false);
  };

  const handleLaunch = () => {
    setTorchOn(false);
    setShowWelcome(false);
  };

  const welcomeMessage = () => {
    return(
      <>
        <h2>{osTitle}</h2>
        <img className="vault-icon" src="./images/vault-welcome-logo.png" />
        {commandLines.map((v, _) => <p><b>{v}</b></p>)}
        <button onClick={handleLaunch}>LAUNCH</button>
      </>
    );
  };

  return (
    <div className="crt">
      <div className="pip-icons">
        <img 
          className="pip-icon" 
          src="./icons/power-128.png"
          onClick={handleStandby} 
        />

        <img 
          className="pip-icon" 
          src="./icons/flashlight-128.png"
          onClick={handleTorch} 
        />
      </div>
        
      <div className={standbyOn? "crt-screen off" : "crt-screen on"}>
        <div className="screen-content">
          <div className={torchOn? "pip-os-torch" : "pip-os"}>
            <div className="app-screen">
              {torchOn? <h2>{osTitle}</h2> : 
                showWelcome ? welcomeMessage() : 
                  <Router appRoutes={appPages}/>
              }
            </div>
        </div>

        </div>

        <div className="screen-overlay" />
      </div>

    </div>
  )
}

export default App
