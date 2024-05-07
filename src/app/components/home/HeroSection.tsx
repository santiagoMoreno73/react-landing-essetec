import Image from "next/image";

export const HeroSection = () => {
  return (
    <section id="#home">
      <div className="hero-container">
        <div className="hero-video">
          <video autoPlay muted loop>
            <source src="/video/video_essetec.mp4"></source>
          </video>
        </div>
        <div className="justify-content-center row">
          <div className="col-lg-8">
            <div className="hero-content"></div>
            <div className="hero-wrapper text-center mb-4">
              <Image
                src="/images/logo_bl.png"
                width={160}
                height={160}
                alt="icon"
              />
              <h1 className="hero-title text-white mb-4">
                {/* Convierte tu negocio en una experiencia tecnológica
                sorprendente, única e innovadora.{" "} */}
                Convierte tu negocio en una experiencia tecnológica
                sorprendente, única e innovadora.{" "}
                {/* <span className="text-primary">ESSETEC</span> */}
                <br />
                {/* <span className="text-white font-16">
                  Especialistas en Seguridad Eletrónica & Tecnología
                </span> */}
              </h1>
              <p className="text-white-50">
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
