"use client";
import Image from "next/image";

import { useState } from "react";
import { ListGroup } from "../components/ui/ListGroup/ListGroup";
import { HeroSection } from "../components/ui";
import { ServiceDetail } from "../components/service/ServiceDetail";

const SERVICES = [
  {
    id: "services",
    name: "Servicios",
    title: "Servicios",
    subtitle: "",
    paragraph:
      "Los sistemas de seguridad electrónica ayudan a prevenir pérdidas, controlan los accesos no autorizados y mejoran la capacidad de reacción para evitar o mitigar las amenazas que puedan surgir.",
    options: [
      {
        id: 0,
        paragraph: "any",
        media: [
          {
            id: 0,
            src: "/images/services/analoga.png",
            alt: "xxxx",
          },
        ],
      },
      {
        id: 1,
        paragraph: "any",
        media: [
          {
            id: 0,
            src: "/images/services/analoga.png",
            alt: "xxxx",
          },
        ],
      },
    ],
  },
  {
    id: "security",
    name: "Seguridad electrónica",
    title: "Seguridad electrónica ",
    subtitle: "",
    paragraph:
      "Los sistemas de seguridad electrónica ayudan a prevenir pérdidas, controlan los accesos no autorizados y mejoran la capacidad de reacción para evitar o mitigar las amenazas que puedan surgir.",
    options: [
      {
        id: 0,
        paragraph:
          "CCTV: instalación de equipos conectados genera un circuito de imágenes que solo pueden ser visualizadas por un grupo determinado de personas. Estas se personalizan para adaptarse a las necesidades específicas de cada cliente, ya sea en seguridad, vigilancia o mejora de servicios.",
        media: [
          {
            id: 0,
            title: "Análogas",
            description:
              "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500 ",
            src: "/images/services/analoga.png",
            alt: "camara analoga",
          },
          {
            id: 1,
            title: "IP",
            description: "",
            src: "/images/services/ip.png",
            alt: "ip",
          },
          {
            id: 2,
            title: "Inalámbricas",
            description: "",
            src: "/images/services/analoga.png",
            alt: "camara inalambrica",
          },
          {
            id: 3,
            title: "DVR / NVR",
            description: "",
            src: "/images/services/ip.png",
            alt: "dvr",
          },
        ],
      },
      {
        id: 1,
        paragraph:
          "BIOMETRICOS: Sistemas de control de acceso, registros de control de ingreso personal o personal autorizado:",
        media: [
          {
            id: 0,
            src: "/images/services/biometrico.jpg",
            alt: "biometrico",
          },
        ],
      },
    ],
  },
  {
    id: "infrastructure",
    name: "Infraestructura & Outsorcing de tecnología",
    title: "Infraestructura & Outsorcing de tecnología",
    subtitle: "",
    paragraph:
      "Proporcionar servicios esenciales de infraestructura y outsourcing de tecnología, redes seguras, almacenamiento de datos confiable, gestión de servidores eficiente, soporte técnico continuo.",
    options: [
      {
        id: 0,
        paragraph: "Redes y comunicaciones",
        media: [
          {
            id: 0,
            src: "/images/services/analoga.png",
            alt: "xxxx",
          },
        ],
      },
      {
        id: 1,
        paragraph:
          "Virtualización:  Asesoría e implementación en servicios de visualización de tus servidores y micro servicios",
        media: [
          {
            id: 0,
            src: "/images/services/analoga.png",
            alt: "xxxx",
          },
        ],
      },
    ],
  },
  {
    id: "web",
    name: "Servicio WEB",
    title: "Servicio WEB",
    subtitle: "",
    paragraph: "",
    options: [
      {
        id: 0,
        paragraph: "",
        media: [
          {
            id: 0,
            src: "/images/services/analoga.png",
            alt: "xxxx",
          },
        ],
      },
      {
        id: 1,
        paragraph: "",
        media: [
          {
            id: 0,
            src: "/images/services/analoga.png",
            alt: "xxxx",
          },
        ],
      },
    ],
  },
];

export default function ServicePage({ params }) {
  const [selectedId, setSelectedId] = useState(params.serviceId);
  let currentService: any = {};

  if (selectedId) {
    currentService = SERVICES.filter((service) => service.id == selectedId)[0];
  }

  const handleSelectService = (serviceId: string) => {
    setSelectedId(serviceId);
  };

  return (
    <>
      <HeroSection
        isVideo={false}
        imgUrl="https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/about_us2.jpg?alt=media&token=6c750ab4-b744-4890-a06d-577c75584ecc"
      />
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
              <div className="mb-3">
                <Image
                  className="img-radius-20 img-fluid"
                  src="https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/services.jpg?alt=media&token=4d65133d-d89f-4bb2-81ec-7befefe07552"
                  alt="Call center image"
                  width={400}
                  height={300}
                  priority
                />
              </div>
              <a className="btn btn-primary w-100" href="/about">
                Sobre nosotros
              </a>
            </div>
            <div className="col-lg-8">
              <div className="mb-5">
                <ServiceDetail
                  id={currentService.id}
                  title={currentService.title}
                  subtitle={currentService.subtitle}
                  paragraph={currentService.paragraph}
                  options={currentService.options}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
