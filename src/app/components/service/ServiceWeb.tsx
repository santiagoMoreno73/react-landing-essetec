import { FaCircleCheck } from "react-icons/fa6";

const WEB_SERVICES = [
  {
    id: 0,
    id_item: "One",
    title: "Desarrollo Web Corporativo",
    content:
      "Creamos sitios web corporativos que proyectan una imagen profesional y moderna de su empresa. Nos aseguramos de que su sitio web sea intuitivo, fácil de navegar y refleje los valores y la misión de su empresa.",
  },
  {
    id: 1,
    id_item: "Two",
    title: "Optimización para Motores de Búsqueda (SEO)",
    content:
      "Nos aseguramos de que su sitio web esté optimizado para los motores de búsqueda desde el primer día. Implementamos las mejores prácticas de SEO para mejorar su visibilidad en línea y atraer tráfico orgánico de calidad a su sitio.",
  },
  {
    id: 2,
    id_item: "Three",
    title: "Diseño Responsivo",
    content:
      "Todos nuestros desarrollos son completamente responsivos, lo que garantiza que su sitio web se vea y funcione perfectamente en cualquier dispositivo, ya sea un escritorio, una tableta o un teléfono móvil.",
  },
  {
    id: 3,
    id_item: "Four",
    title: "Mantenimiento y Soporte Continuo",
    content:
      "Ofrecemos servicios de mantenimiento y soporte continuo para asegurarnos de que su sitio web esté siempre actualizado y funcione sin problemas. Nuestro equipo está disponible para resolver cualquier problema técnico y realizar mejoras cuando sea necesario.",
  },
];

export const ServiceWeb = () => {
  return (
    <section id="dev_web">
      <h4>Desarrollo Web</h4>
      <hr />
      <p>
        Proporcionar servicios esenciales de infraestructura y outsourcing de
        tecnología, redes seguras, almacenamiento de datos confiable, gestión de
        servidores eficiente, soporte técnico continuo.
      </p>

      <div className="my-3">
        <div className="accordion" id="accordionPanelsStay">
          {WEB_SERVICES.map(({ id, title, content }) => (
            <div key={`${id}-item`} className="accordion-item">
              <h2
                className="accordion-header"
                id={`panelsStayOpen-heading${id}`}
              >
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#panelsStayOpen-collapse${id}`}
                  aria-expanded="true"
                  aria-controls={`panelsStayOpen-collapse${id}`}
                >
                  <FaCircleCheck
                    style={{
                      color: "#0d6efd",
                      verticalAlign: "text-top",
                      margin: "0px 5px",
                      fontSize: "large",
                    }}
                  />{" "}
                  {title}
                </button>
              </h2>
              <div
                id={`panelsStayOpen-collapse${id}`}
                className="accordion-collapse collapse show"
                aria-labelledby={`panelsStayOpen-heading${id}`}
              >
                <div className="accordion-body">{content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p>
          Permítanos ser su socio en el desarrollo de su presencia digital.
          Contáctenos para discutir sus necesidades específicas y cómo podemos
          ayudarle a alcanzar sus objetivos.
        </p>
      </div>
    </section>
  );
};
