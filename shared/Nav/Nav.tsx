import Button from '../Button/Button'
import { NavBtnContainer, NavContainer, NavSecondPart,NavLinksContainer, NavLogoContainer, MainNav } from './Nav.style'
import {  FaBars } from 'react-icons/fa'
import Logo  from '../../asset/logo.png'
import {IoMdCloseCircle} from 'react-icons/io'
import { useEffect, useState } from 'react'
import NavDropDown from '../NavDropDown/NavDropDown'
import Link from 'next/link';
import { useRouter } from 'next/router';
import down from '../../asset/down.png'
import up from '../../asset/up.png'


const Nav = ():React.ReactElement=>{
  const router = useRouter();
  const[showMobileNav,setShowMobileNav]= useState(false)
  const handleShowMobileNav=()=> setShowMobileNav(!showMobileNav);
  const [dropdown, setDropdown] = useState<string>();
  const handleDropDown = (e:any,id:string)=>{
    e.preventDefault()
    if(e.target.id == id){
      if(dropdown==id){
        setDropdown('')
      }else{
        setDropdown(id)
      }
    }
  }

  if(router.events){
    router.events.on('routeChangeStart',e=>{
      setDropdown('')
    })
  }

  const handleRoute = (route:string):void=>{
    router.push(route)
  }
  return (
    <MainNav>
      <NavContainer>
        <NavLogoContainer onClick={()=> router.push('/')}>
          <img src={Logo.src} alt=""  />
        </NavLogoContainer>


        <FaBars onClick={handleShowMobileNav}/>
      

        <NavSecondPart showMobileLink={showMobileNav}>
          <IoMdCloseCircle  onClick={handleShowMobileNav}/>
          <NavLinksContainer>
            <li
              className={router.pathname=='/'? 'active' : ''} 
            ><Link  
                href="/"
              // aria-expanded={dropdown ? 'true' : 'false'}
              // onClick={(e)=>handleDropDown(e,'product')} 
              >Home</Link>
            </li>
            <li
              className={router.pathname=='/about' ? 'active' : ''} 
            ><Link 
                href="/about"
              >About Us </Link>
            </li>

            <li>
              <a href="#"
                id='product'
                aria-expanded={dropdown ? 'true' : 'false'}
                onClick={e=>handleDropDown(e,'product')}
                className={dropdown=='product' ? 'active' : ''} 
              >Products
                <img src={dropdown=='product'?up.src:down.src} alt="" />
              </a>
              <NavDropDown submenus={[]} dropdown={dropdown=='product'} />
            </li>


            <li
              className={router.pathname == '/resource' ? 'active' : ''} 
            ><Link
                href="/resource"
              >Resource</Link></li>
           
            <li
            
              className={router.pathname == '/career' ? 'active' : ''} 
            ><Link
                href={'/career'}
             
              >Careers</Link></li>

            <li
              className={router.pathname == '/faq' ? 'active' : ''} 
            
            ><Link
                href={'/faq'}
            
              >FAQs</Link></li>
          </NavLinksContainer>


          <NavBtnContainer>
            <Button onClick={(e)=>handleRoute('/contact')}>Contact us</Button>
          </NavBtnContainer>
        </NavSecondPart>

      </NavContainer>
    </MainNav>
  )
}

export default Nav