"use client";
import { EmblaOptionsType } from "embla-carousel";
import { Carousel } from "../ui/carrousel/Carrousel";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export const ClientsSection = () => {
  return (
    <section className="section bg-light" id="clients">
      <div className="container">
        <div className="justify-content-center row">
          <div className="col-lg-8">
            <div className="text-center mb-5">
              <h5 className="text-primary text-uppercase small-title">
                Testimonial
              </h5>
              <h4 className="mb-3">What our Client Say</h4>
              <p>
                It will be as simple as occidental in fact, it will be
                Occidental.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h5 className="mb-4">R 3,500 + Satisfied Client</h5>
            <Carousel slides={SLIDES} options={OPTIONS} />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-6 col-xl-3">
            <div className="client-image">test</div>{" "}
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="client-image">test</div>{" "}
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="client-image">test</div>{" "}
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="client-image">test</div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};
