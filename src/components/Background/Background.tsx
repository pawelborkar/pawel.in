import { useCallback } from 'react';
import type { Container, Engine } from 'tsparticles-engine';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Background = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        particles: {
          number: {
            value: 0,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: '#ff0000',
            animation: {
              enable: true,
              speed: 180,
              sync: true,
            },
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000',
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: 'https://cdn.matteobruni.it/images/particles/github.svg',
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 3,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 15,
            random: {
              enable: true,
              minimumValue: 5,
            },
            animation: {
              enable: true,
              speed: 5,
              minimumValue: 5,
              sync: true,
              startValue: 'min',
              destroy: 'max',
            },
          },
          links: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 3.5,
            direction: 'none',
            random: false,
            straight: false,
            outMode: 'destroy',
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detectsOn: 'window',
          events: {
            onhover: {
              enable: true,
              mode: 'trail',
            },
            onclick: {
              enable: true,
              mode: 'push',
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
              opacity: 0.8,
              speed: 3,
            },
            repulse: {
              distance: 200,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
            trail: {
              delay: 0.005,
              quantity: 5,
              pauseOnStop: true,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default Background;
