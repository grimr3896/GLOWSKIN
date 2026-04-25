import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  MessageCircle, 
  Instagram, 
  Linkedin, 
  ArrowRight, 
  MapPin, 
  Package, 
  RefreshCcw, 
  AlertCircle,
  Sparkles,
  Search,
  CheckCircle2
} from 'lucide-react';

export function ContactView() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    orderNumber: '',
    topic: 'Product Question',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    alert('Thank you! Your message has been sent to the GlowSkin team.');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="min-h-screen bg-[#EEE4DA] text-[#1A0809] font-sans selection:bg-[#C8A49F]/30">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10">
          
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#4D0E13] mb-6 block"
            >
              Get in Touch
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-6xl md:text-8xl lg:text-9xl italic mb-8 leading-[0.9]"
            >
              Let's Talk <br /> <span className="font-sans not-italic font-bold tracking-tighter">Skin.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-[#1A0809]/70 leading-relaxed mb-12 max-w-xl font-light"
            >
              Questions, feedback, or skincare guidance—we're here to help you glow with confidence. Every complex skin journey deserves a human partner.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-6"
            >
              <button 
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-4 bg-[#1A0809] text-white px-10 py-5 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold hover:scale-105 transition-all shadow-xl shadow-black/10"
              >
                Contact Us
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group flex items-center gap-4 px-10 py-5 border border-[#D8C4AC] rounded-full text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-white/50 transition-all">
                Explore FAQs
                <Search size={16} className="group-hover:scale-110 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="px-6 md:px-12 lg:px-24 mb-32">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Info & Trust */}
          <div className="lg:col-span-5 space-y-16">
            
            {/* Contact Options */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-12"
            >
              <motion.div variants={itemVariants} className="flex gap-8 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-[#4D0E13] group-hover:text-white transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl italic mb-2">Email Support</h3>
                  <a href="mailto:support@glowskin.com" className="text-lg font-medium hover:text-[#4D0E13] transition-colors">support@glowskin.com</a>
                  <p className="text-[11px] uppercase tracking-widest text-[#1A0809]/50 mt-2">Response time: Within 24 hours</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-8 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-[#4D0E13] group-hover:text-white transition-all duration-500">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl italic mb-2">Live Chat</h3>
                  <p className="text-lg font-medium">Available: Mon – Sat | 9AM – 8PM</p>
                  <p className="text-[11px] uppercase tracking-widest text-[#1A0809]/50 mt-2 font-bold decoration-[#C8A49F] underline underline-offset-4 cursor-pointer hover:text-[#4D0E13]">👉 Fastest way to get help</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-8 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-[#4D0E13] group-hover:text-white transition-all duration-500">
                  <Instagram size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl italic mb-2">Socials</h3>
                  <div className="flex gap-6 mt-1">
                    <a href="#" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-[#4D0E13]">Instagram</a>
                    <span className="opacity-20">|</span>
                    <a href="#" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-[#4D0E13]">TikTok</a>
                  </div>
                  <p className="text-[11px] uppercase tracking-widest text-[#1A0809]/50 mt-2">DMs open for quick questions & collabs</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Skincare Help Section */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-[#2C0F12] text-[#EEE4DA] p-10 md:p-12 rounded-[2.5rem] relative overflow-hidden group shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#C8A49F]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <Sparkles className="text-[#C8A49F] mb-6" size={32} />
              <h3 className="font-serif text-3xl italic mb-6">Not sure what your skin needs?</h3>
              <p className="font-light text-[#EEE4DA]/70 mb-8 max-w-sm leading-relaxed">
                Take our quick Skin Quiz and get a personalized routine curated by our specialists in under 2 minutes.
              </p>
              <button className="flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold group-hover:gap-6 transition-all">
                👉 Start Skin Analysis
              </button>
            </motion.div>

            {/* Location */}
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="pt-12 border-t border-[#D8C4AC]"
            >
              <div className="flex gap-6 items-start">
                <MapPin size={20} className="text-[#4D0E13] mt-1" />
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#1A0809]/40 mb-4">GlowSkin HQ</h4>
                  <p className="font-serif text-2xl italic leading-tight">London, UK</p>
                  <p className="text-sm font-bold uppercase tracking-widest mt-2 text-[#4D0E13]">Global shipping available</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form & Orders */}
          <div className="lg:col-span-7 space-y-16">
            
            {/* Order Support Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/50 p-8 rounded-3xl border border-[#D8C4AC]/50 hover:bg-white transition-all duration-500"
               >
                 <Package className="text-[#4D0E13] mb-6" size={24} />
                 <h4 className="font-bold text-[11px] uppercase tracking-[0.2em] mb-4">Track Order</h4>
                 <p className="text-sm text-[#1A0809]/60 leading-relaxed mb-6">Enter your order number for real-time updates on your shipment.</p>
                 <div className="relative group">
                    <input type="text" placeholder="GLW-XXXX" className="w-full bg-transparent border-b border-[#D8C4AC] py-3 text-sm placeholder:text-[#1A0809]/20 outline-none focus:border-[#4D0E13] transition-colors" />
                    <button className="absolute right-0 top-3 text-[#4D0E13]"><ArrowRight size={18} /></button>
                 </div>
               </motion.div>

               <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white/50 p-8 rounded-3xl border border-[#D8C4AC]/50 hover:bg-white transition-all duration-500"
               >
                 <RefreshCcw className="text-[#4D0E13] mb-6" size={24} />
                 <h4 className="font-bold text-[11px] uppercase tracking-[0.2em] mb-4">Returns & Refunds</h4>
                 <p className="text-sm text-[#1A0809]/60 leading-relaxed mb-4">Hassle-free returns within 14 days of delivery.</p>
                 <button className="text-[10px] uppercase font-bold tracking-widest text-[#4D0E13] underline underline-offset-4">Learn More</button>
               </motion.div>

               <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="md:col-span-2 bg-[#4D0E13] text-white p-8 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-8"
               >
                 <div className="flex gap-6 items-center">
                    <AlertCircle size={32} className="text-[#C8A49F]" />
                    <div>
                      <h4 className="font-serif text-xl italic">Damaged or Wrong Item?</h4>
                      <p className="text-sm opacity-70">Email us with your order number + photo—we'll fix it fast.</p>
                    </div>
                 </div>
                 <button className="whitespace-nowrap px-8 py-4 bg-[#C8A49F] text-[#4D0E13] text-[10px] font-bold uppercase tracking-widest rounded-full">Report Incident</button>
               </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div 
              id="contact-form"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl relative"
            >
              <h2 className="font-serif text-4xl italic mb-12">Submit an Inquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-widest font-black text-[#1A0809]/40">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-transparent border-b border-[#D8C4AC]/30 py-4 text-sm font-medium outline-none focus:border-[#4D0E13] transition-colors" 
                      placeholder="e.g. Elena Wright"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-widest font-black text-[#1A0809]/40">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full bg-transparent border-b border-[#D8C4AC]/30 py-4 text-sm font-medium outline-none focus:border-[#4D0E13] transition-colors" 
                      placeholder="elena@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-widest font-black text-[#1A0809]/40">Order Number (Optional)</label>
                    <input 
                      type="text" 
                      value={formState.orderNumber}
                      onChange={(e) => setFormState({...formState, orderNumber: e.target.value})}
                      className="w-full bg-transparent border-b border-[#D8C4AC]/30 py-4 text-sm font-medium outline-none focus:border-[#4D0E13] transition-colors" 
                      placeholder="GLW-XXXX"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-widest font-black text-[#1A0809]/40">Topic</label>
                    <select 
                      value={formState.topic}
                      onChange={(e) => setFormState({...formState, topic: e.target.value})}
                      className="w-full bg-transparent border-b border-[#D8C4AC]/30 py-4 text-sm font-medium outline-none focus:border-[#4D0E13] transition-colors appearance-none"
                    >
                      <option>Order Issue</option>
                      <option>Product Question</option>
                      <option>Skin Advice</option>
                      <option>Collaboration</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-black text-[#1A0809]/40">Message</label>
                  <textarea 
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-transparent border-b border-[#D8C4AC]/30 py-4 text-sm font-medium outline-none focus:border-[#4D0E13] transition-colors resize-none" 
                    placeholder="How can we assist you today?"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-6 bg-[#1A0809] text-white text-[11px] uppercase tracking-[0.3em] font-black rounded-2xl hover:bg-[#4D0E13] transition-all flex items-center justify-center gap-4 group"
                >
                  Send Message
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Footer Strip */}
      <section className="bg-white py-16 border-y border-[#D8C4AC]/30 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">
            {[
              { icon: Sparkles, label: 'Clean Ingredients' },
              { icon: CheckCircle2, label: 'Dermatologist Tested' },
              { icon: AlertCircle, label: 'Cruelty-Free' },
              { icon: RefreshCcw, label: 'Sustainable Packaging' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-4">
                <item.icon className="text-[#4D0E13]" size={28} />
                <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#1A0809]/60">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
