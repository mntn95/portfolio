"use client";

import * as React from "react";
import { getParticlesConfig } from "@/base-components/helpers";

const ParticlesBackground: React.FC = () => {
    const particlesRef = React.useRef<HTMLDivElement>(null);

    // Fonction pour initialiser les particules
    const initializeParticles = React.useCallback(async () => {
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

            // Nettoyer l'ancienne instance
            const canvas = document
                .getElementById("particles-js")
                ?.querySelector("canvas");
            if (canvas) {
                canvas.remove();
            }

            // Générer la nouvelle config basée sur le thème
            const config = getParticlesConfig();

            // Initialiser les particules avec la nouvelle config
            window.particlesJS("particles-js", config);
        } catch (error) {
            console.error("Error loading particles.js:", error);
        }
    }, []);

    React.useEffect(() => {
        initializeParticles();
    }, [initializeParticles]);

    React.useEffect(() => {
        return () => {
            // Cleanup sécurisé
            try {
                const canvas = document
                    .getElementById("particles-js")
                    ?.querySelector("canvas");
                if (canvas) {
                    canvas.remove();
                }
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
            className="absolute inset-0 w-screen h-screen pointer-events-auto"
            style={{ zIndex: 0, left: "calc(-50vw + 50%)" }}
        />
    );
};

export default ParticlesBackground;
