import Link from "next/link";

type CardServiceProps = {
  title: string;
  description: string;
  options: any;
};

export const CardService = ({
  title,
  description,
  options,
}: CardServiceProps) => {
  return (
    <div className="card mb-3">
      <div className={`card-background bg-custom-${options.color}`}></div>
      <div className="card-body">
        <div className="card-avatar-md mx-auto mb-4">
          <span className="card-avatar rounded-circle">{options.icon}</span>
        </div>
        <h5 className="card-title text-center">{title}</h5>
        <p className="card-text text-center">{description}</p>
        <div className="text-center m-4">
          <Link
            className={`card-btn bg-custom-${options.color}`}
            href={options.href}
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
