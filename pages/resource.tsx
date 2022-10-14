import { NextPage } from 'next';
import GeneralLayout from '../layout/GeneralLayout/GeneralLayout';
import Card from '../shared/Card/Card';
import { CardGrid } from '../shared/Card/Card.style';
import HeroSection from '../shared/HeroSection/HeroSection';
import resourceImg from '../asset/resource.png'


const resource:NextPage =()=>{


  return (
    <GeneralLayout>
      <HeroSection
        image={resourceImg.src}
        head={'Resources'}
        content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus etiam sagittis, aliquam feugiat cras orci, bibendum odio ultricies. At ullamcorper tincidunt tempor scelerisque ac purus tincidunt. Urna odio sed ullamcorper dignissim tincidunt mattis ut suspendisse. Nisl erat donec egestas dui nam odio habitasse.'}
      />
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