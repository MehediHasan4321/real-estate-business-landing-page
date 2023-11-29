import { logo } from '../../assets'
import './Header.css'

const Header = () => {
    return (
        <section className="h-wrapper">
            <div className="paddings innerWidth h-container  ">
                <img src={logo} alt="logo" width={100} />
                <div className="h-menu flexCenter">
                    <a href="#">Residencides</a>
                    <a href="#">Our Value</a>
                    <a href="#">Contac Us</a>
                    <a href="#">Get Started</a>
                    <button className='button'>
                        <a href="#">Contact</a>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Header;