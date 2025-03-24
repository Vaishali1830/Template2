import { useState } from "react";


export const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-Primary">Contact Us</h1>
        <p className="text-secondary mt-2">We'd love to hear from you!</p>
      </div>

      {/* Contact Form */}
      <form
        className="bg-surface shadow-md rounded p-6" 
        onSubmit={handleSubmit}
      >
        <label className="block text-secondary">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          required
        />

        <label className="block text-secondary">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          required
        />

        <label className="block text-secondary">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          rows={4}
          required
        ></textarea>

       <div className="flex justify-center">
       <button type="submit" className="btn-primary">
          Submit
        </button>
       </div>
      </form>

      {submitted && <p className="text-green-500 mt-4">Thank you for contacting us!</p>}

      {/* Google Map Embed */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold">Find Us Here</h2>
        <iframe
          className="w-full h-64 mt-4 rounded"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093707!2d144.95373531531586!3d-37.81627927975148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57747e16c7f0924!2sMelbourne%20School!5e0!3m2!1sen!2sus!4v1614844547324!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};
