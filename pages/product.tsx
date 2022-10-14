import { NextPage } from 'next';
import GeneralLayout from '../layout/GeneralLayout/GeneralLayout';
import HeroSection from '../shared/HeroSection/HeroSection';
import ListedInfo from '../shared/ListedInfo/ListedInfo';
import product from '../asset/product.png'





const Product:NextPage = ()=>{


  return(
    <GeneralLayout>
      <HeroSection
        image={product.src}
        head={'General Insurance Needs '}
        content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus etiam sagittis, aliquam feugiat cras orci, bibendum odio ultricies. At ullamcorper tincidunt tempor scelerisque ac purus tincidunt. Urna odio sed ullamcorper dignissim tincidunt mattis ut suspendisse. Nisl erat donec egestas dui nam odio habitasse.'}
      />
      <br />

      <ListedInfo variant='var1'/><br />
      <ListedInfo variant='var2'/>
    </GeneralLayout>
  )
}

export default Product