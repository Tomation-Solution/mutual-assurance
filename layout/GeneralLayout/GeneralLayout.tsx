import Footer from '../../shared/Footer/Footer'
import Nav from '../../shared/Nav/Nav'


type Prop = React.PropsWithChildren<{}>

const GeneralLayout = ({children}:Prop):React.ReactElement=>{



  return (
    <div style={{'maxWidth':'1500px'}}>
      <Nav />
      {children}
      <Footer/>
    </div>
  )
}

export default GeneralLayout