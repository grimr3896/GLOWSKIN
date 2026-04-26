import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useError } from '../context/ErrorContext';
import { ErrorCode } from '../types/errors';

export function SignInView() {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const { addError } = useError();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/profile');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock login process
    setTimeout(() => {
      // Allow any login for demo, except mock failure
      if (email === 'fail@example.com') {
        addError(ErrorCode.AUTH_LOGIN_FAILED);
        setIsLoading(false);
      } else {
        const name = email.split('@')[0];
        login(email, name.charAt(0).toUpperCase() + name.slice(1));
        setIsLoading(false);
        navigate('/profile');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#1A0809] pt-32 pb-20 px-6 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[450px]"
      >
        <div className="bg-[#0A0E27] border border-[#1DB679] p-8 md:p-12 rounded-2xl shadow-2xl">
          <div className="mb-10 text-center">
            <h1 className="font-serif text-4xl text-[#C8A49F] italic mb-4 tracking-tight">GlowSkin</h1>
            <h2 className="font-serif text-2xl text-white italic mb-2">Welcome Back</h2>
            <p className="font-sans text-[11px] text-[#B0B0B0] uppercase tracking-[0.2em] font-bold">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] text-[#B0B0B0] font-black uppercase tracking-[0.3em] block">Email Address</label>
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="rituals@glowskin.com"
                className="w-full bg-black border border-[#1DB679] rounded-lg px-4 py-4 text-white font-sans text-sm focus:border-[#00E5FF] focus:shadow-[0_0_15px_rgba(0,229,255,0.2)] outline-none transition-all placeholder:text-white/10"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[10px] text-[#B0B0B0] font-black uppercase tracking-[0.3em] block">Password</label>
                <Link to="/auth/forgot" className="text-[10px] text-[#00E5FF] uppercase tracking-widest font-bold hover:underline">Forgot?</Link>
              </div>
              <div className="relative">
                <input 
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-black border border-[#1DB679] rounded-lg px-4 py-4 text-white font-sans text-sm focus:border-[#00E5FF] focus:shadow-[0_0_15px_rgba(0,229,255,0.2)] outline-none transition-all placeholder:text-white/10 pr-12"
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#B0B0B0] hover:text-[#00E5FF] p-2"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="pt-4">
              <button 
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-3 bg-[#1DB679] text-white py-4 rounded-xl text-[12px] font-bold uppercase tracking-[0.2em] hover:shadow-[0_0_20px_rgba(29,182,121,0.3)] transition-all disabled:opacity-50"
              >
                {isLoading ? <Loader2 className="animate-spin" size={20} /> : 'Unlock Account'}
              </button>
            </div>

            <div className="text-center pt-8 border-t border-white/5 mt-8">
              <p className="text-[11px] text-[#B0B0B0] font-sans">
                Don't have an account? <Link to="/auth/signup" className="text-[#00E5FF] font-bold hover:underline ml-1">Sign Up</Link>
              </p>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
