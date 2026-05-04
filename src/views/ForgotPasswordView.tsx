import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, Loader2, CheckCircle2 } from 'lucide-react';
import { supabase } from '../supabaseClient';

export function ForgotPasswordView() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      });

      if (error) {
        setErrorMessage(error.message);
      } else {
        setIsSent(true);
      }
    } catch (err: any) {
      setErrorMessage('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSent) {
    return (
      <div className="min-h-screen bg-[#1A0809] pt-32 pb-20 px-6 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-[450px] text-center"
        >
          <div className="bg-[#0A0E27] border border-brand-emerald p-12 rounded-2xl shadow-2xl">
            <div className="w-20 h-20 bg-brand-emerald/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-brand-emerald">
              <CheckCircle2 size={40} className="text-brand-emerald" />
            </div>
            <h2 className="font-serif text-3xl text-white italic mb-4">Check Your Email</h2>
            <p className="text-slate-400 text-sm mb-10 leading-relaxed font-bold uppercase tracking-widest">
              A recovery link has been dispatched to <span className="text-white">{email}</span>. Please verify your inbox to reset your credentials.
            </p>
            <Link 
              to="/auth/signin"
              className="block w-full bg-brand-emerald text-brand-surface py-4 rounded-xl text-[12px] font-bold uppercase tracking-[0.2em] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
            >
              Return to Sign In
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1A0809] pt-32 pb-20 px-6 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[450px]"
      >
        <div className="bg-[#0A0E27] border border-brand-emerald p-8 md:p-12 rounded-2xl shadow-2xl">
          <Link to="/auth/signin" className="flex items-center gap-2 text-[10px] text-slate-500 uppercase tracking-widest font-black mb-8 hover:text-brand-emerald transition-colors">
            <ArrowLeft size={14} /> Back to Entry
          </Link>
          
          <div className="mb-8">
            <h2 className="font-serif text-3xl text-white italic mb-2">Password Recovery</h2>
            <p className="font-sans text-sm text-[#B0B0B0]">Enter your digital address to receive a restoration link.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] text-[#B0B0B0] font-black uppercase tracking-[0.3em] block">Email Address</label>
              <div className="relative">
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-black border border-brand-emerald rounded-lg px-4 py-4 text-white font-sans text-sm focus:border-brand-emerald-light outline-none transition-all pl-12"
                  required
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
              </div>
            </div>

            <button 
              type="submit"
              disabled={isLoading || !email}
              className="w-full flex items-center justify-center gap-3 bg-brand-emerald text-brand-surface py-5 rounded-xl text-[12px] font-bold uppercase tracking-[0.3em] hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all disabled:opacity-50"
            >
              {isLoading ? <Loader2 className="animate-spin" size={20} /> : 'Dispatch Recovery Link'}
            </button>

            {errorMessage && (
              <p className="text-red-500 text-[11px] font-bold text-center mt-4">
                {errorMessage}
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </div>
  );
}
