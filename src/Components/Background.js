import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadImageShape } from "tsparticles-shape-image";
 import {as} from '../assets/figure.png'
export default function Background() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
 
        await loadFull(engine);
        await loadImageShape(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (
        <Particles
        className=" absolute z-10"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#000000"
            }
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push"
              },
              onHover: {
                enable: true,
                mode: "repulse"
              },
              resize: true
            },
            modes: {
              push: {
                quantity: 4
              },
              repulse: {
                distance: 200,
                duration: 0.4
              }
            }
          },
          particles: {
            color: {
              value: "#ffffff"
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce"
              },
              random: false,
              speed: 4,
              straight: false
            },
            rotate: {
              value: 0,
              random: true,
              direction: "clockwise",
              animation: {
                enable: true,
                speed: 8,
                sync: false
              }
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value:  40
            },
            opacity: {
              value: 1
            },
            shape: {
              type: "image",
              image: {
                src:
                  "https://i.postimg.cc/WpyMTkLx/2-3.png"
              }
            },
            size: {
              value: { min: 4, max: 8 }
            }
          },
          detectRetina: true
        }}
      />
    )
}