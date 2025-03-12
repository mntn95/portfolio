import * as React from "react";

import {
    About,
    Contact,
    Experiences,
    Hero,
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
    </>
);

export default Home;
