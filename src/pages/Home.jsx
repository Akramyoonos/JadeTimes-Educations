import React from 'react';
import Hero from '../components/homepage/Hero';
import TrustedBy from '../components/homepage/TrustedBy';
import ProgramCategories from '../components/homepage/ProgramCategories';
import Journey from '../components/homepage/Journey';
import ExploreCountries from '../components/homepage/ExploreCountries';
import Scholarships from '../components/homepage/Scholarships';
import StudentGuides from '../components/homepage/StudentGuides';

const Home = () => {
    return (
        <main>
            <Hero />
            <TrustedBy />
            <ProgramCategories />
            <Journey />
            <ExploreCountries />
            <Scholarships />
            <StudentGuides />
        </main>
    );
};

export default Home;
