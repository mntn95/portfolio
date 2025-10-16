"use client";
import * as React from "react";

import {
    About,
    Hero,
    Loader,
    Questions,
    NavBar,
    Reviews,
    Skills,
    Projects,
    Toggle,
    Services,
    Footer,
} from "@/components";

const Home = () => (
    <>
        <Loader />
        <Toggle>
            <NavBar />
            <div className="grid grid-cols-1 gap-0 w-full mx-auto">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Reviews />
                <Services />
                <Questions />
                <Footer />
            </div>
        </Toggle>
    </>
);

export default Home;
