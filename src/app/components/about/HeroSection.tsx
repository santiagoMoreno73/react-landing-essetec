import Image from "next/image";

export const HeroSection = () => {
  return (
    <section id="#home">
      <div className="hero-container-about">
        <div className="justify-content-center row">
          <div className="col-lg-8">
            <div className="hero-content-about"></div>
            <div className="hero-wrapper-about text-center mb-4">
              <Image
                src="/images/logo_bl.png"
                width={360}
                height={360}
                alt="icon"
              />
              <h1 className="hero-title text-white mb-4">
                Convierte tu negocio en una experiencia tecnológica
                sorprendente, única e innovadora.{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
