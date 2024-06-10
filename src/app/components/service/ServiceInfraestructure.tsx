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
  {
    id: 3,
    name: "carrousel-img-4",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/virtualization%2FQemu.png?alt=media&token=7ad98179-59ad-4330-9db3-956277aeabc9",
    alt: "Kemu-logo",
  },
  {
    id: 4,
    name: "carrousel-img-5",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/virtualization%2FKVM.png?alt=media&token=f258908b-a2b0-4cd9-a06b-6ede3ba6b0e2",
    alt: "Kvm-logo",
  },
  {
    id: 5,
    name: "carrousel-img-6",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/virtualization%2Fvirtualbox.png?alt=media&token=ec6704bf-b2e3-4e4b-98a0-b09d191ef45f",
    alt: "VirtualBox-logo",
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
  {
    id: 4,
    name: "carrousel-img-5",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/cloud-computing%2FOracleCloud.png?alt=media&token=fcd3b428-eca7-4782-a7e6-5c358ca8a73e",
    alt: "Oracle-logo",
  },
];

const BRANDS_MH = [
  {
    id: 0,
    name: "carrousel-img-1",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/help-desk%2FWazuh.png?alt=media&token=8fbc1b84-d3ff-4d1f-853d-0b4e032d4597",
    alt: "Wazu-logo",
  },
  {
    id: 1,
    name: "carrousel-img-2",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/help-desk%2Fglpi.png?alt=media&token=6091ea81-e813-466b-bcff-c1bd234ae344",
    alt: "GLPI-logo",
  },
  {
    id: 2,
    name: "carrousel-img-3",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/help-desk%2Fnagiios.png?alt=media&token=0f6115c3-b694-4624-a5e4-155de0d4f8cf",
    alt: "Nagios-logo",
  },
  {
    id: 3,
    name: "carrousel-img-4",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/help-desk%2FosTicket.png?alt=media&token=e0424df3-2570-4b9d-9ebb-d3c69425fd38",
    alt: "OSTicket-logo",
  },
  {
    id: 4,
    name: "carrousel-img-5",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/help-desk%2Fprtg.png?alt=media&token=d0254557-946a-4efb-a1b1-e7629e286c4c",
    alt: "PRTG-logo",
  },
  {
    id: 5,
    name: "carrousel-img-6",
    src: "https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/help-desk%2Fzabbix.jpeg?alt=media&token=111ea76d-8b16-4e51-b9d9-1b6afe85af82",
    alt: "Zabbix-logo",
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
              <CarrouselBrand slides={BRANDS_MH} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
