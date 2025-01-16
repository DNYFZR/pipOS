import "./App.css"
import "./styles/CRT.css"
import "./styles/Screen.css"

import { useState } from "react"
import Router, { RouterMap } from "./components/AppRouter"

import StatsUI from "./pages/Stats"
import InvUI from "./pages/Inventory"
import AudioPlayer from "./pages/Radio"
import MapComponent from "./components/Map"
import SpecialData from "./pages/Special"
import TypingEffect from "./components/Effects"

function App() {
  const appPages: RouterMap = {
    "STAT": () => <StatsUI />, 
    "SPEC": () => <SpecialData />,
    "PERKS": () =>  <TypingEffect tag="h4" text="AWAITING SOFTWARE PATCH..."/>,
    "INV": () => <InvUI/>,
    "MAP": () => <MapComponent center={[50, 3]} zoom={3.5} />,
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
    const commandLines: string[] = [
      'EXEC VERSION 41.10',
      'LOADER V1.1',
      'NO HOLOTAPE FOUND',
      '64K RAM SYSTEM : 38911 BYTES FREE',
      'LOAD ROM(1) : DEITRIX 303',
      'COPYRIGHT 2075 ROBCO(R)',
  
    ];

    return(
      <div className="welcome-block">
        <h3>PIP-OS(R) V7.1.0.8</h3>
        <img className="vault-icon" src="./images/vault-welcome-logo.png" />
        
        <div>
          <button onClick={handleLaunch}>LAUNCH</button>
        </div>
  
        <div>
          {commandLines.map((v, _) => <p><b>{v}</b></p>)}
        </div>
      </div>
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
              {torchOn? <p/> : 
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
