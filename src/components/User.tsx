import "./User.css"
import React from "react";
import { User } from "../types/pipTypes";

interface UserProps {
  user:User;
}

const UserProfile: React.FC<UserProps> = ({ user }) => {
  return(
    <>
      <img className="vault-icon" src="./images/vault-welcome-logo.png" />
      <div className="user-table">
        <div className="user-data">
          <label>USER :</label><input disabled value={user.name} />
          <label>ID :</label><input disabled value={user.id} />
          </div>  
      
        <div className="user-data">  
          <label>JOB :</label><input disabled value={user.designation} />
          <label>RANK :</label><input disabled value={user.rank} />
        </div>  
      
        <div className="user-data">  
          <label>DOB :</label><input disabled value={user.dob} />
          <label>LOCATION :</label><input disabled value={user.location} />
        </div>        
      </div>
    </>
  );
};

export default UserProfile;