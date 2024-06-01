"use client";
// icons
import { GiCctvCamera } from "react-icons/gi";
import { IoServer } from "react-icons/io5";
import { MdWeb } from "react-icons/md";

import { CardService } from "./CardService";

const SERVICES = [
  {
    title: "Seguridad electrónica",
    description:
      "Los sistemas de seguridad electrónica previenen pérdidas, controlan accesos no autorizados y permiten una respuesta rápida ante amenazas.",
    options: {
      color: "security",
      icon: <GiCctvCamera className="color-security" />,
      href: "/security",
    },
  },
  {
    title: "Infraestructura & Outsorcing de tecnología",
    description:
      "Ofrecemos servicios tecnológicos integrales, desde infraestructura y redes seguras hasta almacenamiento confiable de datos.",
    options: {
      color: "it",
      icon: <IoServer className="color-it" />,
      href: "/infrastructure",
    },
  },
  {
    title: "Desarrollo web",
    description:
      "Nuestro servicio web se enorgullece de ofrecer soluciones eficientes y seguras para cubrir todas tus necesidades en línea.",
    options: {
      color: "web",
      icon: <MdWeb className="color-web" />,
      href: "/web",
    },
  },
];

export const ServiceSection = () => {
  return (
    <section className="section bg-custom-light" id="services">
      <div className="container">
        <div className="justify-content-center row">
          <div className="col-lg-8">
            <div className="text-center mb-5">
              <h3 className="text-primary text-uppercase">Servicios</h3>
              {/* <h4 className="mb-3">Explora Nuestros Servicios</h4> */}
              <p>
                Descubre una amplia gama de servicios diseñados para satisfacer
                tus necesidades. Desde desarrollo web hasta consultoría en
                tecnología, nuestro equipo está aquí para brindarte soluciones
                eficientes y personalizadas.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {SERVICES.map(({ title, description, options }, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <CardService
                title={title}
                description={description}
                options={options}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
