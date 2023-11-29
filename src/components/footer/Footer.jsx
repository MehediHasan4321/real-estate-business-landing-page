import './Footer.css'
import { logo2 } from '../../assets'


const Footer = () => {
    return (
        <div className='paddings innerWidth'>
            <div className="f-container">
                <div className='f-left'>
                    <img src={logo2} alt="logo" />
                    <p>
                        Our vision is to make all people<br />
                        the best place to live for them.
                    </p>
                </div>
                <div className="f-right">
                    <h1 className='primaryText'>Information</h1>
                    <p className='secondaryText'>145 New York, FL 5467, USA</p>
                    <div className="links">
                        <span>Property</span>
                        <span>Services</span>
                        <span>Products</span>
                        <span>About Us</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;