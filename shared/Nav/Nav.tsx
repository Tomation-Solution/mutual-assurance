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
            <li><a  
              href="#"
              id='product'
              // aria-expanded={dropdown ? 'true' : 'false'}
              // onClick={(e)=>handleDropDown(e,'product')} 
              // className={dropdown=='product' ? 'active' : ''} 
            >Home</a>
            </li>
            <li><a href="#"
              id='solutions'
              // aria-expanded={dropdown ? 'true' : 'false'}
              // onClick={(e)=>handleDropDown(e,'solutions')} 
              className={dropdown=='solutions' ? 'active' : ''} 
            >About Us </a>
            </li>

            <li>
              <a href="#"
                id='about_us'
                aria-expanded={dropdown ? 'true' : 'false'}
                onClick={e=>handleDropDown(e,'about_us')}
                className={dropdown=='about_us' ? 'active' : ''} 
              >Products
                <img src={dropdown=='about_us'?up.src:down.src} alt="" />
              </a>
              <NavDropDown submenus={[]} dropdown={dropdown=='about_us'} />
            </li>


            <li><a 
              href="/parthers"
              className={router.pathname == '/parthers' ? 'active' : ''} 
            >Resource</a></li>
           
            <li><a 
              className={router.pathname == '/blog' ? 'active' : ''} 
              onClick={e=>{
                e.preventDefault()
                handleRoute('/blog')
              }}
            >Careers</a></li>

            <li><a 
              className={router.pathname == '/contact_page' ? 'active' : ''} 
              onClick={e=>{
                e.preventDefault()
                handleRoute('/contact_page')
              }}
            >FAQs</a></li>
          </NavLinksContainer>


          <NavBtnContainer>
            <Button>Contact us</Button>
          </NavBtnContainer>
        </NavSecondPart>

      </NavContainer>
    </MainNav>
  )
}

export default Nav