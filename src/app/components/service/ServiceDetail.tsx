import { GiCctvCamera } from "react-icons/gi";
import { IoServer } from "react-icons/io5";
import { MdWeb } from "react-icons/md";

const serviceDetail = [
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
];

export const ServiceDetail = () => {
  return (
    <div>
      <h4>Servicios</h4>
      <p>
        En nuestra empresa, nos dedicamos a proporcionar soluciones integrales
        que cubren diversas necesidades tecnológicas y de seguridad. Con un
        enfoque en la innovación y la satisfacción del cliente, ofrecemos una
        gama completa de servicios diseñados para proteger sus activos,
        optimizar su infraestructura y potenciar su presencia en línea.
      </p>

      <div className="my-3">
        {serviceDetail.map(({ id, color, icon, title, paragraph }) => (
          <div key={id} className="card my-3">
            <div className="card-header">
              <div className="d-flex align-items-center ">
                <span className={`avatar avatar-sm bg-custom-${color} font-20`}>
                  {icon}
                </span>
                <h6 className="mb-0 mx-2">{title}</h6>
              </div>
            </div>
            <div className="p-4">
              <p className="card-text">{paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
