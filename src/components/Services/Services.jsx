import React from "react";
import { RiComputerLine } from "react-icons/ri";
import { CiMobile3 } from "react-icons/ci";
import { TbWorldWww } from "react-icons/tb";
import { IoMdHappy } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { IoPulseOutline } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { motion } from "framer-motion";

const ServicesData = [
  {
    id: 1,
    title: "Web Development",
    link: "#",
    icon: <TbWorldWww />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Mobile development",
    link: "#",
    icon: <CiMobile3 />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Software development",
    link: "#",
    icon: <RiComputerLine />,
    delay: 0.4,
  },
  {
    id: 4,
    title: "Python development",
    link: "#",
    icon: <FaPython />,
    delay: 0.5,
  },
  {
    id: 5,
    title: "SEO optimization",
    link: "#",
    icon: <IoPulseOutline />,
    delay: 0.6,
  },
  {
    id: 6,
    title: "24/7 support",
    link: "#",
    icon: <BiSupport />,
    delay: 0.7,
  },
];


const VideosData = [

  {
    id: 1,
    title: "Web Development",
    link: "https://www.youtube.com/embed/tVzUXW6siu0?si=So8daZhYmpjAQzDQ",
    delay: 0.2,
  },

  {
    id: 2,
    title: "Mobile Development",
    link: "https://www.youtube.com/embed/PoBePPh5Iko?si=jbvHGgaWGSij1eez",
    icon: <TbWorldWww />,
    delay: 0.2,
  },

  {
    id: 3,
    title: "Software Development",
    link: "https://www.youtube.com/embed/HDXpGgieFDg?si=WD3w2LDMMNeRHQsF",
    icon: <TbWorldWww />,
    delay: 0.2,
  },

  {
    id: 4,
    title: "Python Development",
    link: "https://www.youtube.com/embed/7wnove7K-ZQ?si=wsskTgucvGnmZgmI",
    icon: <TbWorldWww />,
    delay: 0.2,
  },

  {
    id: 5,
    title: "SEO Optimization",
    link: "https://www.youtube.com/embed/CyRlWlaJnTY?si=vb81U_QdcRL-YE2N",
    icon: <TbWorldWww />,
    delay: 0.2,
  },

]
const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};
const Services = () => {
  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16">
        <h1 className="text-4xl font-bold text-left pb-10">
          Courses we provide
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {ServicesData.map((service) => (
            <motion.div
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
            >
              <div className="text-4xl mb-4"> {service.icon}</div>
              <h1 className="text-lg font-semibold text-center px-3">
                {service.title}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container pb-14 pt-16">
        <h1 className="text-4xl font-bold text-left pb-10">
          Take our demo
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {VideosData.map((service) => (
            <motion.div
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
            >
              <div className="text-4xl mb-4"> 
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={service.link}
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerpolicy="strict-origin-when-cross-origin" 
                  allowfullscreen
                  className="rounded-2xl">
                </iframe>
              </div>
              <h1 className="text-lg font-semibold text-center px-3">
                {service.title}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
