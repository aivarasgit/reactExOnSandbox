import React from "react";
import "./styles.css";
import MembersDataList from "./components/DataList";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <MembersDataList name="Akivaraki" surname="nobody" isActive={false} />
      <MembersDataList name="Loli" surname="Namatamoli" isActive={true} />
      <MembersDataList name="Kyiuosaki" surname="Abaravfeki" isActive={false} />
    </div>
  );
}
