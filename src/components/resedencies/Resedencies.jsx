import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import './Resedencies.css'
import 'swiper/css'
import { sliders, sliderSettings } from '../../utils/slider'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Resedencies = () => {
    return (
        <section className='r-wrapper'>
            <div className="paddings innerWidth r-container">
                <div className="r-head ">
                    <div>
                        <h4 className='orangeText'>Best Choices</h4>
                        <h1 className='primaryText'>Popular Residencies</h1>
                    </div>
                </div>
                <Swiper {...sliderSettings}>
                    <SliderButton />
                    {
                        sliders.map((card, index) => (
                            <SwiperSlide key={index}>
                                <div className="flexColStart r-card">
                                    <img src={card.image} alt="image" />
                                    <h2 className='secondaryText'><span className='orangeText'>$</span>{card.price}</h2>
                                    <h1 className='primaryText'>{card.name}</h1>
                                    <p className='secondaryText'>{card.detail}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>

            </div>
        </section>
    );
};


const SliderButton = () => {
    const swiper = useSwiper()
    return (
        <div className="r-button">
            <button onClick={() => swiper.slidePrev()}>
                <IoIosArrowBack size={25} />
            </button>
            <button onClick={() => swiper.slideNext()}>
                <IoIosArrowForward size={25} />
            </button>
        </div>
    )
}

export default Resedencies;



