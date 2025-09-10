gsap.registerPlugin(ScrollTrigger);


gsap.fromTo(".header",
{
  y: -100,
}, {
  y: 0,
  duration: 1,
})

gsap.fromTo('.background', 
  { 
    y: 0,
    scale: 1      
  }, 
  { 
    y: 100,
    scale: 1.5,   // vai aumentar o zoom até 150%
    ease: 'linear',
    scrollTrigger: {
      trigger: '.background',
      start: 'top top',   // quando o fundo entra na tela
      end: '+=800',       // até 800px de scroll
      scrub: true,        // faz acompanhar o scroll
    }
  }
);
gsap.fromTo('.logo__hollow', {
    y: 0,
},
    {
        y: 1000,
        ease: 'linear',
        scrollTrigger: {
            trigger: '.logo__hollow', 
            start: '0',
            end: '+800',
            scrub: true,
        }
    }
);

gsap.fromTo('.hornet', 
  { 
    y: 0,
    x: 0      
  }, 
  { 
    y: 10000,
    x: 10000,   // vai aumentar o zoom até 150%
    ease: 'linear',
    scrollTrigger: {
      trigger: '.hornet',
      start: 'top top',   // quando o fundo entra na tela
      end: '+=800',       // até 800px de scroll
      scrub: true,        // faz acompanhar o scroll
    }
  }
);

gsap.fromTo('.borboletas', {
  y: 0,
},
  {
      y: -1000,
      ease: 'linear',
      scrollTrigger: {
          trigger: '.borboletas', 
          start: '0',
          end: '+800',
          scrub: true,
      }
  }
);

gsap.fromTo('.background1', {
  y: 0,
},
  {
      y: 500,
      ease: 'linear',
      scrollTrigger: {
          trigger: '.background1', 
          start: '0',
          end: '+800',
          scrub: true,
      }
  }
);


gsap.registerPlugin(ScrollTrigger);

const initScenes = () => {
  const scenes = gsap.utils.toArray('.scene');

  scenes.forEach(scene => {
    const title = scene.querySelector('.title__region');
    const text = scene.querySelector('.text__region');

    // Fade da cena
    gsap.fromTo(scene,
      { opacity: 0.25 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: scene,
          start: 'top 80%',
          end: 'top 40%',
          scrub: true
        }
      }
    );

    const calcXOffset = (side) => {
      // 50% da largura da cena
      return side === 'left' ? '-50%' : '50%';
    };

    const calcYOffset = () => window.innerWidth < 768 ? -20 : -30;

    // Título
    if(title){
      gsap.fromTo(title,
        { x: calcXOffset('left'), y: calcYOffset(), opacity: 0 },
        {
          x: 0, y: 0, opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: scene,
            start: 'top 85%',
            end: 'top 50%',
            scrub: true
          }
        }
      );
    }

    // Texto
    if(text){
      gsap.fromTo(text,
        { x: calcXOffset('right'), y: calcYOffset(), opacity: 0 },
        {
          x: 0, y: 0, opacity: 1,
          ease: 'power2.out',
          delay: 0.1,
          scrollTrigger: {
            trigger: scene,
            start: 'top 85%',
            end: 'top 50%',
            scrub: true
          }
        }
      );
    }
  });
}

// Inicializa ao carregar
window.addEventListener('load', () => {
  initScenes();
  ScrollTrigger.refresh();
});

// Atualiza ao redimensionar com pequeno delay para garantir estabilidade
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    ScrollTrigger.getAll().forEach(t => t.kill());
    initScenes();
    ScrollTrigger.refresh();
  }, 150); // 150ms de delay para estabilizar viewport
});

const isMobile = () => window.innerWidth <= 930

document.querySelectorAll(".merchant").forEach((merchant) => {
  const elems = merchant.querySelectorAll(".character, .name__character")
  const text = merchant.querySelector(".text__character")

  // imagem + nome
  gsap.fromTo(
    elems,
    {
      x: isMobile()
        ? 0
        : merchant.classList.contains("left__characters")
        ? -150
        : 150,
      y: isMobile() ? 100 : 0,
      opacity: 0
    },
    {
      x: 0,
      y: 0,
      opacity: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: merchant,
        start: "top 90%",
        end: "top 40%",
        scrub: true
      }
    }
  )

  // texto
  gsap.fromTo(
    text,
    {
      y: 100,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: merchant,
        start: "top 85%",
        end: "top 30%",
        scrub: true
      }
    }
  )
})
