'use client'
import { useEffect } from 'react';
import {
  About,
  Header,
  Portfolio,
  Differentials,
  Contact,
  Footer,
} from '@/src/components';

import AOS from 'aos';
import 'aos/dist/aos.css';

export const Landing = () => {
  useEffect(() => {
    // Inicializa a biblioteca AOS com configurações personalizadas
    AOS.init({
      duration: 800, // duração das animações em ms
      easing: "ease-out-cubic", // tipo de easing
      once: false, // se as animações devem ocorrer apenas uma vez
      mirror: true, // se os elementos devem animar ao sair da viewport
      anchorPlacement: "top-bottom", // define a posição do elemento em relação à viewport
    });

    // Atualiza as animações quando a janela é redimensionada
    window.addEventListener("resize", () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener("resize", () => {
        AOS.refresh();
      });
    };
  }, []);

  return (
    <div className="App cyberpunk-grid">
      <Header />
      {/*<About />
      <Portfolio />
      <Differentials />
      <Contact />
      <Footer />*/}
    </div>
  );
};