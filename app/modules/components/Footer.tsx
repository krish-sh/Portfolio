"use client";
import React, { useEffect, useState } from "react";

function Footer() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <></>;
  }
  return <div className=" light:bg-white light:text-black">Footer</div>;
}

export default Footer;
