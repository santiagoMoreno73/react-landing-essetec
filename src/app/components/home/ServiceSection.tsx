"use client";
import { useEffect } from "react";
// icons
import { GiCctvCamera } from "react-icons/gi";
import { IoServer } from "react-icons/io5";
import { MdWeb } from "react-icons/md";

import { CardService } from "./CardService";

const services = [
  {
    title: "Seguridad electrónica",
    description:
      "Los sistemas de seguridad electrónica previenen pérdidas, controlan accesos no autorizados y permiten una respuesta rápida ante amenazas.",
    options: {
      color: "danger",
      icon: <GiCctvCamera className="color-danger" />,
    },
  },
  {
    title: "Infraestructura & Outsorcing de tecnología",
    description:
      "Ofrecemos servicios tecnológicos integrales, desde infraestructura y redes seguras hasta almacenamiento confiable de datos.",
    options: {
      color: "success",
      icon: <IoServer className="color-success" />,
    },
  },
  {
    title: "WEB",
    description:
      "Nuestro servicio web se enorgullece de ofrecer soluciones eficientes y seguras para cubrir todas tus necesidades en línea.",
    options: {
      color: "warning",
      icon: <MdWeb className="color-warning" />,
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
              <h5 className="text-primary text-uppercase small-title">
                Servicios
              </h5>
              <h4 className="mb-3">Explora Nuestros Servicios</h4>
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
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <CardService service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
