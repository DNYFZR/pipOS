import React from "react";
import TypingEffect from "./Effects";

interface Loading {
  message?: string;
}

const LoadError:React.FC<Loading> = ({ message }) => {
  return(
    <>
      <img className="vault-icon" src="./images/vault-welcome-logo.png" />
      <TypingEffect tag="h2" text={message? message : "PIP-OS ERROR...PLEASE CONTACT VAULT-TEC SUPPORT..."} />
    </>
  );
};

export default LoadError;