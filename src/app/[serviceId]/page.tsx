"use client";
import Image from "next/image";

import { ListGroup } from "../components/ui/ListGroup/ListGroup";
import { useState } from "react";
import { HeroSection } from "../components/ui";

const SERVICES = [
  {
    id: "services",
    name: "Servicios",
    title: "Servicios",
    subtitle: "Servicios",
    content: " ",
  },
  {
    id: "security",
    name: "Seguridad electrónica",
    title: "Seguridad electrónica",
    subtitle: "Seguridad electrónica",
    content:
      "Los sistemas de seguridad electrónica ayudan a prevenir pérdidas, controlan los accesos no autorizados y mejoran la capacidad de reacción para evitar o mitigar las amenazas que puedan surgir.",
  },
  {
    id: "infrastructure",
    name: "Infraestructura",
    title: "Infraestructura",
    subtitle: "Infraestructura",
    content:
      "Proporcionar servicios esenciales de infraestructura y outsourcing de tecnología, redes seguras, almacenamiento de datos confiable, gestión de servidores eficiente, soporte técnico continuo.",
  },
  {
    id: "web",
    name: "Servicio WEB",
    title: "Servicio WEB",
    subtitle: "Servicio WEB",
    content: "",
  },
];

export default function ServiceDetail({ params }) {
  const [selectedId, setSelectedId] = useState(params.serviceId);
  let currentService: any = {};

  if (selectedId) {
    currentService = SERVICES.filter((service) => service.id == selectedId)[0];
  }

  const handleSelectService = (serviceId: string) => {
    console.log("event", serviceId);
    setSelectedId(serviceId);
  };

  return (
    <>
      <HeroSection isVideo={false} imgUrl="/images/about_us2.jpg" />
      {/* <h1> {params.serviceId} - page</h1> */}
      <section className="section" id="services">
        <div className="container">
          <div className="justify-content-center row">
            <div className="text-center mb-5">
              <h5 className="text-primary text-uppercase small-title">
                Servicios
              </h5>
              <h4 className="mb-3">Explora Nuestros Servicios</h4>
              <p>
                Diseñados para satisfacer tus necesidades. Desde desarrollo web
                hasta consultoría en tecnología, nuestro equipo está aquí para
                brindarte soluciones eficientes y personalizadas.
              </p>
            </div>

            <div className="col-lg-4">
              <ListGroup
                items={SERVICES}
                itemId={selectedId}
                onSelect={(id: string) => handleSelectService(id)}
              />
              <div className="mb-5">
                <Image
                  className="img-radius-20 img-fluid"
                  src="/images/services.jpg"
                  alt="Call center image"
                  width={400}
                  height={300}
                  priority
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="mb-5">
                <h4>{currentService.title}</h4>
                <h6>{currentService.subtitle}</h6>

                <p>
                  Los sistemas de seguridad electrónica ayudan a prevenir
                  pérdidas, controlan los accesos no autorizados y mejoran la
                  capacidad de reacción para evitar o mitigar las amenazas que
                  puedan surgir.
                </p>

                <Image
                  className="img-radius-20 img-fluid"
                  src="/images/services2.jpg"
                  alt="Office image"
                  width={400}
                  height={300}
                  sizes="(min-width: 360px) 100vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
