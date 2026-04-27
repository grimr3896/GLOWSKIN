import React from 'react';
import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';

const CONTENT: Record<string, { title: string; subtitle: string; content: React.ReactNode }> = {
  '/about': {
    title: 'About Us',
    subtitle: 'Defining Modern Radiance',
    content: (
      <div className="space-y-8">
        <p>At GlowSkin, luxury means more than aesthetics—it means integrity. Our atelier is built on a philosophy that the most effective skincare harnesses the wisdom of nature, refined through scientific precision.</p>
        <p>Founded in 2024, we began with a simple question: What if skincare could honor both science and sustainability?</p>
        <p>Every product in our collection represents countless hours of research, careful sourcing, and rigorous testing. We don't compromise on ingredients. We don't compromise on ethics. And we don't compromise on results.</p>
      </div>
    )
  },
  '/atelier/origin': {
    title: 'Our Origin',
    subtitle: 'The GlowSkin Story',
    content: (
      <div className="space-y-8">
        <p>At GlowSkin, luxury means more than aesthetics—it means integrity. Our atelier is built on a philosophy that the most effective skincare harnesses the wisdom of nature, refined through scientific precision.</p>
        <p>Founded in 2024, we began with a simple question: What if skincare could honor both science and sustainability?</p>
        <p>Every product in our collection represents countless hours of research, careful sourcing, and rigorous testing. We don't compromise on ingredients. We don't compromise on ethics. And we don't compromise on results.</p>
      </div>
    )
  },
  '/atelier/sourcing': {
    title: 'Sourcing',
    subtitle: 'Our Sourcing Philosophy',
    content: (
      <div className="space-y-8">
        <p>Every botanical ingredient in our formulations is selected with intention and scrutiny.</p>
        <p>We partner with small-scale organic farmers and sustainable suppliers who share our commitment to purity. Our ingredients are:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Organically grown (pesticide-free)</li>
          <li>Ethically sourced (fair trade where applicable)</li>
          <li>Freshly processed (no excess storage)</li>
          <li>Scientifically validated (proven efficacy)</li>
          <li>Traceable (we know exactly where everything comes from)</li>
        </ul>
        <p>We believe transparency builds trust. Ask us about any ingredient—we can tell you its origin, its benefits, and why we chose it specifically.</p>
      </div>
    )
  },
  '/atelier/sustainability': {
    title: 'Sustainability',
    subtitle: 'Our Commitment to the Planet',
    content: (
      <div className="space-y-8">
        <p>Luxury should not come at the cost of our planet. Every choice we make reflects our commitment to sustainability:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          <div className="space-y-4">
            <h4 className="text-[#C8A49F] uppercase tracking-widest text-xs font-bold">Packaging</h4>
            <ul className="text-sm opacity-70 space-y-2">
              <li>Recyclable glass bottles</li>
              <li>Minimal, plastic-free packaging</li>
              <li>Compostable shipping materials</li>
              <li>Zero unnecessary materials</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-[#C8A49F] uppercase tracking-widest text-xs font-bold">Ingredients</h4>
            <ul className="text-sm opacity-70 space-y-2">
              <li>Regenerative agriculture</li>
              <li>Support for habitat restoration</li>
              <li>Fair-trade certified suppliers</li>
              <li>Zero harmful chemicals</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-[#C8A49F] uppercase tracking-widest text-xs font-bold">Operations</h4>
            <ul className="text-sm opacity-70 space-y-2">
              <li>Carbon-neutral shipping</li>
              <li>Small-batch production</li>
              <li>Renewable energy powered</li>
              <li>Botanical conservation</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  '/concierge/shipping': {
    title: 'Shipping',
    subtitle: 'Shipping & Delivery',
    content: (
      <div className="space-y-8">
        <p>We carefully prepare every order to arrive in pristine condition.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
          <div className="space-y-4">
            <h4 className="text-[#C8A49F] uppercase tracking-widest text-xs font-bold font-sans">Standard Shipping</h4>
            <p className="text-sm opacity-70">Delivery: 3-5 business days<br/>Cost: Free on orders over $75</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-[#C8A49F] uppercase tracking-widest text-xs font-bold font-sans">Express Shipping</h4>
            <p className="text-sm opacity-70">Delivery: 1-2 business days<br/>Cost: $12.99</p>
          </div>
        </div>
      </div>
    )
  },
  '/concierge/contact': {
    title: 'Contact',
    subtitle: 'Get in Touch',
    content: (
      <div className="space-y-12">
        <p>Have questions? We're here to help. Response time: 24-48 hours.</p>
        <form className="space-y-6 max-w-xl">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-[#C8A49F]/60 font-bold">Name</label>
            <input className="w-full bg-transparent border-b border-[#4D0E13] py-3 text-white outline-none focus:border-[#C8A49F] transition-colors" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-[#C8A49F]/60 font-bold">Email</label>
            <input className="w-full bg-transparent border-b border-[#4D0E13] py-3 text-white outline-none focus:border-[#C8A49F] transition-colors" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-[#C8A49F]/60 font-bold">Message</label>
            <textarea rows={4} className="w-full bg-transparent border-b border-[#4D0E13] py-3 text-white outline-none focus:border-[#C8A49F] transition-colors" />
          </div>
          <button className="bg-[#C8A49F] text-[#4D0E13] px-12 py-4 text-[10px] uppercase tracking-[0.2em] font-bold hover:scale-105 transition-all rounded-full shadow-lg">Submit</button>
        </form>
      </div>
    )
  },
  '/concierge/faq': {
    title: 'FAQ',
    subtitle: 'Frequently Asked Questions',
    content: (
      <div className="space-y-12 max-w-3xl">
        {[
          { q: 'How do I know my skin type?', a: 'We recommend starting with our digital skin analysis or consulting with a Dermal Specialist via our live chat.' },
          { q: 'Which products are right for me?', a: 'Browse our collections categorized by skin concern: Hydration, Anti-Aging, Clarity, or Sensitivity.' },
          { q: 'How long until I see results?', a: 'While immediate hydration is visible, structural skin changes typically take 28-60 days with consistent routine use.' },
          { q: 'Can I use multiple products together?', a: 'Yes, our formulations are designed to be layered. We provide routine guides for optimal sequencing.' }
        ].map((item, i) => (
          <div key={i} className="space-y-4 pb-8 border-b border-[#4D0E13]/10">
            <h4 className="text-lg font-serif italic text-white">{item.q}</h4>
            <p className="opacity-70 text-sm leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    )
  },
  '/legal/terms': {
    title: 'Terms',
    subtitle: 'Terms of Service',
    content: (
      <div className="space-y-8 text-sm opacity-70">
        <h4 className="text-white font-bold uppercase tracking-widest text-[10px]">1. Use License</h4>
        <p>Permission is granted to temporarily download one copy of the materials on GlowSkin's website for personal, non-commercial transitory viewing only.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Modify or copy the materials</li>
          <li>Use them for commercial purpose</li>
          <li>Attempt to decompile or reverse engineer</li>
        </ul>
        <h4 className="text-white font-bold uppercase tracking-widest text-[10px]">2. Disclaimer</h4>
        <p>The materials on GlowSkin's website are provided for informational purposes only. GlowSkin does not warrant the accuracy, completeness, or usefulness of this information.</p>
      </div>
    )
  },
  '/legal/refunds': {
    title: 'Refunds',
    subtitle: 'Refund Policy',
    content: (
      <div className="space-y-8">
        <div className="p-8 bg-[#2C0F12] border border-[#4D0E13]/30 rounded-3xl">
          <h4 className="text-white font-serif text-xl italic mb-4">30-Day Money-Back Guarantee</h4>
          <p className="text-sm opacity-70">We stand behind every product we sell. If you're not completely satisfied, we'll make it right.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
          <div className="space-y-4">
            <h4 className="text-[#C8A49F] uppercase tracking-widest text-xs font-bold">Eligibility</h4>
            <ul className="text-sm opacity-70 space-y-2">
              <li>Unused in original packaging</li>
              <li>Within 30 days of purchase</li>
              <li>Saleable condition</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-[#C8A49F] uppercase tracking-widest text-xs font-bold">Process</h4>
            <ul className="text-sm opacity-70 space-y-2">
              <li>Email refunds@glowskin.com</li>
              <li>Prepaid return label provided</li>
              <li>10-14 business days turnaround</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  '/legal/privacy': {
    title: 'Privacy',
    subtitle: 'Privacy & Data Protection',
    content: (
      <div className="space-y-8">
        <p>We take your privacy seriously. Your data is handled with experimental security measures.</p>
        <div className="space-y-4">
          <h4 className="text-[#C8A49F] uppercase tracking-widest text-xs font-bold">Data We Collect</h4>
          <p className="text-sm opacity-70 leading-relaxed">Account information, shipping address, and payment metadata. We NEVER store credit card information on our servers; all transactions are processed via secure industry-standard gateways.</p>
        </div>
      </div>
    )
  }
};

export function StaticPageView() {
  const { pathname } = useLocation();
  const page = CONTENT[pathname] || CONTENT['/about'];

  return (
    <div className="min-h-screen pt-40 pb-32 px-6 md:px-12 bg-[#1A0809]">
      <motion.div 
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#C8A49F] font-bold mb-6 block">{page.title}</span>
        <h1 className="font-serif text-5xl md:text-8xl text-white italic mb-16 leading-tight">{page.subtitle}</h1>
        <div className="text-[#C8A49F]/80 font-sans leading-relaxed text-lg">
          {page.content}
        </div>
      </motion.div>
    </div>
  );
}
