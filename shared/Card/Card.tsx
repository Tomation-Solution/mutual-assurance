import Button from '../Button/Button'
import { CardContainer } from './Card.style'
import teamImg from '../../asset/teamImg.jpg'




const Card = ():React.ReactElement=>{

  return (
    <CardContainer>
      <img src={teamImg.src} alt="" />
      <div>
        <h3>General Insurance Needs</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, eget urna ornare etiam nulla at. Mauris tempus pharetra morbi at morbi. rna ornare etiam nulla at. Mauris tempus pharetra morbi at morbi. 

        </p>
        <Button>Learn More</Button>
      </div>
    </CardContainer>
  )
}


export default Card