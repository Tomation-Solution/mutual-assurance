import { TestimonialsContainer, TestimonialsContentBox } from './Testimonials.style'
import dummy  from '../../asset/teamImg.jpg'




const Testimonials = ()=>{
  return (
    <TestimonialsContainer>
            
      <img src={dummy.src} alt="" />
      <TestimonialsContentBox>
        <p className='test_content'> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus etiam sagittis, aliquam feugiat cras orci, bibendum 
        </p>

        <br />
        <h3 className='test_author'><strong>Joshua Felix</strong></h3>
      </TestimonialsContentBox>
    </TestimonialsContainer>
  )
}

export default Testimonials