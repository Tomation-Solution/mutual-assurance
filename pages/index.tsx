import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import GeneralLayout from '../layout/GeneralLayout/GeneralLayout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <GeneralLayout>
      <h1>Hell world</h1>
    </GeneralLayout>
  )
}

export default Home
