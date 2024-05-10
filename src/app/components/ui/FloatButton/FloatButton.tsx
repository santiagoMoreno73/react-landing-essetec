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
      href=""
    >
      <FaWhatsapp className="icon" />
    </motion.a>
  );
};
