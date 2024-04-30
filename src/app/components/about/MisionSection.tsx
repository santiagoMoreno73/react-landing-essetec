import Image from "next/image";

export const MisionSection = () => {
  return (
    <section className="section" id="mision">
      <div className="container">
        <div className="justify-content-center row">
          <div className="col-lg-6">
            <div className="text-center mb-5">
              <Image
                data-aos="fade-down"
                data-aos-duration="2500"
                className="about-img"
                src="/images/mision.jpg"
                alt="logo image"
                width={600}
                height={480}
                priority
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div data-aos="fade-left" data-aos-duration="2500" className="mb-5">
              <h5 className="text-primary text-uppercase small-title">
                Acerca de nosotros
              </h5>
              <h4 className="mb-3">Misión</h4>
              <p>
                Proporcionar soluciones integrales que garanticen la protección
                de propiedades y activos mediante el uso de tecnologías
                innovadoras.
                <br />
                <br />
                Nos especializamos en soluciones de seguridad electrónica y
                tecnológica de primera clase. Además, nos enfocamos en asesorar
                y guiar a empresas y particulares en su camino hacia la
                transformación digital, ofreciendo servicios de consultoría
                tecnológica, diseño de infraestructura tecnológica y desarrollo
                web. Estamos comprometidos con la excelencia, la constante
                innovación y la mejora continua, para ayudar a nuestros clientes
                a prosperar en un mundo cada vez más digital.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
