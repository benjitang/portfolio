'use client';
import React, { useRef, useState } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { PointArrowIcon } from './icons/PointArrowIcon';
import { sendContactEmail } from '@/lib/resend';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactForm = () => {
  const submitRef = useRef<HTMLButtonElement>(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [sending, setSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const updatePointer = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = submitRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const dx = Math.max(x, rect.width - x);
    const dy = Math.max(y, rect.height - y);
    const radius = Math.sqrt(dx * dx + dy * dy);
    el.style.setProperty('--x', `${x}px`);
    el.style.setProperty('--y', `${y}px`);
    el.style.setProperty('--r', `${radius}px`);
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!EMAIL_REGEX.test(email.trim())) {
      newErrors.email = 'Enter a valid email';
    }
    if (!message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSending(true);
    try {
      const result = await sendContactEmail(name.trim(), email.trim(), message.trim());
      if (result.error) {
        throw new Error(result.error.message);
      }
      setShowSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-10">
        <div className="flex lg:flex-row flex-col gap-10 w-full">
          <div className="group flex flex-1 flex-col gap-2">
            <h6
              className={`text-xl xl:text-2xl font-medium transition-colors duration-300 group-focus-within:text-[#F3F9FF] ${
                errors.name ? 'text-red-400' : 'text-[#C1C5C9]/80'
              }`}
            >
              NAME
            </h6>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`outline-none ring-0 rounded-none border-0 border-b bg-transparent px-0 !pb-6 py-1 !h-auto shadow-none font-neue-montreal !text-xl !xl:text-2xl !overflow-auto font-base transition-colors duration-300 focus-visible:ring-0 group-focus-within:border-[#F3F9FF] placeholder:text-[#C1C5C9]/80 focus:placeholder:text-[#F3F9FF]/90 ${
                errors.name
                  ? 'border-red-400 focus-visible:border-red-400'
                  : 'border-[#C1C5C9]/80 focus-visible:border-[#F3F9FF]'
              }`}
              placeholder="YOUR NAME"
            />
            {/* {errors.name && (
              <span className="text-sm text-red-400">{errors.name}</span>
            )} */}
          </div>

          <div className="group flex flex-1 flex-col gap-2">
            <h6
              className={`text-xl xl:text-2xl font-medium transition-colors duration-300 group-focus-within:text-[#F3F9FF] ${
                errors.email ? 'text-red-400' : 'text-[#C1C5C9]/80'
              }`}
            >
              EMAIL
            </h6>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`outline-none ring-0 rounded-none border-0 border-b bg-transparent px-0 !pb-6 py-1 !h-auto shadow-none font-neue-montreal !text-xl !xl:text-2xl !overflow-auto font-base transition-colors duration-300 focus-visible:ring-0 group-focus-within:border-[#F3F9FF] placeholder:text-[#C1C5C9]/80 focus:placeholder:text-[#F3F9FF]/90 ${
                errors.email
                  ? 'border-red-400 focus-visible:border-red-400'
                  : 'border-[#C1C5C9]/80 focus-visible:border-[#F3F9FF]'
              }`}
              placeholder="YOUR EMAIL"
            />
            {/* {errors.email && (
              <span className="text-sm text-red-400">{errors.email}</span>
            )} */}
          </div>
        </div>
        <div className="group flex flex-1 flex-col gap-2">
          <h6
            className={`text-xl xl:text-2xl font-medium transition-colors duration-300 group-focus-within:text-[#F3F9FF] ${
              errors.message ? 'text-red-400' : 'text-[#C1C5C9]/80'
            }`}
          >
            MESSAGE
          </h6>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`outline-none ring-0 rounded-none border-0 border-b bg-transparent px-0 !pb-6 py-1 h-40 max-h-40 shadow-none font-neue-montreal !text-xl !xl:text-2xl !overflow-auto font-base transition-colors duration-300 focus-visible:ring-0 group-focus-within:border-[#F3F9FF] placeholder:text-[#C1C5C9]/80 focus:placeholder:text-[#F3F9FF]/90 ${
              errors.message
                ? 'border-red-400 focus-visible:border-red-400'
                : 'border-[#C1C5C9]/80 focus-visible:border-[#F3F9FF]'
            }`}
            placeholder="YOUR MESSAGE"
          />
          {/* {errors.message && (
            <span className="text-sm text-red-400">{errors.message}</span>
          )} */}
        </div>
      </div>

      {submitError && (
        <p className="text-sm text-red-400 text-right">{submitError}</p>
      )}

      <div className="flex flex-col items-end justify-center">
        <button
          ref={submitRef}
          type="submit"
          disabled={sending}
          onMouseEnter={updatePointer}
          onMouseLeave={updatePointer}
          className="submit-wipe group relative flex flex-row items-center gap-3 cursor-pointer transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-105 active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
        >
          {/* Base layer */}
          <span className="relative flex flex-row items-center gap-3 text-[#F8D752]">
            <h6 className="text-xl xl:text-2xl font-base transition-colors duration-300 tracking-tight">
              {sending ? 'SENDING...' : 'SUBMIT'}
            </h6>
            <PointArrowIcon className="w-6 h-8 xl:w-8 xl:h-8 fill-[#F8D752]" />
          </span>
          {/* Overlay layer, revealed via clip-path from cursor */}
          <span className="wipe-layer absolute inset-0 flex flex-row items-center gap-3 text-[#F3F9FF] pointer-events-none">
            <h6 className="text-xl xl:text-2xl font-base transition-colors duration-300 tracking-tight">
              {sending ? 'SENDING...' : 'SUBMIT'}
            </h6>
            <PointArrowIcon className="w-6 h-8 xl:w-8 xl:h-8 fill-[#F3F9FF]" />
          </span>
          <style jsx>{`
            .submit-wipe {
              --x: 50%;
              --y: 50%;
              --r: 0px;
            }
            .wipe-layer {
              clip-path: circle(0px at var(--x) var(--y));
              transition: clip-path 0.65s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .submit-wipe:hover .wipe-layer {
              clip-path: circle(var(--r) at var(--x) var(--y));
            }
          `}</style>
        </button>
      </div>

      {showSuccess && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={() => setShowSuccess(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#F3F9FF] rounded-2xl px-10 py-12 flex flex-col items-center gap-6 max-w-sm mx-4 text-center"
          >
            <h4 className="text-2xl font-medium text-[#2E3F59]">
              Message sent!
            </h4>
            <p className="text-[#354156]">
              Thanks for reaching out — I&apos;ll get back to you soon.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="mt-2 px-6 py-3 rounded-full bg-[#1C1D20] text-[#F3F9FF] cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

export default ContactForm;