"use client";
import { FC } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import "./HeroSection.css";

type HeroSectionProps = {
  title?: string;
  description?: string;
  isVideo?: boolean;
  imgUrl?: string;
};

export const HeroSection: FC<HeroSectionProps> = ({
  title,
  description,
  imgUrl,
  isVideo = true,
}) => {
  return (
    <section id="#home">
      <div className="hero-container">
        {isVideo ? (
          <div className="hero-video">
            <video id="video" autoPlay muted loop>
              <source src="/video/video_essetec.mp4" type="video/mp4"></source>
            </video>
          </div>
        ) : (
          <div
            className="hero-image"
            style={{
              background: `url(${imgUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        )}
        <div className="justify-content-center row">
          <div className="col-lg-8">
            <div className="hero-content"></div>
            <div className="hero-wrapper text-center mb-4">
              <Image
                className="img-fluid"
                src="/images/logos/logo_bl2.png"
                width={330}
                height={380}
                alt="icon"
              />
              <h1 className="hero-title text-white mb-4">
                <span className="font-24">
                  <b>
                    <TypeAnimation
                      sequence={[
                        "ESPECIALISTAS EN SEGURIDAD ELECTRONICA & TECNOLOGIA",
                        1000,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                    />
                  </b>
                </span>
              </h1>
              <p className="font-20">
                Convierte tu negocio en una experiencia <br />
                tecnológica sorprendente, única e innovadora.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
