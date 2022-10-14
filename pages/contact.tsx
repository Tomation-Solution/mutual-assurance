import { NextPage } from 'next';
import { ContactContainer, ContactContentContainer, ContactPane } from '../styles/contact.style';

import GeneralLayout from '../layout/GeneralLayout/GeneralLayout'
import mapImage from '../asset/mapimg.png'
import emailImage from '../asset/emailImg.png'
import phoneimg from '../asset/phoneimg.png'
import contactImg from '../asset/contactImg.png'
import InputWithLabel from '../shared/InputWithLabel/InputWithLabel';
import Button from '../shared/Button/Button';
import HeroSection from '../shared/HeroSection/HeroSection';

const contact:NextPage=()=>{
  return (
    <GeneralLayout>
      <HeroSection/>
      <br />
      <ContactContainer>
        <ContactContentContainer>

          <ContactPane>
            <img src={mapImage.src} alt="" />
            <h3>Address</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </ContactPane>
          
          <ContactPane>
            <img src={emailImage.src} alt="" />
            <h3>Email</h3>
            <p>
            Lorem ipsum@gmail.com 
            </p>
          </ContactPane>

          <ContactPane>
            <img src={phoneimg.src} alt="" />
            <h3>Phone</h3>
            <p>
            Call customer services on +248567895
            </p>
          </ContactPane>

          <ContactPane>
            <img src={contactImg.src} alt="" />
            <h3>Opening Hours</h3>
            <p>
              <span>
            Monday to Friday; 9am to 6pm
              </span>
              <span>
            Saturday; 9am to 6pm
              </span>
              <span>
            Sunday; 9am to 6pm
              </span>
            </p>
          </ContactPane>
         


          
        </ContactContentContainer>

        <form action="">
          <h2>
            Send Us A Message
          </h2>
          <br />

          <InputWithLabel
            label='Name'/>
          <br />
          <InputWithLabel
            label='Email address'/>
          <br />
          <InputWithLabel
            isTextArea={true}
            label='Message'/>

          <br />
          <Button>
                Submit
          </Button>
          <br /><br /><br />
        </form>
      </ContactContainer>
    </GeneralLayout>

  )
}

export default contact