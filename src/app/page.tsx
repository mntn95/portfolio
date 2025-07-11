"use client";
import * as React from "react";

import {
    About,
    Contact,
    Experiences,
    Hero,
    Loader,
    Questions,
    NavBar,
    Reviews,
    Skills,
    PricingPlans,
    Projects,
    Toggle,
} from "@/components";

const Home = () => {
    const [id, setId] = React.useState<string>("");
    const componentsRef = React.useRef<HTMLDivElement>(null);

    // Set up an IntersectionObserver to track which section is currently visible in the viewport
    React.useEffect(() => {
        // Create an observer that will trigger when elements enter/leave the viewport
        const observer = new IntersectionObserver(
            (entries) => {
                // Process each observed element that changed its intersection status
                entries.forEach((entry: IntersectionObserverEntry) => {
                    // If the element is currently intersecting with the viewport (visible)
                    if (entry.isIntersecting) {
                        // Update the current section ID based on the visible element
                        setId(entry.target.id);
                    }
                });
            },
            // Observer configuration: trigger when 30% of the element is visible
            { threshold: 0.3 },
        );
        const componentsArray = Array.from(
            componentsRef.current?.children || [],
        );
        componentsArray.forEach((component) => {
            observer.observe(component);
        });
    }, []);

    return (
        <>
            <Loader />
            <Toggle>
                <NavBar id={id} />
                <div className="w-min" ref={componentsRef}>
                    <Hero />
                    <About />
                    <Experiences />
                    <Skills />
                    <Reviews />
                    <Projects />
                    <PricingPlans />
                    <Contact />
                    <Questions />
                </div>
            </Toggle>
        </>
    );
};

export default Home;
