import './App.css'
import logo from './images/logo.jpeg'
import center from './images/center.jpeg'
import bottom from './images/bottom.jpeg'

export default function(){
    return(
        <>
            <nav className="navbar">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src={logo} alt=""/></a>

                    <div className="collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">HOME</a>
                        </li>
                            <li className="nav-item ">
                                <a className="nav-link " href="/aboutus">ABOUT US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">PRODUCT</a>
                            </li>
                        
                            <li className="nav-item">
                                <a className="nav-link" href="#">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-item" id="cart">
                        <a className="nav-link" href="#">CART</a>
                    </div>
                    
                </div>
                <div className="" id="o">
                    <h1 className ='center-o'>O</h1>
                </div>
            </nav>

            <div className="center">
                <img src={center} alt="" srcset=""/>
            </div>

            <div className="bottom">
                <div className="item">
                    <h2>Absolutely unique body of work</h2>
                </div>
                <div className="item">
                    <p>We creating connections between painting and scupture in urban 
                    settings our artists adopt a throughly innovative approach in artistic 
                    fusions in balanced combination of classNameial and temporary</p>
                </div>
                <div className="item">
                    <div className="img">
                        <img src={bottom} alt=""/>
                    </div>
                </div>
            </div>
        </>
    );
}