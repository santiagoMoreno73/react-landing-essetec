import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <section className="footer" id="#footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <div className="text-center">
              <Image
                src="/images/logos/logo_bl2.png"
                alt="logo image"
                width={90}
                height={100}
                priority
              />
              <p className="mt-4">
                Convierte tu negocio en una experiencia tecnológica
                sorprendente, única e innovadora.
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-lg-2 offset-lg-1">
            <div>
              <h5 className="mb-4 footer-list-title">Compañia</h5>
              <ul className="list-unstyled footer-list-menu">
                <li>
                  <Link href="/about">Acerca de nosotros</Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="mb-4 footer-list-title">Legal</h5>
              <ul className="list-unstyled footer-list-menu">
                <li>
                  <Link href="/about">Terminos</Link>
                </li>
                <li>
                  <Link href="/about">Privacidad</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-2">
            <div>
              <h5 className="footer-list-title mb-4">Más información</h5>
              <ul className="list-unstyled footer-list-menu">
                <li>
                  <Link href="/services">Servicios</Link>
                </li>
                <li>
                  <Link href="#features">Caráteristicas</Link>
                </li>
                <li>
                  <Link href="#clients">Clientes</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <h5 className="footer-list-title mb-4">
              Contacto (+57 3202063747)
            </h5>
            <div>
              <div className="d-flex align-items-center">
                <Image
                  src="/images/emojis/CEO.png"
                  alt="logo image"
                  width={70}
                  height={70}
                  priority
                />
                <div className="">
                  <p>CEO - Ing. Daniel Alfonso Sánchez</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <Image
                  src="/images/emojis/CFO.png"
                  alt="logo image"
                  width={70}
                  height={70}
                  priority
                />
                <div className="media-body">
                  <p>CFO - C.P. Erika Coji</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
