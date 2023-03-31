import '@/styles/globals.css'
import { Roboto_Flex, Titillium_Web } from 'next/font/google'

const roboto = Roboto_Flex({ subsets: ['latin'] })
const titillium = Titillium_Web({
  subsets: ['latin'],
  weight: ["400", "900"],
  fallback: "sans-serif"
})


export default function App({ Component, pageProps }) {
  return <main className={`${titillium.className}`}>
  <Component {...pageProps} />
  </main>
}
