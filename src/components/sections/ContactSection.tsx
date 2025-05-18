import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // In a real application, you would send this data to your backend
    setFormState("submitting");

    // Simulate API call
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: "Contact Form Submission",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setFormState("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setFormState('idle'), 3000);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormState("error");
    }
  };

  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-primary-light/20 p-8 rounded-cartoon relative overflow-hidden">
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-12 -mt-12"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/10 rounded-full -ml-8 -mb-8"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 10,
                  ease: "easeInOut",
                }}
              />

              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-gray-600 mb-8">
                  Have a project in mind or just want to say hello? Feel free to
                  reach out and I'll get back to you soon!
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-primary text-white p-3 rounded-full mr-4">
                      <FiMail />
                    </div>
                    <span className="text-gray-700">
                      rahul.roybak@gmail.com
                    </span>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-secondary text-white p-3 rounded-full mr-4">
                      <FiUser />
                    </div>
                    <span className="text-gray-700">
                      Cooch Behar, WB, India
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Name
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <FiUser />
                  </div>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-10 py-3 bg-background-light border-2 border-transparent focus:border-primary rounded-cartoon focus:outline-none transition-all"
                    placeholder="Rahul Roy"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Email
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <FiMail />
                  </div>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-10 py-3 bg-background-light border-2 border-transparent focus:border-primary rounded-cartoon focus:outline-none transition-all"
                    placeholder="rahul.roybak@gmail.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Message
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <FiMessageSquare />
                  </div>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-10 py-3 bg-background-light border-2 border-transparent focus:border-primary rounded-cartoon focus:outline-none transition-all"
                    placeholder="Hello, I'd like to discuss a project..."
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={formState === "submitting"}
                className="btn btn-primary w-full flex items-center justify-center gap-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {formState === "idle" && (
                  <>
                    Send Message
                    <FiSend />
                  </>
                )}

                {formState === "submitting" && (
                  <span className="inline-flex items-center gap-2">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                )}

                {formState === "success" && "Message Sent! ✓"}
                {formState === "error" && "Failed to Send ✗"}
              </motion.button>

              {formState === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-center p-3 rounded-cartoon bg-green-100 text-green-600"
                >
                  Your message has been sent successfully!
                </motion.div>
              )}

              {formState === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-center p-3 rounded-cartoon bg-red-100 text-red-600"
                >
                  There was an error sending your message. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
