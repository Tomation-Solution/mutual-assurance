import Button from '../Button/Button'
import { HeroSecionContent, HeroSectionContainer, HeroSectionHalfPink } from './HeroSection.style'
import human_image from '../../asset/heroimage1.png';
import greenBlob from '../../asset/ep.png';



const HeroSection = ():React.ReactElement=>{


  return (
    <HeroSectionContainer>

      <HeroSectionHalfPink>
        <HeroSecionContent>
          <h1>Welcome to Mutual Assurance </h1>
          <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus etiam sagittis, aliquam feugiat cras orci, bibendum odio ultricies. At ullamcorper tincidunt tempor scelerisque ac purus tincidunt. Urna odio sed ullamcorper dignissim tincidunt mattis ut suspendisse. Nisl erat donec egestas dui nam odio habitasse.
          </p>
          <Button>Learn More..</Button>
        </HeroSecionContent>
        <img src={human_image.src} alt=""  className='human_image'/>
        <img src={greenBlob.src} alt="" className='gren_blob'/>
      </HeroSectionHalfPink>
            
    </HeroSectionContainer>
  )
}

export default HeroSection