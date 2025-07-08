import * as React from "react";

import {
    About,
    Contact,
    Experiences,
    Hero,
    Questions,
    Reviews,
    Skills,
    PricingPlans,
    Projects,
} from "@/components";

const Home = () => (
    <>
        <Hero />
        <About />
        <Experiences />
        <Skills />
        <Reviews />
        <Projects />
        <PricingPlans />
        <Contact />
        <Questions />
    </>
);

export default Home;
