import '../styles/globals.css';
import LayOut from "../components/Layout";
import { SessionProvider } from "next-auth/react"


function MyApp({ Component, pageProps:{ session, ...pageProps }  }) {
  return (

    <SessionProvider session={session}>
  <LayOut>
  <Component {...pageProps} />
  </LayOut>
  </SessionProvider>
  )
}

export default MyApp
