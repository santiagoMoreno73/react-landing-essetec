import Image from "next/image";

export const Copyright = () => {
  return (
    <section className="bg-primary py-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Image
              src="/images/logo.png"
              alt="logo image"
              width={70}
              height={60}
              priority
            />
            <div className="float-sm-end mt-4 mt-sm-0">
              <p className="copyright-desc text-white mb-0">
                2024 © Invoza. Created by Themesdesign
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
