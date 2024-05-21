import { FC } from "react";
import { CardServiceDetail } from "./CardServiceDetail";

type ServiceDetailType = {
  id: string;
  title: string;
  subtitle: string;
  paragraph?: string;
  options: any[];
};

export const ServiceDetail: FC<ServiceDetailType> = ({
  id,
  title,
  subtitle,
  paragraph,
  options,
}) => {
  return (
    <section id={id}>
      <h4>{title}</h4>
      <h6>{subtitle}</h6>
      <p>{paragraph}</p>

      <div className="my-3">
        {options.map((option: any, index: number) => (
          <div key={index}>
            <div>{option.paragraph}</div>
            <div className="row my-4">
              {option.media.map(({ id, title, description, src, alt }) => (
                <div className="col-sm-12 col-md-6" key={id}>
                  <CardServiceDetail
                    title={title}
                    description={description}
                    src={src}
                    alt={alt}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
