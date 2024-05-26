import Image from "next/image";
import "./CardFlip.css";

export const CardFlip = ({ id, title, paragraph, src, alt }) => {
  return (
    <div id={`card-${id}`} className="flip-container">
      <div className="card">
        <div className="front">
          <div className="content">
            <h5 className="small-title">{title}</h5>
            <Image
              className="img img-fluid"
              src={src}
              alt={alt}
              width={120}
              height={120}
            />
          </div>
        </div>
        <div className="back">
          <div className="content">
            <p>{paragraph}</p>
          </div>
        </div>
      </div>
    </div>
  );
};