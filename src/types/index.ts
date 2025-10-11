// Types centralisés pour tous les composants
export * from "./questions";
export * from "./projects";
export * from "./pricing";
export * from "./hero";
export * from "./about";
export * from "./contact";
export * from "./experiences";
export * from "./reviews";
export * from "./services";
export * from "./skills";
export * from "./toggle";
export * from "./base-components";

// Déclaration globale pour particles.js
declare global {
    interface Window {
        particlesJS: (id: string, config: unknown) => void;
    }
}
