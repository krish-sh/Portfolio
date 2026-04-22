"use client";

import { Mail, Phone, MapPin } from "lucide-react";


export default function ContactUs() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });
    const data = await res.json();
    alert(data.success || data.error);
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
            type="text"
            placeholder="Your Name"
            className="w-full p-3 focus:ring-2 focus:ring-gray-500 text-gray-900 rounded-md border border-zinc-600 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 focus:ring-2 focus:ring-gray-500 rounded-md border border-zinc-600 text-gray-900 outline-none"
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 focus:ring-2 focus:ring-gray-500 rounded-md border outline-none border-zinc-600 text-gray-900"
          ></textarea>

          <button
            type="submit"
            className="w-full hover:bg-black/60 bg-black text-white py-3 rounded-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
