import type { NextPage } from "next";

import { BaseLayout } from "../components/layouts";

const AboutPage: NextPage = () => {
  return (
    <BaseLayout
      title="Servicios"
      pageDescription="Encuentra los mejores servicios tecnológicos aquí"
    >
      <h1>Hola a servicios</h1>
    </BaseLayout>
  );
};

export default AboutPage;
