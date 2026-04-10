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
  return <div>Footer</div>;
}

export default Footer;
