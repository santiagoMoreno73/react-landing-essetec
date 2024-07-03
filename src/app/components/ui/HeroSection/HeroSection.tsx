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
            <video id="video" autoPlay muted loop preload="auto">
              <source
                src="https://firebasestorage.googleapis.com/v0/b/essetec-base.appspot.com/o/video_essetec.mp4?alt=media&token=c40ce818-7b5d-455f-8163-829bc57b615e"
                type="video/mp4"
              ></source>
            </video>
          </div>
        ) : (
          <div
            className="hero-image"
            style={{
              background: `url(${imgUrl})`,
            }}
          ></div>
        )}
        <div className="justify-content-center row">
          <div className="col-lg-8">
            <div className="hero-content"></div>
            <div className="hero-wrapper text-center mb-4">
              <Image
                className="hero-logo"
                src="/images/logos/logo_bl2.png"
                width={330}
                height={380}
                alt="icon"
                priority
              />
              <h1 className="hero-title text-white mb-4">
                <span className="font-24">
                  <b>
                    <TypeAnimation
                      sequence={[
                        "ESPECIALISTAS EN SEGURIDAD ELECTRÓNICA & TECNOLOGÍA",
                        1000,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                    />
                  </b>
                </span>
              </h1>
              <p className="hero-text font-22 text-white">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
