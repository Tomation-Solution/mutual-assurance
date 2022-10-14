import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import GeneralLayout from '../layout/GeneralLayout/GeneralLayout'
import Card from '../shared/Card/Card'
import { CardGrid } from '../shared/Card/Card.style'
import HeroSection from '../shared/HeroSection/HeroSection'
import MajorActivites from '../shared/MajorActivites/MajorActivites'
import MDmessage from '../shared/MDmessage/MDmessage'
import Testimonials from '../shared/Testimonials/Testimonials'
import c1 from '../asset/c1.png'
import c2 from '../asset/c2.png'
import c3 from '../asset/c3.png'
import c4 from '../asset/c4.png'

const Home: NextPage = () => {
  const isLaptop = useMediaQuery({query:'(min-width:800px)'})
  return (
    <GeneralLayout>
      <HeroSection 
        head={`
        Welcome to Mutual Benefits Insurance Brokers Limited`}
        content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus etiam sagittis, aliquam feugiat cras orci, bibendum odio ultricies. At ullamcorper tincidunt tempor scelerisque ac purus tincidunt. Urna odio sed ullamcorper dignissim tincidunt mattis ut suspendisse. Nisl erat donec egestas dui nam odio habitasse.'}
      />
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
      <br />
      <br />
      <h2 style={{'textAlign':'center'}}>What Our Customers Love About Us</h2>
      <div style={{'display':'flex','justifyContent':'space-between','maxWidth':'1200px','margin':'0 auto','flexWrap':'wrap',
      }}>

        {
          [...new Array(3)].map((d,index)=>(
            <Testimonials key={index}/>
          ))
        }
      </div>

      <br />
      <h2 style={{'textAlign':'center'}}>Major Areas of Activities</h2>
      <br />
      <div style={{'backgroundColor':'#ef96aa','padding':'1.2rem .7rem','display':'flex','flexWrap':'wrap','justifyContent':'center','alignItems':'center'}}>
        {
          [...new Array(8)].map((d,index)=>(
            <MajorActivites key={index}/>
          ))
        }

      </div>
      <div style={{'padding':'1rem','textAlign':'center',}}>
        <h2 style={{'textAlign':'center'}}>Our Clients</h2>
        <br />
        <p style={{'maxWidth':'800px','margin':'0 auto'}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus etiam sagittis, aliquam feugiat cras orci, bibendum odio ultricies. At ullamcorper tincidunt tempor scelerisque ac purus tincidunt. Urna odio sed ullamcorper dignissim tincidunt mattis ut suspendisse. Nisl erat donec egestas dui nam odio habitasse.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus etiam sagittis, aliquam feugiat cras 
        </p>
        <br />
        <div  style={{'maxWidth':'900px','justifyContent':'space-between','margin':'0 auto'}}>
          <img src={c1.src} alt="" width={'20%'}/>
          <img src={c2.src} alt="" width={'20%'}/>
          <img src={c3.src} alt="" width={'20%'}/>
          <img src={c4.src} alt="" width={'20%'}/>
        </div>
      </div>

    </GeneralLayout>

  )
}

export default Home
