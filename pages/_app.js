import "../styles/global.css";
import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";

function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
