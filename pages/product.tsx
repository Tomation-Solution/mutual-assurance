import { NextPage } from 'next';
import GeneralLayout from '../layout/GeneralLayout/GeneralLayout';
import HeroSection from '../shared/HeroSection/HeroSection';
import ListedInfo from '../shared/ListedInfo/ListedInfo';







const Product:NextPage = ()=>{


  return(
    <GeneralLayout>
      <HeroSection/>
      <br />

      <ListedInfo variant='var1'/><br />
      <ListedInfo variant='var2'/>
    </GeneralLayout>
  )
}

export default Product