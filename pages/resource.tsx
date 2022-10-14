import { NextPage } from 'next';
import GeneralLayout from '../layout/GeneralLayout/GeneralLayout';
import Card from '../shared/Card/Card';
import { CardGrid } from '../shared/Card/Card.style';
import HeroSection from '../shared/HeroSection/HeroSection';




const resource:NextPage =()=>{


  return (
    <GeneralLayout>
      <HeroSection/>
      <br />
      <div style={{'padding':'1rem'}}>
        <h2 style={{'textAlign':'center'}}>Insights</h2>
        <br />

        <CardGrid>
          {
            [...new Array(4)].map((d,index)=>(
              <Card key={index}/>
            ))
          }

        </CardGrid>
      </div>

      <br />
      <br />


      <div style={{'padding':'1rem'}}>
        <h2 style={{'textAlign':'center'}}>News</h2>
        <br />

        <CardGrid>
          {
            [...new Array(4)].map((d,index)=>(
              <Card key={index}/>
            ))
          }

        </CardGrid>
      </div>

    </GeneralLayout>
  )
}

export default resource