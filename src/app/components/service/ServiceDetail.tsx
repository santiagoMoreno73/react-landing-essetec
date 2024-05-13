import { FC } from "react";
import { CardServiceDetail } from "./CardServiceDetail";

type ServiceDetailType = {
  title: string;
  subtitle: string;
  paragraph?: string;
  options: any[];
};

export const ServiceDetail: FC<ServiceDetailType> = ({
  title,
  subtitle,
  paragraph,
  options,
}) => {
  return (
    <section>
      <h4>{title}</h4>
      <h6>{subtitle}</h6>
      <p>{paragraph}</p>

      <ol className="my-3 list-none">
        {options.map((option: any, index: number) => (
          <div key={index}>
            <li>{option.paragraph}</li>
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
      </ol>
    </section>
  );
};
