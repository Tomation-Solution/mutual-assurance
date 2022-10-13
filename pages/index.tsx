import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import GeneralLayout from '../layout/GeneralLayout/GeneralLayout'
import Card from '../shared/Card/Card'
import { CardGrid } from '../shared/Card/Card.style'
import HeroSection from '../shared/HeroSection/HeroSection'
import MDmessage from '../shared/MDmessage/MDmessage'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <GeneralLayout>
      <HeroSection/>
      <br />

      <div style={{'padding':'1rem'}}>
        <h2 style={{'textAlign':'center'}}>Our Services</h2>
        <br />

        <CardGrid>
          {
            [...new Array(4)].map((d,index)=>(
              <Card key={index}/>
            ))
          }

        </CardGrid>
      </div>


      <MDmessage/>
    </GeneralLayout>

  )
}

export default Home
