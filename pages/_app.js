import '@/styles/globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['300', '400', '700']
})


export default function App({ Component, pageProps }) {
  return <div className={roboto.className}>
  <Component {...pageProps} />
  </div>
}
