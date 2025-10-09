"use client";

import * as React from "react";
import { particlesConfig } from "@/assets/particlesConfig";

const ParticlesBackground: React.FC = () => {
    const particlesRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        // Import dynamique de particles.js côté client uniquement
        const loadParticles = async () => {
            if (typeof window === "undefined") return;

            try {
                // Import dynamique de particles.js
                await import("particles.js");

                // Attendre que particlesJS soit disponible
                const waitForParticlesJS = () => {
                    return new Promise<void>((resolve) => {
                        const checkParticlesJS = () => {
                            if (typeof window.particlesJS === "function") {
                                resolve();
                            } else {
                                setTimeout(checkParticlesJS, 50);
                            }
                        };
                        checkParticlesJS();
                    });
                };

                await waitForParticlesJS();

                // Initialiser les particules avec la méthode correcte
                window.particlesJS("particles-js", particlesConfig);
            } catch (error) {
                console.error("Error loading particles.js:", error);
            }
        };

        loadParticles();

        return () => {
            // Cleanup sécurisé - particles.js n'a pas de méthode destroy native
            try {
                // Nettoyer le canvas si il existe
                const canvas = document
                    .getElementById("particles-js")
                    ?.querySelector("canvas");
                if (canvas) {
                    canvas.remove();
                }
                // Nettoyer le conteneur
                const container = document.getElementById("particles-js");
                if (container) {
                    container.innerHTML = "";
                }
            } catch (error) {
                console.warn("Error during particles cleanup:", error);
            }
        };
    }, []);

    return (
        <div
            ref={particlesRef}
            id="particles-js"
            className="absolute inset-0 w-screen h-full"
            style={{ zIndex: 0, left: "calc(-50vw + 50%)" }}
        />
    );
};

export default ParticlesBackground;
