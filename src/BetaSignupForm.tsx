import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { motion } from "framer-motion";

export default function BetaSignupForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    farmName: "",
    isFarmer: false,
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const submit = useMutation(api.betaSignups.submit);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await submit(formData);
      setSuccess(true);
      setTimeout(onClose, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
        <h2 className="font-['Calistoga'] text-3xl text-amber-900 mb-6">Join the Beta</h2>
        {success ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-600 text-center py-8"
          >
            Thanks for signing up! We'll be in touch soon.
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-amber-900 mb-1">Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-amber-900 mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="flex items-center gap-2 my-4">
              <input
                type="checkbox"
                id="isFarmer"
                className="rounded border-amber-200 text-amber-600 focus:ring-amber-500"
                checked={formData.isFarmer}
                onChange={(e) => setFormData({ ...formData, isFarmer: e.target.checked })}
              />
              <label htmlFor="isFarmer" className="text-amber-900">
                I am a farmer/producer
              </label>
            </div>
            {formData.isFarmer && (
              <div>
                <label className="block text-amber-900 mb-1">Farm/Business Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  value={formData.farmName}
                  onChange={(e) => setFormData({ ...formData, farmName: e.target.value })}
                />
              </div>
            )}
            <div>
              <label className="block text-amber-900 mb-1">Message (Optional)</label>
              <textarea
                className="w-full px-4 py-2 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <div className="flex gap-4 mt-6">
              <button
                type="submit"
                className="flex-1 bg-amber-700 text-white px-6 py-2 rounded-full hover:bg-amber-600 transition-colors"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 border-2 border-amber-700 text-amber-700 px-6 py-2 rounded-full hover:bg-amber-700 hover:text-white transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </motion.div>
  );
}
