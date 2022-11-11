import '../styles/globals.css'
import { PostingProvider } from "../src/context/context";
import { prefix } from "../config/config";

console.log(prefix)

function MyApp({ Component, pageProps }) {
  return (
    <PostingProvider value={{ prefix }}>
      <Component {...pageProps} />
    </PostingProvider>
  )
}

export default MyApp
