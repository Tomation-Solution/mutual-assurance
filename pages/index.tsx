import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import GeneralLayout from '../layout/GeneralLayout/GeneralLayout'
import HeroSection from '../shared/HeroSection/HeroSection'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <GeneralLayout>
      <HeroSection/>
    </GeneralLayout>

  )
}

export default Home
