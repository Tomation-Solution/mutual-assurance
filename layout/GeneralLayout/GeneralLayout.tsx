import Nav from '../../shared/Nav/Nav'



type Prop = React.PropsWithChildren<{}>

const GeneralLayout = ({children}:Prop):React.ReactElement=>{



  return (
    <div>
      <Nav />
      <br />
      {children}
    </div>
  )
}

export default GeneralLayout