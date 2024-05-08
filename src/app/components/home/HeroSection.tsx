import Image from "next/image";
import { Suspense } from "react";

export const HeroSection = () => {
  return (
    <section id="#home">
      <div className="hero-container">
        <div className="hero-video">
          <Suspense fallback={<p>Loading video...</p>}>
            <video autoPlay muted loop>
              <source src="/video/video_essetec.mp4"></source>
            </video>
          </Suspense>
        </div>
        <div className="justify-content-center row">
          <div className="col-lg-8">
            <div className="hero-content"></div>
            <div className="hero-wrapper text-center mb-4">
              <Image
                src="/images/logo_bl2.png"
                width={330}
                height={380}
                alt="icon"
              />
              <h1 className="hero-title text-white mb-4">
                <span className="font-24">
                  <b>ESPECIALISTAS EN SEGURIDAD ELECTRONICA & TECNOLOGIA</b>
                </span>
              </h1>
              <p className="font-20">
                Convierte tu negocio en una experiencia <br />
                tecnológica sorprendente, única e innovadora.
                {/* Nos comprometemos a ofrecer soluciones completas que ayuden a
                nuestros clientes a prosperar en un entorno digital en constante
                evolución. */}
              </p>
              {/* <div>
                <a href="/about" className="btn btn-primary mt-2 me-2">
                  Acerca de nosotros
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
