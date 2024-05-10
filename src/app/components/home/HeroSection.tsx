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
                src="/images/logos/logo_bl2.png"
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
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
