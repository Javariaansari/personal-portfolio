"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Projects Data Array
const projects = [
  {
    image: "/assests/projects/resturant.jpg",
    title: "FoodTuck Q-Commerce website",
    description:
      "I developed an advanced Q-commerce platform that integrates product data for seamless display and efficient management. Key features include 'Add to Cart' functionality, detailed product pages, and API routes for optimized server-side operations. The project leverages a mix of static and dynamic pages to ensure fast performance and scalability.",
    link: "https://project-123.vercel.app/",
  },
  {
    image: "/assests/projects/todo.jpg",
    title: "Task Manager",
    description:
      " This project pushed my web dev skills and was a blast to build! If you love coding or need a cool project idea, building a calculator is a fantastic way to hone your skills and create something awesome! 💪",
    link: "https://final-frontend-azure.vercel.app/",
  },
  
  {
    image: "/assests/projects/Number hit game.jpg",
    title: "Number Hit Game",
    description:
      "  I developed a Number hit game.using HTML, CSS, JAVASCRIPT ",
    link: "https://javariaansari.github.io/Number-Hit-Game/",
  },
  {
    image: "/assests/projects/file convertor.jpg",
    title: "Datasweeper",
    description:
      "Datasweeper Transform your files between CVS and Excel Formate with built-in data cleaning ",
    link: "https://growth-mindset-challenge-vjhwm35sfabyxd8kknwb9m.streamlit.app/",
  },
  {
    image: "/assests/projects/password strength checker.jpg",
    title: "Password Strength Checker",
    description:
      "A Password Strength Checker is a tool that evaluates how secure a password is.It checks factors like length, use of uppercase/lowercase letters, numbers, and special characters. The goal is to guide users in creating stronger, harder-to-crack passwords for better security  ",
    link: "https://password-strength-checker-csum3w9dffrspgrmwimqut.streamlit.app/",
  },
  {
    image: "/assests/projects/unit convertor.jpg",
    title: "Unit Convertor",
    description:
      "I developed a unit convertor.a tool that changes values from one measurement unit to another.It supports conversions like length (meters → feet), weight (kg → pounds), temperature (Celsius → Fahrenheit), etc. ",
    link: "https://unit-converter-yw3mxexfym6w4qtmsp2bbb.streamlit.app/",
  },
 
];

const Project = () => {
  return (
    <div id="Project">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-5xl text-5xl font-serif font-bold title-font mb-4 text-gray-900">
              My
              <span className="text-5xl ml-3 text-blue-700 sm:text-5xl font-serif font-bold">
                Projects
              </span>
            </h1>
          </div>
          <div className="flex flex-wrap -m-5 -mt-[5rem]">
            {projects.map((project, index) => (
              <div
                key={index}
                className="lg:w-1/3 sm:w-1/3 p-4 cursor-pointer"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="500"
              >
                <div className="flex relative">
                  <Image
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-contain object-center"
                    src={project.image}
                    width={500}
                    height={300}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-serif font-medium text-blue-500 mb-1">
                      {project.title}
                    </h2>
                    <h1 className="title-font text-lg font-serif font-medium text-gray-900 mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed font-serif line-clamp-3">
                      {project.description}
                    </p>
                    <Link target="_blank" href={project.link}>
                      <p className="leading-relaxed font-serif text-blue-500 hover:underline">
                        View Project..
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
