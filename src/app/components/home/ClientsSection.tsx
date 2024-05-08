"use client";
import { EmblaOptionsType } from "embla-carousel";
import { Carousel } from "../ui/Carrousel/Carrousel";
import { IoMdRibbon } from "react-icons/io";
import Image from "next/image";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDES = [
  {
    name: "carrousel-img-1",
    src: "/images/carrousel/img-1.jpg",
    alt: "carrousel img",
  },
  {
    name: "carrousel-img-2",
    src: "/images/carrousel/img-2.jpg",
    alt: "carrousel img",
  },
  {
    name: "carrousel-img-3",
    src: "/images/carrousel/img-3.jpg",
    alt: "carrousel img",
  },
  {
    name: "carrousel-img-4",
    src: "/images/carrousel/img-4.jpg",
    alt: "carrousel img",
  },
  {
    name: "carrousel-img-5",
    src: "/images/carrousel/img-5.jpg",
    alt: "carrousel img",
  },
  {
    name: "carrousel-img-6",
    src: "/images/carrousel/img-6.jpg",
    alt: "carrousel img",
  },
];

const CLIENTS = [
  {
    name: "client-1",
    src: "/images/clients/client-1.jpeg",
  },
];

export const ClientsSection = () => {
  return (
    <section className="section bg-custom-light" id="clients">
      <div className="container">
        <div className="justify-content-center row">
          <div className="col-lg-8">
            <div className="text-center mb-5">
              <h5 className="text-primary text-uppercase small-title">
                Nuestras Historias de Éxito
              </h5>
              <h4 className="mb-3">
                Descubre lo que nuestros clientes tienen que decir sobre
                nosotros
              </h4>
              <p>
                Desde instalaciones impresionantes hasta trabajos excepcionales,
                cada testimonio cuenta una historia de satisfacción y éxito.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Carousel slides={SLIDES} options={OPTIONS} />
          </div>
        </div>
        <div className="row mt-5">
          {CLIENTS.map((client, index) => (
            <div className="col text-center" key={index}>
              <div className="client-image">
                <Image
                  src={client.src}
                  alt="logo client"
                  width={160}
                  height={100}
                  priority
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
