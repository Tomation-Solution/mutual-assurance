import GeneralLayout from '../layout/GeneralLayout/GeneralLayout'
import HeroSection from '../shared/HeroSection/HeroSection'
import { CareerContainer, CareerPane } from '../styles/career.styles'
import teamImg from '../asset/teamImg.jpg'
import Button from '../shared/Button/Button'
import careerImg from '../asset/careerImg.png'





const Career = ():React.ReactElement=>{


  return (
    <GeneralLayout>
      <HeroSection
        image={careerImg.src}
        head='Careers'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus etiam sagittis, aliquam feugiat cras orci, bibendum odio ultricies. At ullamcorper tincidunt tempor scelerisque ac purus tincidunt. Urna odio sed ullamcorper dignissim tincidunt mattis ut suspendisse. Nisl erat donec egestas dui nam odio habitasse.'
      />    
            

      <CareerContainer>

        <CareerPane>

          <div>
            <h3>Broker Agent</h3>
            <p><strong>Location:{' '}</strong>Lagos</p>
            <p><strong>Type:{' '}</strong>Full-time</p>
            <p><strong>Qualification:{' '}</strong>B.Sc</p>
            <p><strong>Years of Experience::{' '}</strong>2-3 years</p>
            <p className='jobs_de'><strong>Job Desciption:{' '}</strong>Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat quasi facilis consequuntur nobis exercitationem sed explicabo cum tempore blanditiis, voluptate corrupti. Veniam vel nemo libero dolores dolor unde sint.</p>
            <Button>View Details</Button>
          </div>
          <img src={teamImg.src} alt="" />
        </CareerPane>

        <CareerPane>

          <div>
            <h3>Broker Agent</h3>
            <p><strong>Location:{' '}</strong>Lagos</p>
            <p><strong>Type:{' '}</strong>Full-time</p>
            <p><strong>Qualification:{' '}</strong>B.Sc</p>
            <p><strong>Years of Experience::{' '}</strong>2-3 years</p>
            <p className='jobs_de'><strong>Job Desciption:{' '}</strong>Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat quasi facilis consequuntur nobis exercitationem sed explicabo cum tempore blanditiis, voluptate corrupti. Veniam vel nemo libero dolores dolor unde sint.</p>
            <Button>View Details</Button>
          </div>
          <img src={teamImg.src} alt="" />
        </CareerPane>

        <CareerPane>

          <div>
            <h3>Broker Agent</h3>
            <p><strong>Location:{' '}</strong>Lagos</p>
            <p><strong>Type:{' '}</strong>Full-time</p>
            <p><strong>Qualification:{' '}</strong>B.Sc</p>
            <p><strong>Years of Experience::{' '}</strong>2-3 years</p>
            <p className='jobs_de'><strong>Job Desciption:{' '}</strong>Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat quasi facilis consequuntur nobis exercitationem sed explicabo cum tempore blanditiis, voluptate corrupti. Veniam vel nemo libero dolores dolor unde sint.</p>
            <Button>View Details</Button>
          </div>
          <img src={teamImg.src} alt="" />
        </CareerPane>


        <CareerPane>

          <div>
            <h3>Broker Agent</h3>
            <p><strong>Location:{' '}</strong>Lagos</p>
            <p><strong>Type:{' '}</strong>Full-time</p>
            <p><strong>Qualification:{' '}</strong>B.Sc</p>
            <p><strong>Years of Experience::{' '}</strong>2-3 years</p>
            <p className='jobs_de'><strong>Job Desciption:{' '}</strong>Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat quasi facilis consequuntur nobis exercitationem sed explicabo cum tempore blanditiis, voluptate corrupti. Veniam vel nemo libero dolores dolor unde sint.</p>
            <Button>View Details</Button>
          </div>
          <img src={teamImg.src} alt="" />
        </CareerPane>

      </CareerContainer>
    </GeneralLayout>
  )
}

export default Career