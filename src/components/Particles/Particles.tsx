import { useCallback } from 'react'
import RootParticles from 'react-tsparticles'
import type { Engine } from 'tsparticles-engine'
import { loadFull } from 'tsparticles'

const Particles = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  return (
    <RootParticles
      id='particles'
      options={{
        background: {
          color: 'transparent',
          image: '',
          position: '50% 50%',
          repeat: 'no-repeat',
          size: 'cover',
        },
        fullScreen: {
          enable: true,
          zIndex: 1,
        },
        particles: {
          number: {
            value: 180,
            density: {
              enable: true,
            },
          },
          color: {
            value: '#f6f6f8',
          },
          shadow: {
            enable: true,
            color: '#00B37E',
            blur: 2,
            offset: {
              x: 1,
              y: 1,
            },
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 5,
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
            color: '#f6f6f8',
            opacity: 0.4,
            width: 1,
            shadow: {
              enable: true,
              blur: 5,
              color: '#00B37E',
            },
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: false,
              mode: 'repulse',
              parallax: {
                enable: false,
                force: 60,
                smooth: 10,
              },
            },
            onclick: {
              enable: false,
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
              duration: 1,
              opacity: 0.8,
              speed: 2,
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
          },
        },
        fpsLimit: 120,
        retina_detect: true,
      }}
      init={particlesInit}
    />
  )
}

export default Particles
