import '../styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import {Comfortaa,Quicksand} from '@next/font/google'

const font_comfortaa = Comfortaa({
    weight:['400','500','600','700'],
    subsets:['cyrillic','latin'],
    variable:"--font-comfor"
})

const font_quicksand = Quicksand({
    weight:['300','400','500','600','700'],
    subsets:['latin'],
    variable:"--font-quicksand"
})



function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <UserProvider>
     <main className={`${font_comfortaa.variable} ${font_quicksand.variable} font-body` }>
     {getLayout(
      <Component {...pageProps} />,pageProps)}
     </main>
    </UserProvider>
  )
}

export default MyApp
