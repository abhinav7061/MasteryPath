import React from 'react'
import styles from '../../style';
import {
    Billing,
    CardDeal,
    Business,
    Clients,
    CTA,
    Stats,
    Testimonials,
    Hero,
} from './modules';

const Home = () => {
    return (
        <div>
            <Hero />
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
        </div>
    )
}

export default Home