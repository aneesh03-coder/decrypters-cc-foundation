import "../styles/globals.css";
import LayOut from "../components/Layout";
import { SessionProvider } from "next-auth/react";
import { wrapper } from "../store/store";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <LayOut>
        <Component {...pageProps} />
      </LayOut>
    </SessionProvider>
  );
}

export default wrapper.withRedux(MyApp);
