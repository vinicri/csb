import "../styles/global.css";

function App({ Component, pageProps }) {
  return (
    <div>
      <p>Headedddr</p>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
