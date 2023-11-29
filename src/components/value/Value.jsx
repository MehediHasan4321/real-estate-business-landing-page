import './Value.css'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion';
import { MdOutlineArrowDropDown } from 'react-icons/md'
import { ImageContainer } from '../hero/Hero';
import { value } from '../../assets'
import data from '../../utils/accordion'
import { useState } from 'react';
import { IconBox } from '../shareCompo/ShareCompo';

const Value = () => {
    
    
    return (
        <section className='w-wrapper'>
            <div className="paddings innerWidth flexCenter v-container">
                <div className='v-left'>
                    <ImageContainer img={value} />
                </div>

                <div className="v-right flexColStart">
                    <div className='flexColStart'>
                        <h4 className='orangeText'>Our Value</h4>
                        <h1 className='primaryText'>Value We Give to You</h1>
                        <p className='secondaryText'>We always ready to help by providijng the best services for you.</p>
                        <p className='secondaryText'>We beleive a good blace to live can make your life better</p>
                    </div>
                    <Accordion allowMultipleExpanded={false}
                        preExpanded={[0]}
                        className='accordion'
                    >
                        {
                            data.map((item, index) => {
                                const [className, setClassName] = useState(null)
                                return (
                                    <AccordionItem
                                        key={index}
                                        uuid={index}
                                        className={`accordionItem ${className}`}
                                    >
                                        <AccordionItemHeading>
                                            <AccordionItemState>
                                                {
                                                    ({ expanded }) => expanded ? setClassName('expanded') : setClassName('collapsed')
                                                }
                                            </AccordionItemState>
                                            <AccordionItemButton className='accor-btn'>
                                                <div className='flexCenter'>
                                                    <IconBox icon={item.icon} />
                                                </div>
                                                <h4 className='primaryText'>{item.heading}</h4>
                                                <div className='flexCenter'>
                                                    <IconBox icon={MdOutlineArrowDropDown}/>
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p className="secondaryText">{item.detail}</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                )
                            })
                        }
                    </Accordion>
                </div>
            </div>
        </section>
    );
};



export default Value;