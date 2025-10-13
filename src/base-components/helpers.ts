const isPair = (index: number): boolean => index % 2 === 0;

const getParticlesConfig = (isDarkTheme: boolean) => ({
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: isDarkTheme ? "#ffffff" : "#374151", // mapped in theme: particle.dark / particle.light
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: isDarkTheme ? "#ffffff" : "#374151",
            },
        },
        opacity: {
            value: isDarkTheme ? 0.3 : 0.8, // Plus visibles en light
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: isDarkTheme ? "#ffffff" : "#374151", // mapped in theme: particle.dark / particle.light
            opacity: isDarkTheme ? 0.2 : 0.5, // Plus visibles en light
            width: 1,
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: false,
                mode: "repulse",
            },
            onclick: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
            },
            repulse: {
                distance: 200,
                duration: 0.6,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
    retina_detect: true,
});

export { isPair, getParticlesConfig };
