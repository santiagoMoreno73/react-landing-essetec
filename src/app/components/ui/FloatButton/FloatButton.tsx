"use client";
import "./FloatButton.css";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export const FloatButton = () => {
  return (
    <motion.a
      whileTap={{ scale: 0.85 }}
      className="btn-float box-shadow"
      type="button"
      href="https://api.whatsapp.com/send?phone=573202063747"
      target="_blank"
    >
      <FaWhatsapp className="icon" />
    </motion.a>
  );
};
