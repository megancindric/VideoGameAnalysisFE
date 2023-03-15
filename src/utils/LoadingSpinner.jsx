import React from "react";
import { ReactComponent as Spinner } from "./spinner.svg";
const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center mx-auto">
      <Spinner className=" fill-violet-600 animate-spin" />
    </div>
  );
};

export default LoadingSpinner;
