import Image from "next/image";
export const VisionSection = () => {
  return (
    <section className="section " id="vision">
      <div className="container">
        <div className="justify-content-center row">
          <div className="col-lg-6">
            <div
              data-aos="fade-right"
              data-aos-duration="2500"
              className="mb-5"
            >
              <h5 className="text-primary text-uppercase small-title">
                Acerca de nosotros
              </h5>
              <h4 className="mb-3">Visión</h4>
              <p>
                Ser reconocidos como líderes en soluciones integrales de
                seguridad electrónica y tecnológica, brindando tranquilidad y
                confianza a nuestros clientes a través de la implementación de
                las tecnologías más innovadoras.
                <br />
                <br />
                Nos comprometemos a asegurar entornos seguros y conectados,
                siendo el aliado estratégico en la transformación digital tanto
                para empresas como particulares. Nos impulsa la excelencia y la
                innovación constante, permitiendo a nuestros clientes prosperar
                y destacarse en un mundo cada vez más exigente.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-center mb-5">
              <Image
                data-aos="fade-down"
                data-aos-duration="2500"
                className="about-img"
                src="/images/vision.jpg"
                alt="logo image"
                width={600}
                height={420}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};