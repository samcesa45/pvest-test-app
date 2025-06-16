'use client';
import { contactItems } from '@/constants';
import { motion } from 'motion/react';
import Image from 'next/image';
import React, { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    alert('Message submitted! (Test Form)');
  };

  return (
    <section
      className="bg-[#6D1F8F66] relative z-[2] text-white px-10 py-12 lg:p-20 rounded-4xl shadow-purple backdrop-blur-100"
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-[1280px] mx-auto"
      >
        <div className="flex flex-col md:flex-row md:gap-[250px]">
          {/* content */}
          <div className="flex flex-col items-start  justify-between">
            <h2 className="text-3xl md:text-5xl mb-6 text-white lg:text-[52px] lg:leading-15 font-paytone-one text-center">
              Get in touch
            </h2>
            <div>
              <p className="font-dm-sans mb-[52px] max-w-[305px] font-medium text-[1rem] leading-[20px] text-white">{`Do you have any questions or feedback? We'd love to hear from you.`}</p>
              {contactItems.map((item) => (
                <div className="flex gap-x-2.5 mb-6" key={item.id}>
                  <Image
                    src={item.img}
                    alt={`${item.content} Image`}
                    width={16}
                    height={14}
                  />
                  <p className='font-dm-sans font-medium text-[1rem] leading-[20px] text-white"'>
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* content */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 mt-10 md:mt-0  w-full md:max-w-[400px]"
          >
            <div className="mb-8">
              <label
                htmlFor="name"
                className="block text-capitalize font-dm-sans text-[1rem] leading-5 font-medium mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                value={form.name}
                required
                placeholder="Firstname Lastname"
                className="w-full py-3 px-4 outline-none text-extralight-purple font-dm-sans font-medium text-[1rem] leading-5 rounded-lg border-2 border-[#FFFFFF1F] focus:ring-2 focus:ring-white focus:border-0"
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="email"
                className="block font-dm-sans text-[1rem] leading-5 font-medium mb-2"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                value={form.email}
                required
                placeholder="johndoe@mail.com"
                className="w-full py-3 px-4 outline-none text-extralight-purple font-dm-sans font-medium text-[1rem] leading-5 rounded-lg border-2 border-[#FFFFFF1F] focus:ring-2 focus:ring-white focus:border-0"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                onChange={handleChange}
                value={form.message}
                required
                rows={5}
                placeholder="Type here.."
                className="w-full py-3 px-4 outline-none text-extralight-purple font-dm-sans font-medium text-[1rem] leading-5 rounded-lg border-2 border-[#FFFFFF1F] focus:ring-2 focus:ring-white focus:border-0"
              />
            </div>
            <div className="block">
              <button
                type="submit"
                className="bg-white w-full cursor-pointer text-black font-dm-sans text-[1rem] leading-6 font-bold px-5 py-3 rounded-xl transition-colors"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
