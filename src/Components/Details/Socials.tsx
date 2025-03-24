import React from "react";
import { FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";
const socialLinks = [
  { id: 1, name: "Facebook", url: "https://facebook.com/schoolpage", icon: <FaInstagram size={30} /> },
  { id: 2, name: "Twitter", url: "https://twitter.com/schoolpage", icon: <FaYoutube size={30} /> },
  { id: 3, name: "Instagram", url: "https://instagram.com/schoolpage", icon: <FaTwitter size={30} /> },
  { id: 4, name: "LinkedIn", url: "https://linkedin.com/schoolpage", icon: <FaLinkedin size={30} /> },
];

export const SchoolSocials: React.FC = () => {
  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Follow Our School</h2>
      <p className="text-secondary mb-4">Stay connected with us on social media!</p>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6">
        {socialLinks.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className=" text-secondary transition-transform transform hover:scale-110"
            aria-label={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

