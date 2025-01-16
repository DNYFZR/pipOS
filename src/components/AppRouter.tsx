import"./AppRouter.css"
import React, { useState } from 'react';

export type RouterMap = {
  [key: string]: React.ElementType;
};

interface RouterProps {
  appRoutes: RouterMap;
  subMenu?: boolean;
}

const Router: React.FC<RouterProps> = ({ appRoutes, subMenu }) => {
  // Initialize state with the first key in the components map
  const firstKey:string = Object.keys(appRoutes)[0];
  const [selectedComponent, setSelectedComponent] = useState<string>(firstKey);

  // Get the component to render from the components map
  const ComponentToRender = selectedComponent? appRoutes[selectedComponent] : appRoutes[firstKey];

  return (
    <>  
      <div className={subMenu? "" : "tab-menu"}>
        {Object.keys(appRoutes).map((componentKey) => (
          <button
            key={componentKey}
            className={
              subMenu? 
                (componentKey === selectedComponent? 'cc-sub-button-selected' : 'cc-sub-button')
              : (componentKey === selectedComponent ? 'cc-button-selected' : 'cc-button')
            }
            onClick={() => componentKey? setSelectedComponent(componentKey): null}
          >
            {componentKey}
          </button>
        ))}
      </div>

      {ComponentToRender? <ComponentToRender /> : null}  
      {/* {ComponentToRender ? 
        <ComponentToRender /> : 
        <>
          <TypingEffect tag="h2" text="↑↑↑ PLEASE SELECT A TAB TO BEGIN ↑↑↑" delay={60} />
          <img className="vault-icon-large" src="./images/vault-welcome-logo.png" />
        </>
      } */}
    </>
  );
};

export default Router;
