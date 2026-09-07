"use client";

import { X, User, Phone } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";

type LeadPopupProps = {
  open: boolean;
  onClose: () => void;
};

export default function LeadPopup({ open, onClose }: LeadPopupProps) {
  const router = useRouter();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: name,
          phone: phone,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      setName("");
      setPhone("");

      onClose();
      router.push("/thank-you");
    } catch (error) {
      console.error(error);
      alert("Failed to send lead.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>

        <h3 className="text-xl text-center font-bold text-gray-900 mb-2">
          Book RO Purifier Repair
        </h3>

        <p className="text-sm text-center text-gray-600 mb-6">
          Enter your details and we’ll call you shortly.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500 w-5 h-5" />
            <input
              type="text"
              required
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border pl-12 pr-4 py-3 text-sm text-gray-700
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500 w-5 h-5" />
            <input
              type="tel"
              required
              placeholder="Phone No"
              value={phone}
              maxLength={10}
              pattern="[0-9]{10}"
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                if (value.length <= 10) setPhone(value);
              }}
              className="w-full rounded-lg border pl-12 pr-4 py-3 text-sm text-gray-700
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg py-3 font-semibold text-white
            bg-gradient-to-r from-blue-600 to-cyan-500
            hover:opacity-90 transition"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
