import { CarrouselBrand } from "../ui";

const BRANDS = [
  {
    id: 0,
    name: "carrousel-img-1",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/virtualization%2FHyper.png?alt=media&token=46b1856d-5dba-42b2-b7f6-3b2933e34eb9",
    alt: "Dahua-logo",
  },
  {
    id: 1,
    name: "carrousel-img-2",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/virtualization%2Fproxmox.png?alt=media&token=1c235f3f-82df-4810-b940-7a4568075405",
    alt: "Hikvision-logo",
  },
  {
    id: 2,
    name: "carrousel-img-3",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/virtualization%2Fvmware.png?alt=media&token=b946a057-bac1-4ea8-a4a5-4044f5aaed32",
    alt: "Hilook-logo",
  },
];
export const ServiceInfraestructure = () => {
  return (
    <div>
      <h4>Infraestructura & Outsorcing de tecnología</h4>
      <p>
        Proporcionar servicios esenciales de infraestructura y outsourcing de
        tecnología, redes seguras, almacenamiento de datos confiable, gestión de
        servidores eficiente, soporte técnico continuo.
      </p>

      <div className="my-3">
        <div id="CCTV">
          <p>Redes y comunicaciones</p>
          <div className="row my-4">
            {/* {CAMERAS.map(({ id, title, description, src, alt }) => (
              <div
                className="col-sm-12 col-md-3 d-flex justify-content-center"
                key={id}
              >
                <CardFlip
                  id={id}
                  width={180}
                  height={180}
                  title={title}
                  paragraph={description}
                  src={src}
                  alt={alt}
                />
              </div>
            ))} */}
          </div>
          <div>{/* <CarrouselBrand slides={BRANDS} /> */}</div>
        </div>
        <div id="Biométricos">
          <p>
            Virtualización: Asesoría e implementación en servicios de
            visualización de tus servidores y micro servicios
          </p>
          <div className="row my-4">
            <div className="col">
              <CarrouselBrand slides={BRANDS} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
