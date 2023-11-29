import { ImageContainer } from '../hero/Hero';
import './Contact.css'
import { contact } from '../../assets'
import { MdCall } from 'react-icons/md';
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IconBox } from '../shareCompo/ShareCompo';


const Contact = () => {
    const constactInfo = [
        {
            id: 1,
            icon: MdCall,
            label: 'Call',
            title: 'Call Now',
            num: '021 123 145 14'
        },
        {
            id: 2,
            icon: IoChatbubbleEllipses,
            label: 'Chat',
            title: 'Chat Now',
            num: '021 123 145 14'
        },
        {
            id: 3,
            icon: IoChatbubbleEllipses,
            label: 'Chat',
            title: 'Chat Now',
            num: '021 123 145 14'
        },
        {
            id: 4,
            icon: IoChatbubbleEllipses,
            label: 'Chat',
            title: 'Chat Now',
            num: '021 123 145 14'
        },

    ]
    return (
        <section className="c-wrapper">
            <div className="c-container paddings innerWidth flexCenter">
                <div className="c-left">
                    <div className="flexColStart">
                        <h4 className='orangeText'>Our Contact Us</h4>
                        <h1 className='primaryText'>Easy To Contact Us</h1>
                        <p className="secondaryText">
                            We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better
                        </p>
                    </div>
                    <div className='contact-container'>
                        {
                            constactInfo.map(contact=><ContactBox key={contact.id}  {...contact}/>)
                        }
                    </div>
                </div>
                <div className="c-right">
                    <ImageContainer img={contact} />
                </div>
            </div>
        </section>
    );
};


const ContactBox = ({ icon, label, title, num }) => {
    return (
        <div className='contactBox'>
            <div className="contactInfo">
               <IconBox icon={icon} size={30}/>
                <div>
                    <h1 className='primaryText'>{title}</h1>
                    <p>{num}</p>
                </div>
            </div>
            <button className="c-btn">{label}</button>
        </div>
    )
}


export default Contact;