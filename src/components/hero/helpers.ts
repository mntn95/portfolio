import { particlesConfig } from "@/assets/particlesConfig";

export const initializeParticles = (containerId: string): void => {
    if (typeof window !== "undefined" && window.particlesJS) {
        window.particlesJS(containerId, particlesConfig);
        console.log("Particles.js config loaded successfully");
    }
};

export const destroyParticles = (): void => {
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

export const isParticlesSupported = (): boolean => {
    return typeof window !== "undefined" && !!window.particlesJS;
};
