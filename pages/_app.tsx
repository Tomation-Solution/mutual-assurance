// import '../styles/globals.css'
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import {lightTheme,darkTheme,GlobalStyles } from '../utils/ThemeConfig'
import { ThemeProvider } from 'styled-components';
import {useState} from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<'dark'|'light'>('light') 

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }
  return <ThemeProvider theme={theme == 'light' ? lightTheme: darkTheme}>

    <GlobalStyles/>

    <NextNProgress
      color={'rgba(220, 33, 76,.9)'}
    />
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"/> 
    
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"/>
    </Head>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
