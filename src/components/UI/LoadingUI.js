import React from "react";
import { CircularProgress } from "@mui/material";

const LoadingUI = ({ text }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        fontSize: "20px",
        fontFamily: "cursive",
        marginTop: "20px",
        marginBottom: "10px",
      }}
    >
      {text}&nbsp;&nbsp;
      <CircularProgress size={25} />
    </div>
  );
};

export default LoadingUI;
