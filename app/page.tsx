"use client";

import HomePage from "./modules/components/HomePage";
import About from "./modules/components/About";
import Skill from "./modules/components/Skill";
import Project from "./modules/components/Project";
import { useState, useEffect } from "react";
import ContactUs from "./modules/components/ContactUs";

const page = () => {
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
