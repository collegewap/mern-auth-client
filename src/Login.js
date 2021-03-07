import { Button, FormGroup, InputGroup } from "@blueprintjs/core";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <form className="auth-form">
        <FormGroup label="Email" labelFor="email">
          <InputGroup
            id="email"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup label="Password" labelFor="password">
          <InputGroup
            id="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button intent="primary" fill type="submit" text="Sign In" />
      </form>
    </>
  );
};

export default Login;
