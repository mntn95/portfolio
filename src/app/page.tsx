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
                <div
                    className="w-full mx-auto max-w-[calc(100vw-600px)] lg:max-w-[calc(100vw-400px)] md:max-w-[calc(100vw-200px)] sm:max-w-[calc(100vw-100px)]"
                    ref={componentsRef}
                >
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Reviews />
                    <Services />
                    <Questions />
                </div>
            </Toggle>
        </>
    );
};

export default Home;
