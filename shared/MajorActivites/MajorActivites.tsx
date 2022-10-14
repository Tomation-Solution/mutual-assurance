import dbimg from '../../asset/db.png'
import { MajorActivitesContainer } from './MajorActivites.style'




const MajorActivites=():React.ReactElement=>{



  return (
    <MajorActivitesContainer>
      <div>
        <img src={dbimg.src} alt="" />
      </div>
      <p>Oil and gas</p>
    </MajorActivitesContainer>
  )
}

export default MajorActivites