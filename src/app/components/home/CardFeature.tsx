"use client";
import Image from "next/image";

type CardFeatureProps = {
  image_url: string;
};

export const CardFeature = ({ image_url }: CardFeatureProps) => {
  return (
    <div className="border border-light shadow-none mt-5 mt-lg-0 card">
      <div className="border-0 bg-transparent card-header">
        <div className="d-flex">
          <i className="mdi-circle bg-danger mr-1"></i>
          <i className="mdi-circle bg-warning mr-1 ms-1"></i>
          <i className="mdi-circle bg-success mr-1 ms-1"></i>
        </div>
      </div>
      <div className="bg-custom-light card-body">
        <div className="box-shadow">
          <Image
            className="img-radius img-fluid"
            src={image_url}
            alt="vision image"
            width={0}
            height={0}
            layout="responsive"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};
