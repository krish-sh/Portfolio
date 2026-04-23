"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="  py-10 px-6 md:px-20">
      <div className="grid md:grid-cols-3 gap-8">
        {/* LEFT - Branding */}
        <div>
          <h2 className="text-2xl font-bold">Krish Sharma</h2>
          <p className="text-gray-400 mt-3 text-sm">
            Full Stack Web Developer building modern and responsive web
            applications.
          </p>
        </div>

        {/* MIDDLE - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#home" className="hover:text-gray-600">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-600">
                About
              </a>
            </li>
            <li>
              <a href="#skill" className="hover:text-gray-600">
                Skills
              </a>
            </li>
            <li>
              <a href="#project" className="hover:text-gray-600">
                Projects
              </a>
            </li>
            <li>
              <a href="#contactUs" className="hover:text-gray-600">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* RIGHT - Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect</h3>

          <div className="flex gap-4">
            {/* GitHub */}
            <a
              href="https://github.com/krish-sh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full "
            >
              <FaGithub className="text-3xl  hover:scale-125 transition duration-300" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/krish-sharma-5a3823348/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3  rounded-full "
            >
              <FaLinkedin className="text-3xl hover:scale-125 transition duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Krish Sharma. All rights reserved.
      </div>
    </footer>
  );
}
