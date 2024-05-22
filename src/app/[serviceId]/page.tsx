"use client";
import Image from "next/image";

import { useState } from "react";
import { ListGroup } from "../components/ui/ListGroup/ListGroup";
import { CardFlip, HeroSection } from "../components/ui";
import { CardServiceDetail } from "../components/service/CardServiceDetail";
import { GiCctvCamera } from "react-icons/gi";
import { IoServer } from "react-icons/io5";
import { MdWeb } from "react-icons/md";
// import { ServiceDetail } from "../components/service/ServiceDetail";

const SERVICES = [
  {
    id: "services",
    name: "Servicios",
    title: "Servicios",
    subtitle: "",
    paragraph:
      "En nuestra empresa, nos dedicamos a proporcionar soluciones integrales que cubren diversas necesidades tecnológicas y de seguridad. Con un enfoque en la innovación y la satisfacción del cliente, ofrecemos una gama completa de servicios diseñados para proteger sus activos, optimizar su infraestructura y potenciar su presencia en línea.",
    options: [
      {
        id: 0,
        title: "Seguridad Electrónica",
        color: "security",
        icon: <GiCctvCamera className="color-white" />,
        paragraph:
          "Nuestros servicios de seguridad electrónica están diseñados para prevenir pérdidas, controlar accesos no autorizados y mejorar la capacidad de respuesta ante amenazas. Ofrecemos la instalación y mantenimiento de sistemas avanzados de CCTV, incluyendo cámaras análogas, IP e inalámbricas, así como soluciones de grabación con DVR y NVR. Nos adaptamos a las necesidades específicas de cada cliente para garantizar una protección óptima.",
      },
      {
        id: 1,
        title: "Infraestructura & Outsorcing de tecnologia",
        color: "it",
        icon: <IoServer className="color-white" />,
        paragraph:
          "Proveemos soluciones completas de infraestructura tecnológica y servicios de outsourcing para ayudar a su empresa a operar de manera más eficiente. Desde la implementación y mantenimiento de redes hasta la gestión de servidores y soporte técnico, nos aseguramos de que su tecnología esté siempre en su mejor estado. Nuestro equipo de expertos está dedicado a optimizar sus recursos tecnológicos para que pueda centrarse en su negocio principal.",
      },
      {
        id: 2,
        title: "Desarrollo web",
        color: "web",
        icon: <MdWeb className="color-white" />,
        paragraph:
          "Ofrecemos servicios de desarrollo web personalizados para impulsar su presencia en línea. Nuestro equipo de desarrolladores crea sitios web atractivos, funcionales y optimizados para SEO que reflejan la identidad de su marca y cumplen con sus objetivos comerciales. Ya sea que necesite un sitio web corporativo, una tienda en línea o una aplicación web personalizada, estamos aquí para ayudarle a alcanzar sus metas digitales.",
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
              "Cámaras tradicionales que transmiten video a través de cables coaxiales a un grabador de video digital (DVR). Son conocidas por su confiabilidad y costo más bajo.",
            src: "/images/services/analoga.png",
            alt: "camara analoga",
          },
          {
            id: 1,
            title: "IP",
            description:
              "Cámaras que transmiten video digital a través de una red IP. Ofrecen alta resolución y permiten acceso remoto a las imágenes en tiempo real mediante internet.",
            src: "/images/services/ip.png",
            alt: "ip",
          },
          {
            id: 2,
            title: "Inalámbricas",
            description:
              "Cámaras que se conectan a la red y transmiten video sin cables, utilizando tecnología Wi-Fi. Son fáciles de instalar y proporcionan flexibilidad en la ubicación.",
            src: "/images/services/analoga.png",
            alt: "camara inalambrica",
          },
          {
            id: 3,
            title: "DVR / NVR",
            description:
              "Dispositivos de grabación y gestión de video. El DVR se utiliza con cámaras análogas, mientras que el NVR se utiliza con cámaras IP. Ambos permiten almacenar y revisar las grabaciones.",
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
    name: "Desarrollo web",
    title: "Desarrollo web",
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

            <div className="col-lg-4 mb-3">
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
                {currentService && currentService.id == "services" ? (
                  <section id="">
                    <h4>{currentService.title}</h4>
                    <h6>{currentService.subtitle}</h6>
                    <p>{currentService.paragraph}</p>

                    <div className="my-3">
                      {currentService.options.map(
                        (option: any, index: number) => (
                          <div key={index} className="my-3">
                            <div className="d-flex align-items-center mb-3">
                              <span
                                className={`avatar avatar-sm bg-custom-${option.color} font-20`}
                              >
                                {option.icon}
                              </span>
                              <h6 className="small-title mx-2">
                                {option.title}
                              </h6>
                            </div>
                            <p>{option.paragraph}</p>
                          </div>
                        )
                      )}
                    </div>
                  </section>
                ) : (
                  <section id="">
                    <h4>{currentService.title}</h4>
                    <h6>{currentService.subtitle}</h6>
                    <p>{currentService.paragraph}</p>

                    <div className="my-3">
                      {currentService.options.map(
                        (option: any, index: number) => (
                          <div key={index}>
                            <div>{option.paragraph}</div>
                            <div className="row my-4">
                              {option.media.map(
                                ({ id, title, description, src, alt }) => (
                                  <div className="col-sm-12 col-md-4" key={id}>
                                    <CardFlip
                                      id={id}
                                      title={title}
                                      paragraph={description}
                                      src={src}
                                      alt={alt}
                                    />
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </section>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
