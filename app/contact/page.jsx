"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactAnimation from "@/components/contactAnimation";
// import Lottie from "lottie-react";
// import contactAnimation from "@/animation/contact.json";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();
  const lottieRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[calc(100vh-6rem)] flex flex-col md:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
        {/* FORM CONTAINER */}
        <div className="h-[600px] w-full md:w-1/2 flex items-center justify-center">
          <form
            onSubmit={sendEmail}
            ref={form}
            className="w-[540px] md:w-[440px] px-8 rounded-xl text-xl flex flex-col gap-2 justify-center"
          >
            <span className="text-xl md:text-2xl text-gray-800">
              Hi Tech Zone Team ,
            </span>
            <textarea
              rows={7}
              className="text-[14px] md:text-xl bg-transparent border-b-2 border-b-black outline-none resize-none"
              name="user_message"
              style={{
                backgroundColor: "#8ebce326",
              }}
            />
            <span className="text-[14px] md:text-xl text-gray-700">
              {" "}
              My Email :
            </span>
            <input
              name="user_email"
              type="text"
              className="text-[14px] md:text-[15px] bg-transparent border-b-2 border-b-black outline-none "
              style={{
                backgroundColor: "#8ebce326",
              }}
            />
            <button className="bg-emerald-200 hover:bg-emerald-400 mt-6 rounded font-semibold text-gray-600 p-4">
              Send
            </button>
            {success && (
              <span className="text-green-600 font-semibold">
                Your message has been sent successfully!
              </span>
            )}
            {error && (
              <span className="text-red-600 font-semibold">
                Something went wrong!
              </span>
            )}
          </form>
        </div>

        {/* TEXT CONTAINER */}
        <div className="hidden md:flex md:h-full md:w-1/2 items-center justify-center text-6xl ">
          <div className=" animation">
            <ContactAnimation />

            {/* <Lottie
              className="contact-animation"
              style={{ height: 355 }}
              animationData={contactAnimation}
            /> */}
          </div>
        </div>

        <div className=" absolute top-0 right-0 -z-20  h-full w-full opacity-20 md:hidden">
          <div className="">
            <ContactAnimation />
            {/* <Lottie
              className="contact-animation"
              style={{ height: 355 }}
              animationData={contactAnimation}
            />
            */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
