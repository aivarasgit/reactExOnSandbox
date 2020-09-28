import React from "react";
import "./styles.css";
import MembersDataList from "./components/DataList";
import EventRegForm from "./components/EventRegForm";

export default function App() {
  const [name, input] = "";
  const [values, valuesChanged] = EventRegForm(name, input);
  return (
    <div className="App">
      <form className="RegistrationForm">
        <label for="nameID">Name:</label>
        <input
          name="name"
          type="text"
          id="nameID"
          value={values.name}
          onChange={valuesChanged}
        />
        <label for="inputID">Input:</label>
        <input
          name="input"
          type="text"
          id="inputID"
          value={values.input}
          onChange={valuesChanged}
        />

        <MembersDataList name="Akivaraki" surname="nobody" isActive={false} />
        <MembersDataList name="Loli" surname="Namatamoli" isActive={true} />
        <MembersDataList
          name="Kyiuosaki"
          surname="Abaravfeki"
          isActive={false}
        />
      </form>
    </div>
  );
}
