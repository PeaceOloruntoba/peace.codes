// src/components/sections/Contact.tsx
import React, { useState } from "react";
import {
  Mail,
  Phone,
  Copy,
  Check,
} from "lucide-react";
import { contactInfo } from "../../data/contact";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 px-6 bg-zinc-50 dark:bg-zinc-950"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Section Header Pill */}
        <div className="flex flex-col items-center mb-6">
          <span className="px-4 py-1.5 rounded-full bg-zinc-200/60 dark:bg-zinc-800 text-xs font-semibold tracking-wider text-zinc-800 dark:text-zinc-300 uppercase border border-zinc-300/40 dark:border-zinc-700">
            Get in touch
          </span>
        </div>

        {/* Section Heading Description */}
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto mb-12">
          What’s next? Feel free to reach out to me if you’re looking for a
          developer, have a query, or simply want to connect.
        </p>

        {/* Large Interactive Contact Triggers */}
        <div className="flex flex-col items-center gap-6 mb-12">
          {/* Email Row */}
          <div className="flex items-center gap-4 group">
            <Mail className="size-6 md:size-8 text-zinc-500 dark:text-zinc-400" />
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-xl md:text-3xl font-extrabold tracking-tighter text-zinc-950 dark:text-zinc-50 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
            >
              {contactInfo.email}
            </a>
            <button
              onClick={() => handleCopy(contactInfo.email, "email")}
              className="p-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
              aria-label="Copy email address"
            >
              {copiedType === "email" ? (
                <Check size={20} className="text-sky-500" />
              ) : (
                <Copy size={20} />
              )}
            </button>
          </div>

          {/* Phone Row */}
          <div className="flex items-center gap-4 group">
            <Phone className="size-6 md:size-8 text-zinc-500 dark:text-zinc-400" />
            <a
              href={`tel:${contactInfo.phone}`}
              className="text-xl md:text-3xl font-extrabold tracking-tighter text-zinc-950 dark:text-zinc-50 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
            >
              {contactInfo.phone}
            </a>
            <button
              onClick={() => handleCopy(contactInfo.phone, "phone")}
              className="p-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
              aria-label="Copy phone number"
            >
              {copiedType === "phone" ? (
                <Check size={20} className="text-sky-500" />
              ) : (
                <Copy size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Secondary Social Interconnectivity Subtitle */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            You may also find me on these platforms:
          </p>
          <div className="flex items-center gap-4 text-zinc-500 dark:text-zinc-400">
            <a
              href={contactInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-500 transition-colors p-2"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={contactInfo.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-500 transition-colors p-2"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href={contactInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-500 transition-colors p-2"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
