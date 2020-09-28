import React from "react";
import "./Data.css";

//could do props aswell then exclude it using props.name, .surname, etc...

const MembersDataList = ({ name, surname, isActive }) => {
  let date = new Date().toLocaleString();
  return (
    <div className="table">
      <h1>
        Welcome,
        {" " + name + " " + surname.charAt(0).toUpperCase() + surname.slice(1)}
      </h1>
      <button className="ActivateButton">
        {isActive ? "Deactivate" : "Activate"}
      </button>
      <span> {isActive ? "Active" : "InActive"} </span>
      <div className="MembersDataList">
        <p>
          {/* ToLocaleString() */}
          Registration date: <br /> {date}
        </p>
      </div>
    </div>
  );
};

export default MembersDataList;
