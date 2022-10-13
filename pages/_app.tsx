// import '../styles/globals.css'
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import {lightTheme,darkTheme,GlobalStyles } from '../utils/ThemeConfig'
import { ThemeProvider } from 'styled-components';
import {useState} from 'react';



function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<'dark'|'light'>('light') 

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }
  return <ThemeProvider theme={theme == 'light' ? lightTheme: darkTheme}>

    <GlobalStyles/>

    <NextNProgress/>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
