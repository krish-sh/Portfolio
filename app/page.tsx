"use client";

import HomePage from "./modules/components/HomePage";
import About from "./modules/components/About";
import Skill from "./modules/components/Skill";
import Project from "./modules/components/Project";
import { useState, useEffect } from "react";
import ContactUs from "./modules/components/ContactUs";

const page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <>
        <div className="flex justify-center items-center min-h-screen">
          Loading...
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <section id="home">
          <HomePage />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="project">
          <Project />
        </section>
        <section id="skill">
          <Skill />
        </section>
        <section id="contactUs">
          <ContactUs />
        </section>
      </div>
    </>
  );
};

export default page;
