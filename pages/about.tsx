import { NextPage } from 'next';
import HeroSection from '../shared/HeroSection/HeroSection';
import GeneralLayout from '../layout/GeneralLayout/GeneralLayout'
import { AboutBenefitPane, AboutContainer, AboutInfoContainer, AboutPane, TeamContainer } from '../styles/about.styles';
import mission from '../asset/mission.png'
import vision from '../asset/vision.png'
import owner from '../asset/owner.png'
import owner1 from '../asset/owner1.png'
import owner2 from '../asset/owner2.png'
import owner3 from '../asset/owner3.png'


const About:NextPage =()=>{
  return (
    <GeneralLayout>
      <HeroSection/>
      <br />

      <AboutContainer>
        <AboutInfoContainer>
          
          <AboutPane>
            <h2>Our Mission</h2>
            <img src={vision.src} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus etiam sagittis, aliquam feugiat cras orci, bibendum odio ultricies. At ullamcorper tincidunt tempor scelerisque ac purus tincidunt. Urna odio sed ullamcorper dignissim tincidunt mattis ut suspendisse. </p>
          </AboutPane>
          <br />
          <AboutPane>
            <h2>Our Vission</h2>
            <img src={mission.src} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus etiam sagittis, aliquam feugiat cras orci, bibendum odio ultricies. At ullamcorper tincidunt tempor scelerisque ac purus tincidunt. Urna odio sed ullamcorper dignissim tincidunt mattis ut suspendisse. </p>
          </AboutPane>
        </AboutInfoContainer>


        <AboutBenefitPane>
          <h2>Benefits</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus etiam sagittis, aliquam feugiat cras orci, bibendum odio ultricies. At ullamcorper tincidunt tempor scelerisque ac purus tincidunt. Urna odio sed ullamcorper dignissim tincidunt mattis ut suspendisse. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus etiam sagittis, aliquam feugiat cras orci, bibendum odio ultricies. At ullamcorper tincidunt tempor scelerisque ac purus tincidunt. Urna odio sed ullamcorper dignissim tincidunt mattis ut suspendisse. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus etiam sagittis, aliquam feugiat cras orci, bibendum odio ultricies. At ullamcorper tincidunt tempor scelerisque ac purus tincidunt. Urna odio sed ullamcorper dignissim tincidunt mattis ut suspendisse. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus etiam sagittis, aliquam feugiat cras orci, bibendum odio ultricies. At ullamcorper tincidunt tempor scelerisque ac purus tincidunt. Urna odio sed ullamcorper dignissim tincidunt mattis ut suspendisse. 
          </p>
        </AboutBenefitPane>
      </AboutContainer>


      <br />   

      <TeamContainer>
        <div>
          <img src={owner.src} alt="" />
          <p>Kehinde Oloyede</p>
          <h3>MD/ CEO</h3>
        </div>
        <div>
          <img src={owner1.src} alt="" />
          <p>Kehinde Oloyede</p>
          <h3>MD/ CEO</h3>
        </div>

        <div>
          <img src={owner2.src} alt="" />
          <p>Kehinde Oloyede</p>
          <h3>MD/ CEO</h3>
        </div>

        <div>
          <img src={owner3.src} alt="" />
          <p>Kehinde Oloyede</p>
          <h3>MD/ CEO</h3>
        </div>
      </TeamContainer>
    </GeneralLayout>
  )
}

export default About