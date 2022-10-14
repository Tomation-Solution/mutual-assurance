import Button from '../Button/Button'
import { HeroSecionContent, HeroSectionContainer, HeroSectionHalfPink } from './HeroSection.style'
import human_image from '../../asset/heroimage1.png';
import greenBlob from '../../asset/ep.png';


type Prop ={
  head:string;
  content:string;
  image?:string;
}
const HeroSection = ({head,content,image=human_image.src}:Prop):React.ReactElement=>{


  return (
    <HeroSectionContainer>

      <HeroSectionHalfPink>
        <HeroSecionContent>
          <h1>{head} </h1>
          <p>
            {content}
          </p>
          <Button>Learn More..</Button>
        </HeroSecionContent>
        <img src={image} alt=""  className='human_image'/>
        <img src={greenBlob.src} alt="" className='gren_blob'/>
      </HeroSectionHalfPink>
            
    </HeroSectionContainer>
  )
}

export default HeroSection