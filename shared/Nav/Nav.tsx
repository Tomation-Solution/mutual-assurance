import Button from '../Button/Button'
import { NavBtnContainer, NavContainer, NavSecondPart,NavLinksContainer, NavLogoContainer, MainNav } from './Nav.style'
import {  FaBars } from 'react-icons/fa'
// import EmetricLogo  from '../../assets/logo.png'
import {IoMdCloseCircle} from 'react-icons/io'
import { useEffect, useState } from 'react'
import NavDropDown from '../NavDropDown/NavDropDown'
import Link from 'next/link';
import { useRouter } from 'next/router';
import down from '../../asset/down.png'
import up from '../../asset/up.png'
const about = [
  {
    title:'About Us',
    url:'/about',
    content:`
    Be on top of your game by relying on our automated HR tasks management system designed to suit your operational needs.
    `
  },
  {
    title:'Our Team',
    url:'/our_team',
    content:`
    Make a switch from running through several spreadsheets in a bid to prepare your payroll.
    `
  },
  {
    title:'Our Clients',
    url:'/our_clients',
    content:`
    Manage task allocation, submission and rating hitch freely.
    `
  },
  {
    title:'Mission & Clients',
    url:'/mission',
    content:`
    Enjoy effortless management of leave planning and administration with a few clicks.
    `
  },
]


const Solutions = [
  {
    title:'Appraisal Data Generation Framework',
    url:'',
    content:`
    designed to ensure that organizations produce better plans for how they might effectively respond to the new and emerging future....more
    `
  },
  {
    title:'Key Performance Indicators Analytics',
    url:'/solutions/3',
    content:`
    Extraction of result based KPIs and the other parameters especially for the none sales related job functions (backend) could become an herculean task if the ri...more
    `
  },
  {
    title:'Corporate Strategy Development',
    url:'/solutions/2',
    content:`
    Designed to ensure that organizations produce better plans for how they might effectively respond to the new and emerging future.,,,more
    `
  },
  {
    title:'Process Documentation',
    url:'/solutions/4',
    content:`
    identify the current state of a process to know how you can improve it..more
    `,
  },
  {
    title:'Performance Management',
    url:'/solutions/5',
    content:`
    while sustaining performance, productivity, and the motivation of employees. In recent years, it has become obvious that traditional performance management is...more
    `,
  },
  {
    title:'Performance Management Software',
    url:'/solutions/6',
    content:`
    E-Metric Suite Software is designed to provide for the need of organizations globally to monitor and manage performance across all tiers as daily operational a...more
    `,
  },
]

const products = [
  {
    title:'HR Administration',
    url:'/products/4',
    content:`
    Be on top of your game by relying on our automated HR tasks management system designed to suit your operational needs.
    `
  },
  {
    title:'Performance Management',
    url:'/products/3',
    content:`
    Make a switch from running through several spreadsheets in a bid to prepare your payroll.
    `
  },
  {
    title:'Strategy Implimentation',
    url:'/products/1',
    content:`
    Manage task allocation, submission and rating hitch freely.
    `
  },
  {
    title:'Appraisal Data Generation',
    url:'/products/2',
    content:`
    Enjoy effortless management of leave planning and administration with a few clicks.
    `
  },
  {
    title:'Task Managment',
    url:'/products/7',
    content:`
    View employee calendars easily for time analysis and utilization.
    `
  },
  {
    title:'Payroll Administration',
    url:'/products/6',
    content:`
    Enjoy effortless management of leave planning and administration with a few clicks.
    `
  },
  {
    title:'Time Sheet',
    url:'/products/5',
    content:`
    View employee calendars easily for time analysis and utilization.
    `
  },
]
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
          <img src={''} alt="" />
        </NavLogoContainer>


        <FaBars onClick={handleShowMobileNav}/>
      

        <NavSecondPart showMobileLink={showMobileNav}>
          <IoMdCloseCircle  onClick={handleShowMobileNav}/>
          <NavLinksContainer>
            <li><a  
              href="#"
              id='product'
              aria-expanded={dropdown ? 'true' : 'false'}
              onClick={(e)=>handleDropDown(e,'product')} 
              className={dropdown=='product' ? 'active' : ''} 
            >Products  <img src={dropdown=='product'?up.src:down.src} alt="" /></a>
            
            <NavDropDown submenus={products} dropdown={dropdown=='product'} />

            </li>
            <li><a href="#"
              id='solutions'
              aria-expanded={dropdown ? 'true' : 'false'}
              onClick={(e)=>handleDropDown(e,'solutions')} 
              className={dropdown=='solutions' ? 'active' : ''} 
            >Solutions <img src={dropdown=='solutions'?up.src:down.src} alt="" /></a>
            <NavDropDown submenus={Solutions} dropdown={dropdown=='solutions'} />
            </li>
            <li><a 
              href="/parthers"
              className={router.pathname == '/parthers' ? 'active' : ''} 
            >Our Partners </a></li>
            <li>
              <a href="#"
                id='about_us'
                aria-expanded={dropdown ? 'true' : 'false'}
                onClick={e=>handleDropDown(e,'about_us')}
                className={dropdown=='about_us' ? 'active' : ''} 
              >About Us
                <img src={dropdown=='about_us'?up.src:down.src} alt="" />
              </a>
              <NavDropDown submenus={about} dropdown={dropdown=='about_us'} />
            </li>
            <li><a 
              className={router.pathname == '/blog' ? 'active' : ''} 
              onClick={e=>{
                e.preventDefault()
                handleRoute('/blog')
              }}
            >Blog</a></li>

            <li><a 
              className={router.pathname == '/contact_page' ? 'active' : ''} 
              onClick={e=>{
                e.preventDefault()
                handleRoute('/contact_page')
              }}
            >contact</a></li>
          </NavLinksContainer>


          <NavBtnContainer>
            <li><a href="https://www.emetricsuiteapp.tech/" target={'_blank'} rel="noreferrer" color='#14A7E5'>Sign In</a></li>
           
            <Button>Request Demo</Button>
          </NavBtnContainer>
        </NavSecondPart>

      </NavContainer>
    </MainNav>
  )
}

export default Nav