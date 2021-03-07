import { Card, Tab, Tabs } from "@blueprintjs/core";
import { useContext, useState } from "react";
import { UserContext } from "./context/UserContext";
import Login from "./Login";
import Register from "./Register";
import Welcome from "./Welcome";

function App() {
  const [currentTab, setCurrentTab] = useState("login");
  const [userContext, setUserContext] = useContext(UserContext);

  return !userContext.token ? (
    <Card elevation="1">
      <Tabs id="Tabs" onChange={setCurrentTab} selectedTabId={currentTab}>
        <Tab id="login" title="Login" panel={<Login />} />
        <Tab id="register" title="Register" panel={<Register />} />
        <Tabs.Expander />
      </Tabs>
    </Card>
  ) : (
    <Welcome />
  );
}

export default App;
