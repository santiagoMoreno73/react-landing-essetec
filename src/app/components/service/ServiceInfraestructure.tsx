const serviceDetail = [
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
      "Virtualización:  Asesoría e implementación en servicios de visualización de tus servidores y micro servicios.",
    media: [
      {
        id: 0,
        src: "/images/services/analoga.png",
        alt: "xxxx",
      },
    ],
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
              {/* <CardFlip
                id={0}
                width={180}
                height={180}
                title={"Video Portero"}
                paragraph={
                  "Son esenciales para la seguridad y la gestión de acceso en viviendas y negocios."
                }
                src={"/images/services/videoportero.png"}
                alt={"Equipo biométrico"}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
