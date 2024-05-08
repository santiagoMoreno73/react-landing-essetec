import Link from "next/link";

export const CardService = ({ service }) => {
  return (
    <div className="card mb-3">
      <div
        className={`card-background bg-custom-${service.options.color}`}
      ></div>
      <div className="card-body">
        <div className="card-avatar-md mx-auto mb-4">
          <span className="card-avatar rounded-circle">
            {service.options.icon}
          </span>
        </div>
        <h5 className="card-title text-center">{service.title}</h5>
        <p className="card-text text-center">{service.description}</p>
        <div className="text-center m-4">
          <Link
            className={`card-btn bg-custom-${service.options.color}`}
            href={service.options.href}
          >
            Ver más
          </Link>
          {/* <a className={`btn btn-primary`} href="/">
            Ver más
          </a> */}
        </div>
      </div>
    </div>
  );
};
