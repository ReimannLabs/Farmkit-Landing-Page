import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface BetaSignupFormProps {
  onClose: () => void;
}

export default function BetaSignupForm({ onClose }: BetaSignupFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const form = e.currentTarget;
      const response = await fetch("https://formspree.io/f/xnndajle", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (err) {
      setError("Failed to submit form. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl p-8 max-w-md w-full relative"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <h2 className="font-['Calistoga'] text-2xl text-amber-900 mb-6 text-center">
          Join the Beta
        </h2>

        <AnimatePresence>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-green-600 mb-4"
            >
              Thanks for signing up! We'll be in touch soon.
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-amber-900 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-amber-900 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-amber-900">
                  <input
                    type="checkbox"
                    name="isFarmer"
                    className="rounded border-amber-200 text-amber-600 focus:ring-amber-500"
                  />
                  I am a farmer
                </label>
              </div>

              <div>
                <label htmlFor="farmName" className="block text-amber-900 mb-1">
                  Farm Name (if applicable)
                </label>
                <input
                  type="text"
                  id="farmName"
                  name="farmName"
                  className="w-full px-4 py-2 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-amber-900 mb-1">
                  Message (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {error && (
                <div className="text-red-500 text-sm">{error}</div>
              )}

              <button
                type="submit"
                className="w-full bg-amber-700 text-white py-2 rounded-lg hover:bg-amber-600 transition-colors"
              >
                Sign Up for Beta
              </button>
            </form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
