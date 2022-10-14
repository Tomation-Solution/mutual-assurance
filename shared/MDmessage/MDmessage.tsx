import { MDmessageContainer } from './MDmessage.style'
import mdImage from '../../asset/owner.png'




const MDmessage = ():React.ReactElement=>{


  return (
    <MDmessageContainer>
      <div className='MDmessageContainer_sec_div'>
            
        <img src={mdImage.src} alt="" />

        <div >
          <h2><strong>Message from the MD to you</strong></h2>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus etiam sagittis, aliquam feugiat cras orci, bibendum odio ultricies. At ullamcorper tincidunt tempor scelerisque ac purus tincidunt. Urna odio sed ullamcorper dignissim tincidunt mattis ut suspendisse. Nisl erat donec egestas dui nam odio habitasse.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus etiam sagittis, aliquam feugiat cras orci, bibendum odio ultricies. At ullamcorper tincidunt tempor scelerisque ac purus tincidunt. Urna odio sed ullamcorper dignissim tincidunt mattis ut suspendisse. Nisl erat donec egestas dui nam odio habitasse.
          </p>
        </div>
      </div>

      <br />

    </MDmessageContainer>
  )
}

export default MDmessage