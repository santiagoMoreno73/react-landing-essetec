import { CardFlip, CarrouselBrand } from "../ui";
import { FaCircleCheck } from "react-icons/fa6";

const CAMERAS = [
  {
    id: 0,
    title: "Análogas",
    description:
      "Cámaras tradicionales que transmiten video a través de cables coaxiales a un grabador de video digital (DVR).",
    src: "/images/services/analoga.png",
    alt: "camara analoga",
  },
  {
    id: 1,
    title: "IP",
    description:
      "Cámaras que transmiten video digital a través de una red IP. Ofrecen alta resolución, permiten acceso mediante internet.",
    src: "/images/services/ip.png",
    alt: "ip",
  },
  {
    id: 2,
    title: "Inalámbricas",
    description:
      "Cámaras que se conectan a la red y transmiten video sin cables, utilizando tecnología Wi-Fi.",
    src: "/images/services/inalambrica.png",
    alt: "camara inalambrica",
  },
  {
    id: 3,
    title: "DVR / NVR",
    description:
      "Dispositivos de grabación y gestión de video. El DVR se utiliza en cámaras análogas, el NVR se utiliza en cámaras IP.",
    src: "/images/services/DVR.jpg",
    alt: "DVR",
  },
];

const BRANDS = [
  {
    id: 0,
    name: "carrousel-img-1",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/camera-brands%2Fdahua.png?alt=media&token=a852ff6f-63d3-49d1-a90d-4cc32ddd9d61",
    alt: "Dahua-logo",
  },
  {
    id: 1,
    name: "carrousel-img-2",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/camera-brands%2FHikvision.png?alt=media&token=a52e3ac4-b78b-4ba3-a5cb-f34126e75616",
    alt: "Hikvision-logo",
  },
  {
    id: 2,
    name: "carrousel-img-3",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/camera-brands%2FHilook-Logo.png?alt=media&token=751a8615-2c57-4054-9426-7f4496f40210",
    alt: "Hilook-logo",
  },
  {
    id: 3,
    name: "carrousel-img-4",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/camera-brands%2Fhoneywell.png?alt=media&token=44e1458c-618e-48a2-b9a7-64b688fe8cce",
    alt: "Honeywell-logo",
  },
];

export const ServiceWeb = () => {
  return (
    <div id="infraestructure">
      <h4>Desarrollo Web</h4>
      <hr />
      <p>
        Proporcionar servicios esenciales de infraestructura y outsourcing de
        tecnología, redes seguras, almacenamiento de datos confiable, gestión de
        servidores eficiente, soporte técnico continuo.
      </p>

      <div className="my-3">
        <div id="network" className="d-flex align-items-center">
          <p>
            <FaCircleCheck
              style={{ color: "#2f55d4", verticalAlign: "text-top" }}
            />{" "}
            <b>Desarrollo Web Corporativo</b>: Creamos sitios web corporativos
            que proyectan una imagen profesional y moderna de su empresa. Nos
            aseguramos de que su sitio web sea intuitivo, fácil de navegar y
            refleje los valores y la misión de su empresa.
          </p>
        </div>
        <div id="virtualization" className="d-flex align-items-center">
          <p>
            <FaCircleCheck
              style={{ color: "#2f55d4", verticalAlign: "text-top" }}
            />{" "}
            <b>Optimización para Motores de Búsqueda (SEO)</b>: Nos aseguramos
            de que su sitio web esté optimizado para los motores de búsqueda
            desde el primer día. Implementamos las mejores prácticas de SEO para
            mejorar su visibilidad en línea y atraer tráfico orgánico de calidad
            a su sitio.
          </p>
        </div>
        <div id="SO" className="d-flex align-items-center">
          <p>
            <FaCircleCheck
              style={{ color: "#2f55d4", verticalAlign: "text-top" }}
            />{" "}
            <b>Diseño Responsivo</b>: Todos nuestros desarrollos son
            completamente responsivos, lo que garantiza que su sitio web se vea
            y funcione perfectamente en cualquier dispositivo, ya sea un
            escritorio, una tableta o un teléfono móvil.
          </p>
        </div>
        <div id="virtualization" className="d-flex align-items-center">
          <p>
            <FaCircleCheck
              style={{ color: "#2f55d4", verticalAlign: "text-top" }}
            />{" "}
            <b>Mantenimiento y Soporte Continuo</b>: Ofrecemos servicios de
            mantenimiento y soporte continuo para asegurarnos de que su sitio
            web esté siempre actualizado y funcione sin problemas. Nuestro
            equipo está disponible para resolver cualquier problema técnico y
            realizar mejoras cuando sea necesario.
          </p>
        </div>
        <div id="email">
          <p>
            Permítanos ser su socio en el desarrollo de su presencia digital.
            Contáctenos para discutir sus necesidades específicas y cómo podemos
            ayudarle a alcanzar sus objetivos.
          </p>
        </div>
      </div>
    </div>
  );
};
