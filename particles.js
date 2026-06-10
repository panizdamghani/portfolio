particlesJS("particles-js", {
    particles: {
        number: { value: 80 },
        color: { value: "#f0abfc" },
        shape: { type: "circle" },
        opacity: { value: 0.4 },
        size: { value: 2 },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#f0abfc",
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 1.5
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            }
        }
    }
});