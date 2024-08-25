import React from 'react'
import styles from '../../style';
import {
    Management,
    Deal,
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
            <Management />
            <Deal />
            <Testimonials />
            <Clients />
            <CTA />
        </div>
    )
}

export default Home