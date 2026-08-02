"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/919236497210?text=Hi%20NixMark%20👋%0A%0AI%20want%20to%20grow%20my%20business.%20Please%20guide%20me."
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        background: "#25D366",
        color: "#fff",
        padding: "14px 18px",
        borderRadius: "999px",
        boxShadow: "0 10px 30px rgba(0,0,0,.35)",
        textDecoration: "none",
        fontWeight: "bold",
        transition: "all .3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <FaWhatsapp size={30} />
      <span>Chat with Us</span>
    </a>
  );
}