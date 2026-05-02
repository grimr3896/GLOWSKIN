import React from 'react';
import { motion } from 'motion/react';
import { Mail, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CheckEmailView() {
  return (
    <div className="min-h-screen bg-brand-black flex items-center justify-center px-6 py-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-emerald/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-emerald-light/5 blur-[120px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full text-center relative z-10"
      >
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 bg-brand-emerald/10 border border-brand-emerald/20 rounded-full flex items-center justify-center">
            <Mail className="text-brand-emerald-light" size={32} />
          </div>
        </div>

        <h1 className="font-serif text-4xl text-white mb-6 tracking-tight italic">Verify Your Essence</h1>
        
        <p className="text-brand-surface text-lg mb-10 leading-relaxed opacity-80">
          Check your email to confirm your account before logging in. We've sent a magical link to activate your GLOWSKIN journey.
        </p>

        <div className="space-y-6">
          <Link 
            to="/signin"
            className="group flex items-center justify-center gap-3 w-full bg-brand-emerald hover:bg-brand-emerald-light text-brand-black font-sans font-black text-[12px] uppercase tracking-[0.3em] py-5 rounded-xl transition-all duration-500 shadow-[0_10px_30px_rgba(29,182,121,0.2)]"
          >
            Proceed to Login <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <div className="flex items-center justify-center gap-2 text-[10px] text-brand-emerald-light/40 uppercase tracking-widest font-black">
            <Sparkles size={12} />
            <span>Artifact Awaiting Activation</span>
            <Sparkles size={12} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
