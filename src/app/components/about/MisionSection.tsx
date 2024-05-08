import Image from "next/image";

export const MisionSection = () => {
  return (
    <div className="justify-content-center row mb-5" id="mision">
      <div className="text-center mb-5">
        <h5 className="text-primary text-uppercase small-title">
          Acerca de nosotros
        </h5>
        <h4 className="mb-3">Conocé quienes somos</h4>
        <p>
          Descubre una amplia gama de servicios diseñados para satisfacer tus
          necesidades. Desde desarrollo web hasta consultoría en tecnología,
          nuestro equipo está aquí para brindarte soluciones eficientes y
          personalizadas.
        </p>
      </div>

      <div className="col-lg-6">
        <div className="text-center mb-5">
          <Image
            className="img-radius img-fluid"
            src="/images/mision.jpg"
            alt="mision image"
            width={0}
            height={0}
            layout="responsive"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="mb-5">
          {/* <h5 className="text-primary text-uppercase small-title">
                Acerca de nosotros
              </h5> */}
          <h4 className="mb-3">Misión</h4>
          <p>
            Proporcionar soluciones integrales que garanticen la protección de
            propiedades y activos mediante el uso de tecnologías innovadoras.
            <br />
            <br />
            Nos especializamos en soluciones de seguridad electrónica y
            tecnológica de primera clase. Además, nos enfocamos en asesorar y
            guiar a empresas y particulares en su camino hacia la transformación
            digital, ofreciendo servicios de consultoría tecnológica, diseño de
            infraestructura tecnológica y desarrollo web. Estamos comprometidos
            con la excelencia, la constante innovación y la mejora continua,
            para ayudar a nuestros clientes a prosperar en un mundo cada vez más
            digital.
          </p>
        </div>
      </div>
    </div>
  );
};
