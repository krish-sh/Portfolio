"use client";

import { loadEnvFile } from "process";
import HomePage from "./modules/components/HomePage";
import { useState, useEffect } from "react";

const page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
        <HomePage />
      </div>
    </>
  );
};

export default page;
