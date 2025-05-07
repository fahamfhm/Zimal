import React, { useState } from 'react';


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const phoneNumber = '94753320905';

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendWhatsAppMessage = e => {
    e.preventDefault();
    const { name, email, message } = formData;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `Hello, my name is ${name}.\n\n${email}.\n\n${message}`
    )}`;

    window.open(url, '_blank');
  };

  return (
    <div className="bg-gradient-to-r from-green-100 to-white to-green-50 min-h-screen py-24 text-green-800" id="contact">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight text-green-700">
          Get in Touch
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">

          {/* Contact Form */}
          <div className="flex-1 bg-white p-10 rounded-3xl shadow-xl border border-green-100">
            <form className="space-y-6" onSubmit={sendWhatsAppMessage}>
              <div>
                <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-green-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-green-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-green-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-br from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:to-green-800 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-3xl font-bold mb-6">Let’s Talk 🌿</h3>
            <p className="text-lg text-gray-700 mb-6">
              Whether you have a question, want to start a project, or just say hello — we’d love to hear from you.
            </p>

            <div className="space-y-4 text-lg">
              <p><strong>Email:</strong> info@yourempire.com</p>
              <p><strong>Phone:</strong> +94 71 234 5678</p>
              <p><strong>Address:</strong> 123 Green Street, Colombo, Sri Lanka</p>
              <p><strong>Hours:</strong> Mon - Fri: 9:00am - 6:00pm</p>
            </div>

            <div className="mt-6">
              <h4 className="text-xl font-semibold mb-2">Follow Us</h4>
              <div className="flex gap-4 justify-center lg:justify-start">
                <a href="#" className="text-green-700 hover:underline">Facebook</a>
                <a href="#" className="text-green-700 hover:underline">Instagram</a>
                <a href="#" className="text-green-700 hover:underline">LinkedIn</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
