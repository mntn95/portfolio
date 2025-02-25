import * as React from "react";

import {
    About,
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
    </>
);

export default Home;
