import { ListedInfoContainer, ListedInfoContainerContent } from './ListedInfo.style'
import re from '../../asset/re.png';
import check from '../../asset/check.png';
import fit from '../../asset/fit.png';
import fit2 from '../../asset/fit2.png';

export type ListedInfoProp = {
    variant:'var1'|'var2'
}
const ListedInfo= ({variant='var1'}:ListedInfoProp):React.ReactElement=>{
  return (
    <ListedInfoContainer>
            
      <ListedInfoContainerContent variant={variant}>
        <img src={variant=='var1'?fit.src:fit2.src} className='listedInfoMainImage' alt="" />
        <div>
          <h3> <img src={re.src} alt="" />Benefits of this Plan</h3>
          <ul>
            <li><img src={check.src} alt="" />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus etiam sagittis, aliquam feugiat cras orci, </li>
            <li><img src={check.src} alt="" />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus etiam sagittis, aliquam feugiat cras orci, </li>
            <li><img src={check.src} alt="" />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus etiam sagittis, aliquam feugiat cras orci, </li>
    
          </ul>
        </div>
      </ListedInfoContainerContent>
    </ListedInfoContainer>
  )
}
export default ListedInfo