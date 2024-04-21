"use client";
import { useEffect } from "react";

function BootstrapClient() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);

  return <></>;
}

export default BootstrapClient;
