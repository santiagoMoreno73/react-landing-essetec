import Image from "next/image";
import { CarrouselBrand } from "../ui";
import "./test.css";

const BRANDS_VR = [
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

const BRANDS_CP = [
  {
    id: 0,
    name: "carrousel-img-1",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/cloud-computing%2Fibm_cloud.png?alt=media&token=3c361532-622a-4f91-b728-a7a35fade6ea",
    alt: "IBM-logo",
  },
  {
    id: 1,
    name: "carrousel-img-2",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/cloud-computing%2Fgoogle_cloud.png?alt=media&token=70ff6326-173e-4575-be79-c6bed8387d70",
    alt: "Google Cloud-logo",
  },
  {
    id: 2,
    name: "carrousel-img-3",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/cloud-computing%2Fazure.png?alt=media&token=0eab61b9-6ae6-446c-9fc2-b35f0e806474",
    alt: "Azure-logo",
  },
  {
    id: 3,
    name: "carrousel-img-4",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/cloud-computing%2Famazon_web.png?alt=media&token=a65b3ef6-0712-4939-a99f-502f8cdb3b9e",
    alt: "AWS-logo",
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
        <div id="network">
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
        <div id="virtualization">
          <p>
            Virtualización: Asesoría e implementación en servicios de
            visualización de tus servidores y micro servicios
          </p>
          <div className="row my-4">
            <div className="col">
              <CarrouselBrand slides={BRANDS_VR} />
            </div>
          </div>
        </div>
        <div id="SO">
          <p>
            Sistemas operativos: Asesoría e implementación de servicios en nube,
            servidores, micro servicios, bases de datos
          </p>
          <div className="row my-4">
            <div className="col">
              {/* card tesst */}
              <div
                style={
                  {
                    backgroundImage: `url(
                      "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/windows-server-microsoft-operating-system-microsoft-windows-technology-hd-wallpaper-preview.jpg?alt=media&token=5b375fd5-014e-407f-b945-71ee37001808"
                    )`,
                  } as React.CSSProperties
                }
                className="container-c"
              >
                <div className="overlay">
                  <div className="items"></div>
                  <div className="items head">
                    <p>Windows Server</p>
                    <hr />
                  </div>
                  <div className="items price">
                    {/* <p className="old">$699</p>
                    <p className="new">$345</p> */}
                    <p>
                      es la plataforma para crear una infraestructura de
                      aplicaciones, redes y servicios web conectados.
                    </p>{" "}
                  </div>
                  {/* <div className="items cart">
                    <i className="fa fa-shopping-cart"></i>
                    <span>ADD TO CART</span>
                  </div> */}
                </div>
              </div>
              {/* end */}
            </div>
          </div>
        </div>
        <div id="virtualization">
          <p>
            Cloud Computing: Asesoría e implementación de servicios en nube,
            servidores, micro servicios, bases de datos
          </p>
          <div className="row my-4">
            <div className="col">
              <CarrouselBrand slides={BRANDS_CP} />
            </div>
          </div>
        </div>
        <div id="email">
          <p>
            Ofimatica y correo: Asesoría e implementación de servicios en nube,
            servidores, micro servicios, bases de datos
          </p>
          <div className="row my-4">
            <div className="col">
              {/* <CarrouselBrand slides={BRANDS} /> */}
            </div>
          </div>
        </div>
        <div id="helpdesk">
          <p>
            Monitoreo y Helpdesk: Asesoría e implementación de servicios en
            nube, servidores, micro servicios, bases de datos
          </p>
          <div className="row my-4">
            <div className="col">
              {/* <CarrouselBrand slides={BRANDS} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
