import { Spinner } from "@blueprintjs/core";
import React from "react";

const Loader = () => {
  return (
    <div className="loader">
      <Spinner size={50} />
    </div>
  );
};

export default Loader;
