import "../styles/global.css";
import React from "react";

function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
