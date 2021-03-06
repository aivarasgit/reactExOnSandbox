import React from "react";
import "./styles.css";
import MembersDataList from "./components/DataList";
import EventRegForm from "./components/EventRegForm";

const App = () => {
  const textArea = "Some kind of text";
  const [name, input] = "";
  const [values, valuesChanged] = EventRegForm(name, input, textArea);
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
        <label for="textA__ID">Text:</label>
        <textarea
          name="textArea"
          id="textA__ID"
          value={values.textArea}
          onMouseLeave={valuesChanged}
        ></textarea>
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
};

export default App;
