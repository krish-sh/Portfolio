"use client";

import HomePage from "./modules/components/HomePage";
import { useState, useEffect } from "react";

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
      </div>
    </>
  );
};

export default page;
