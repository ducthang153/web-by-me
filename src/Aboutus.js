import thang from './images/Bui_Duc_Thang.png'
import oanh from './images/Can_Kieu_Oanh.png'
import hoang from './images/Cong_Minh_Hoang.png'
import thuy from './images/Le_Thanh_Thuy.png'
import anh from './images/Nguyen_Kieu_Anh.png'
import dung from './images/Nguyen_Thuy_Dung.png'
import nguyen from './images/Vu_Ngoc_Bao_Nguyen.png'
import './Aboutus.css'

export default function(){
    return(
        <>
            <nav className="navbar">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src="images/logo.jpeg" alt=""/></a>

                    <div className="collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="index.html">HOME</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link " href="aboutus.html">ABOUT US</a>
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
            <div>
                <div className='our'>
                    <h1>Our team</h1> 
                </div>
                
                <div className='aboutteam'>
                    <div className='about1'>
                        <p>Bùi Đức Thắng B19DCQT154</p>
                        <img src={thang} width={180}/> 
                    </div>
                    <div className='about1'>
                        <p>Cấn Kiều Oanh B19DCQT122</p>
                        <img src={oanh} width={180}/> 
                    </div>
                    <div className='about1'>
                        <p>Công Minh Hoàng B19DCQT066</p>
                        <img src={hoang} width={180}/> 
                    </div>
                    <div className='about1'>
                        <p>Lê Thanh Thủy B19DCQT158</p>
                        <img src={thuy} width={180}/> 
                    </div>
                </div>
                <div className='aboutteam'>
                    <div className='about1'>
                        <p>Nguyễn Kiều Anh B19DCQT006</p>
                        <img src={anh} width={180}/> 
                    </div>
                    <div className='about1'>
                        <p>Nguyễn Thùy Dung B19DCQT038</p>
                        <img src={dung} width={180}/> 
                    </div>
                    <div className='about1'>
                        <p>Vũ Ngọc Bảo Nguyên B19DCQT114</p>
                        <img src={nguyen} width={180}/> 
                    </div>
                </div>
            </div>
        </>
    );
}