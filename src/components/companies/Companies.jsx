import './Companies.css'
import React from 'react';
import {equinix,tower,realty,prologis} from '../../assets'

const Companies = () => {

    const companies = [
        {
            id:4,
            image:prologis,
            label:'Prologis'
        },
        {
            id:1,
            image:tower,
            label:'Tower'
        },
        {
            id:2,
            image:equinix,
            label:'Equinix'
        },
        {
            id:3,
            image:realty,
            label:'Realty'
        },
        
    ]

    return (
        <section className='c-wrapper'>
            <div className="paddings innerWidth flexCenter c-container">
                {
                    companies.map(item=><img className='c-image' key={item.id} src={item.image} alt={item.label}/>)
                }
            </div>
        </section>
    );
};

export default Companies;