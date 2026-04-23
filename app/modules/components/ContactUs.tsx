"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import React, { useState } from "react";
import { z } from "zod";
import toast from "react-hot-toast";

const schema = z.object({
  name: z.string().min(2, "Name must be atleast 2 characters long"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(5, "Message must be atleast 5 characters long"),
});

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const isFormEmpty = !formData.name || !formData.email || !formData.message;
  const isFormInvalid = !formData.name.trim() || !formData.message.trim() || !isEmailValid;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log("message:", data.message);
      console.log("message:", data);

      if (res.ok) {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }

      toast.success(data.message || "Mail Sent Successfully");

      setLoading(false);
    } catch (error) {
      toast.error("Error occured");
    }
  };

  return (
    <section className="py-16 px-6 md:px-20 bg-amber-300">
      <h2 className="text-3xl font-bold text-center mb-12 text-zinc-800">
        Contact Me
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-800">
            Let’s Build something together 🚀
          </h3>

          <p className="text-gray-600">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-black">
              <Mail className="w-5 h-5" />
              <span>krishsharma3355@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 text-black">
              <Phone className="w-5 h-5" />
              <span>+91 7973902705</span>
            </div>

            <div className="flex items-center gap-3 text-black">
              <MapPin className="w-5 h-5" />
              <span>Gurdapur, Punjab, India</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form className="space-y-4  " onSubmit={handleSubmit}>
          <input
            type="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-3 focus:ring-2 focus:ring-gray-500 text-gray-900 rounded-md border border-zinc-600 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full p-3 focus:ring-2 focus:ring-gray-500 rounded-md border border-zinc-600 text-gray-900 outline-none"
          />

          <textarea
            placeholder="Message"
            rows={5}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full p-3 focus:ring-2 focus:ring-gray-500 rounded-md border outline-none border-zinc-600 text-gray-900"
          ></textarea>

          <button
            type="submit"
            disabled={isFormEmpty || loading}
            className={`w-full py-3  rounded-md ${
              isFormEmpty || loading
                ? "bg-black/60 cursor-not-allowed"
                : "bg-black text-white hover:bg-black/80 transition duration-200"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
