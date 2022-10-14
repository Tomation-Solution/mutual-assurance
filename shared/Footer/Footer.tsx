import { FooterContainer } from './footer.style'
import {AiOutlineSend} from 'react-icons/ai'




const Footer= ():React.ReactElement=>{


  return (
    <FooterContainer>
      <footer className="footer-section">
        <div className="container">
         
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="index.html" style={{color:'white'}}> Mutual Benefits Insurance Brokers Limited</a>
                  </div>
                  <div className="footer-text">
                    <p>
                                  
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="footer-social-icon">
                    <span>Follow us</span>
                    <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                    <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                    <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Resource</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Faqs</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                  </div>
                  <div className="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button><AiOutlineSend style={{'color':'white'}}/></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
            
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p>Copyright &copy; 2021, All Right Reserved <a href="#">@tomation</a></p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-menu">
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Resource</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Faqs</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </FooterContainer>
  )
}

export default Footer