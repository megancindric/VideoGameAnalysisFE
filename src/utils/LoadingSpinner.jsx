import React from "react";
import { ReactComponent as Spinner } from "./spinner.svg";
const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <Spinner className=" fill-violet-600" />
    </div>
  );
};

export default LoadingSpinner;
