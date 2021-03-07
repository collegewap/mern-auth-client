import { Card, Tab, Tabs } from "@blueprintjs/core";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

function App() {
  const [currentTab, setCurrentTab] = useState("login");

  return (
    <Card elevation="1">
      <Tabs id="Tabs" onChange={setCurrentTab} selectedTabId={currentTab}>
        <Tab id="login" title="Login" panel={<Login />} />
        <Tab id="register" title="Register" panel={<Register />} />
        <Tabs.Expander />
      </Tabs>
    </Card>
  );
}

export default App;
