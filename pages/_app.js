function App({ Component, pageProps }) {
  return (
    <div>
      <p>Header</p>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
