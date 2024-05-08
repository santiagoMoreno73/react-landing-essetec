// css
import "./globals.css";
// bootstrap import
import "bootstrap/dist/css/bootstrap.css";
import BootstrapClient from "./components/BootstrapClient/BootstrapClient";
import { BaseLayout } from "./components/layouts";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BaseLayout>{children}</BaseLayout>
        <BootstrapClient />
      </body>
    </html>
  );
}
