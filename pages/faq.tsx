import { NextPage } from 'next';
import Acc from '../shared/Accordion/Accordion'
import GeneralLayout from '../layout/GeneralLayout/GeneralLayout'
import HeroSection from '../shared/HeroSection/HeroSection';
import Vector from '../asset/Vector 6.png'


const faq:NextPage=()=>{

  return (
    <GeneralLayout>
      <HeroSection
        image={Vector.src}
        head={'Frequently Asked Questions'}
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus etiam sagittis, aliquam feugiat cras orci, bibendum odio ultricies. At ullamcorper tincidunt tempor scelerisque ac purus tincidunt. Urna odio sed ullamcorper dignissim tincidunt mattis ut suspendisse. Nisl erat donec egestas dui nam odio habitasse.'
      />
      <div style={{'padding':'1rem 1.3rem','maxWidth':'900px','margin':'0 auto'}}>
        <h2 style={{'color':'#DC214C'}}>
        At posuere tristique in?
        </h2>

        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ultrices et lectus curabitur. Eu faucibus pharetra turpis urna, enim cras phasellus. Et ridiculus leo, blandit at diam eu. Amet odio proin aliquet ut molestie quis fermentum, posuere diam. Turpis ut suspendisse mauris nunc, sem leo vestibulum. Fermentum tempor a nibh lectus nisi, parturient blandit libero enim.odio proin aliquet ut molestie quis fermentum, posuere diam. Turpis ut suspendisse mauris nunc, sem leo vestibulum. Fermentum tempor a nibh lectus nisi, parturient blandit liber Turpis ut suspendisse mauris nunc, sem leo vestibulum. Fermentum tempor a nibh lectus nisi, fermentum, posuere diam. Turpis ut suspendisse mauris nunc, sem leo vestibulum. Fermentum tempor a nibh lectus nisi, parturient blandit liber ermentum, posuere diam. Turpis ut suspendisse mauris nunc, sem leo vestibulum. Fermentum tempor a nibh lectus nisi, parturient blandit liber ermentum, posuere diam. Turpis ut suspendisse mauris nunc, sem leo vestibulum. Fermentum tempor a nibh lectus nisi, parturient blandit liber
        </p>
        <Acc head='Lorem ipsum dolor sit amet, consec  sit amet, consec?' content='Lorem ipsum dolor sit amet, consec  sit amet, consec?'/> 
      
        <br /> <Acc head='Lorem ipsum dolor sit amet, consec  sit amet, consec?' content='Lorem ipsum dolor sit amet, consec  sit amet, consec?'/> 
      </div>
    </GeneralLayout>
  )
}
export default faq