import "../styles/globals.css";
// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
// import { SessionProvider } from "next-auth/react";
import { Provider } from "next-auth/client";
function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <div className="container">
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
