"use client";
import React from "react";
import Lottie from "lottie-react";
import contactAnimation from "@/animation/contact.json";

const ContactAnimation = () => {
  return (
    <>
      <Lottie
        className="contact-animation"
        style={{ height: 355 }}
        animationData={contactAnimation}
      />
    </>
  );
};

export default ContactAnimation;
