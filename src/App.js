import React from 'react';
import Footer from './Footer';
import Instagram from './Instagram';
import './App.css';
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/templatemo-style.css';
import logo from './assets/img/logo.png'
import img1 from './assets/img/1.jpg'
import popular1 from './assets/img/popular-1.jpg'
import popular2 from './assets/img/popular-2.jpg'
import popular3 from './assets/img/popular-3.jpg'
import special1 from './assets/img/special-1.jpg'
import special2 from './assets/img/special-2.jpg'
import special3 from './assets/img/special-3.jpg'
import special4 from './assets/img/special-4.jpg'
import menuborad from './assets/img/menu-board.png'

function App() {

  return (
    <>
      <div className="tm-top-header">
      <div className="container">
        <div className="row">
          <div className="tm-top-header-inner">
            <div className="tm-logo-container">
              <img src={logo} alt="Logo" className="tm-site-logo"/>
              <h1 className="tm-site-name tm-handwriting-font">Cafe House</h1>
            </div>
            <div className="mobile-menu-icon">
              <i className="fa fa-bars"></i>
            </div>
            <nav className="tm-nav">
              <ul>
                <li><a href="index.html" className="active">Home</a></li>
                <li><a href="today-special.html">Today Special</a></li>
                <li><a href="menu.html">Menu</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </nav>   
          </div>           
        </div>    
      </div>
    </div>
    <section className="tm-welcome-section">
      <div className="container tm-position-relative">      
        <div className="row tm-welcome-content">
          <h2 className="tm-welcome-header-2">THE BEST FOODIE EXPERIENCE</h2>
          <p className="subheading">NOW IN LONDON</p>     
        </div>           
      </div>      
    </section>
    <div className="tm-main-section light-gray-bg">
      <div className="container" id="main">
        <Instagram/>
        <section className="tm-section row">
          <div className="col-lg-9 col-md-9 col-sm-8">
            <h2 className="tm-section-header gold-text tm-handwriting-font">The Best Coffee for you</h2>
            <h2>Cafe House</h2>
            <p className="tm-welcome-description">This is free HTML5 website template from <span className="blue-text">template</span><span className="green-text">mo</span>. Fndimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Ettiam sit amet orci eget eros faucibus tincidunt.</p>
            <a href="#" className="tm-more-button margin-top-30">Read More</a> 
          </div>
          <div className="col-lg-3 col-md-3 col-sm-4 tm-welcome-img-container">
            <div className="inline-block shadow-img">
              <img src={img1} alt="Image1" className="img-circle img-thumbnail"/>  
            </div>              
          </div>            
        </section>          
        <section className="tm-section tm-section-margin-bottom-0 row">
          <div className="col-lg-12 tm-section-header-container">
            <h2 className="tm-section-header gold-text tm-handwriting-font"><img src={logo} alt="Logo" className="tm-site-logo"/> Popular Items</h2>
            <div className="tm-hr-container"><hr className="tm-hr"/></div>
          </div>
          <div className="col-lg-12 tm-popular-items-container">
            <div className="tm-popular-item">
              <img src={popular1} alt="Popular" className="tm-popular-item-img"/>
              <div className="tm-popular-item-description">
                <h3 className="tm-handwriting-font tm-popular-item-title"><span className="tm-handwriting-font bigger-first-letter">a</span>mericano</h3><hr className="tm-popular-item-hr"/>
                <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum.</p>
                <div className="order-now-container">
                  <a href="#" className="order-now-link tm-handwriting-font">Order Now</a>
                </div>
              </div>              
            </div>
            <div className="tm-popular-item">
              <img src={popular2} alt="Popular" className="tm-popular-item-img"/>
              <div className="tm-popular-item-description">
                <h3 className="tm-handwriting-font tm-popular-item-title"><span className="tm-handwriting-font bigger-first-letter">c</span>appuccino</h3><hr className="tm-popular-item-hr"/>
                <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum.</p>
                <div className="order-now-container">
                  <a href="#" className="order-now-link tm-handwriting-font">Order Now</a>
                </div>
              </div>              
            </div>
            <div className="tm-popular-item">
              <img src={popular3} alt="Popular" className="tm-popular-item-img"/>
              <div className="tm-popular-item-description">
                <h3 className="tm-handwriting-font tm-popular-item-title"><span className="tm-handwriting-font bigger-first-letter">m</span>ocha</h3><hr className="tm-popular-item-hr"/>
                <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum.</p>
                <div className="order-now-container">
                  <a href="#" className="order-now-link tm-handwriting-font">Order Now</a>
                </div>
              </div>              
            </div>
          </div>          
        </section>
        <section className="tm-section row">
          <div className="col-lg-12 tm-section-header-container">
            <h2 className="tm-section-header gold-text tm-handwriting-font"><img src={logo} alt="Logo" className="tm-site-logo"/> Today's Special</h2>
            <div className="tm-hr-container"><hr className="tm-hr"/></div>
          </div>          
          <div className="col-lg-12 tm-special-container margin-top-60">
            <div className="tm-special-container-left">
              <div className="tm-special-item">
                <div className="tm-special-img-container">
                  <img src={special1} alt="Special" className="tm-special-img img-responsive"/>  
                  <a href="#">
                    <div className="tm-special-description">
                      <h3 className="tm-special-title">Donec pede justo</h3>
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>  
                    </div>            
                  </a>
                </div>
              </div>
            </div>
            <div className="tm-special-container-right">
              <div>
                <div className="tm-special-item">
                  <div className="tm-special-img-container">
                    <img src={special2} alt="Special" className="img-responsive"/>  
                    <a href="#">
                      <div className="tm-special-description">
                        <h3 className="tm-special-title">Etiam sit amet</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                      </div>
                    </a>
                  </div>
                </div>  
              </div>
              <div className="tm-special-container-lower">
                <div className="tm-special-item">
                  <div className="tm-special-img-container">
                    <img src={special3} alt="Special" className="img-responsive"/>  
                    <a href="#">
                      <div className="tm-special-description">
                        <p>Vivamus elementum</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="tm-special-item">
                  <div className="tm-special-img-container">
                    <img src={special4} alt="Special" className="img-responsive"/>  
                    <a href="#">
                      <div className="tm-special-description">
                        <p>Quisque rutrum.</p>
                      </div>
                    </a>
                  </div>
                </div>  
              </div>              
            </div>
          </div>
        </section>
        <section className="tm-section">
          <div className="row">
            <div className="col-lg-12 tm-section-header-container">
              <h2 className="tm-section-header gold-text tm-handwriting-font"><img src={logo} alt="Logo" className="tm-site-logo"/> Daily Menu</h2> 
              <div className="tm-hr-container"><hr className="tm-hr"/></div> 
            </div>  
          </div>          
          <div className="row">
            <div className="tm-daily-menu-container margin-top-60">
              <div className="col-lg-4 col-md-4">
                <img src={menuborad} alt="Menu board" className="tm-daily-menu-img"/>      
              </div>            
              <div className="col-lg-8 col-md-8">
                <p>Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.</p>
                <ol className="margin-top-30">
                  <li>Tellus eget condimentum rhoncus.</li> 
                  <li>Sem quam semper libero.</li>
                  <li>Sit amet adipiscing sem neque sed ipsum.</li> 
                  <li>Nam quam nunc, blandit vel, luctus pulvinar.</li> 
                  <li>Maecenas nec odio et ante tincidunt tempus.</li> 
                  <li>Donec vitae sapien ut libero ventenatis faucibus.</li> 
                </ol>
                <a href="#" className="tm-more-button margin-top-30">Read More</a>    
              </div>
            </div>
          </div>          
        </section>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default App;
