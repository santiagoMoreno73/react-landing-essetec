// icons
import { AiFillMacCommand } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

const services = [
  {
    title: "Seguridad electrónica",
    description:
      "Los sistemas de seguridad electrónica previenen pérdidas, controlan accesos no autorizados y permiten una respuesta rápida ante amenazas.",
  },
  {
    title: "Infraestructura",
    description:
      "Ofrecemos servicios tecnológicos integrales, desde infraestructura y redes seguras hasta almacenamiento confiable de datos, gestión eficiente de servidores y soporte técnico continuo.",
  },
  {
    title: "WEB",
    description:
      "Nuestro servicio web ofrece soluciones eficientes y seguras para tus necesidades en línea.",
  },
];

export const ServiceSection = () => {
  return (
    <section className="section bg-light" id="services">
      <div className="container">
        <div className="justify-content-center row">
          <div className="col-lg-8">
            <div className="text-center mb-5">
              <h5 className="text-primary text-uppercase small-title">
                Servicios
              </h5>
              <h4 className="mb-3">Services We Provide</h4>
              <p>
                It will be as simple as occidental in fact, it will be
                Occidental.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                  <div className="text-center">
                    <a className="btn btn-success" href="/">
                      View more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
