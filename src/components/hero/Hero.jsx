import './Hero.css'
import { heroImage } from '../../assets'
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from 'react-countup'

const Hero = () => {
    return (
        <section className='hero-wrapper'>
            <dvi className="paddings innerWidth flexCenter hero-container">
                {/* Left Side */}
                <div className="hero-left flexColStart">
                    <div className="hero-title ">
                        <div className='orange-circul' />
                        <h1>Discover <br />
                            Most Suitable<br />
                            Property
                        </h1>
                    </div>
                    <div className="hero-desc flexColStart secondaryText">
                        <span>Find a variety of properties that suit you very easilty</span>
                        <span>Forget all difficulties in finding a residence for you</span>
                    </div>

                    <div className="search-bar">
                        <HiLocationMarker color='var(--blue)' size={25} />
                        <input type="text" />
                        <button className='button'>Search</button>
                    </div>
                    <div className="flexCenter stats">
                        <Counter start={8000} end={9000} duration={4} title={'Premium Product'} />
                        <Counter start={1500} end={2000} duration={4} title={'Happy Customers'} />
                        <Counter start={20} end={28} duration={4} title={'Awards Winning'} />
                    </div>
                </div>
                {/* Right side */}
                <div className="hero-right flexCenter">
                    <ImageContainer img={heroImage}/>
                </div>
            </dvi>
        </section>
    );
};

export default Hero;


const Counter = ({ start, end, duration = 2, title }) => {
    return (
        <div className="flexColCenter stat">
            <span>
                <CountUp start={start} end={end} duration={duration} />
                <span>+</span>
            </span>
            <span className='secondaryText'>{title}</span>
        </div>
    )
}

export const ImageContainer = ({img}) => {
    return (
        <div className="image-container">
            <img src={img} alt="Hero Image" />
        </div>
    )
}