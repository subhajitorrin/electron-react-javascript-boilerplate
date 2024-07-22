import React from "react";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          fontSize: "3vw",
          fontWeight: "bold",
          fontFamily: "sans-serif",
        }}
      >
        Hello Electron+React+Javascript
      </div>
    </div>
  );
}

export default Home;
