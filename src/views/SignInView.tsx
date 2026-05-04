import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../context/supabaseClient';

export function SignInView() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isAuthenticated } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    // Check for success message or pre-filled email from signup
    if (location.state?.email) {
      setEmail(location.state.email);
    }
    if (location.state?.message) {
      setSuccessMessage(location.state.message);
    }

    // Check if redirected from forgot password
    const params = new URLSearchParams(location.search);
    if (params.get('reset') === 'success') {
      setSuccessMessage('Password reset link sent to your email');
    }
  }, [location]);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const clearErrors = () => {
    setErrorMessage('');
    setSuccessMessage('');
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (errorMessage.includes('Email')) clearErrors();
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (errorMessage.includes('Password')) clearErrors();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearErrors();

    if (!email) {
      setErrorMessage('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    if (!password) {
      setErrorMessage('Password is required');
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        if (error.message === 'Invalid login credentials') {
          setErrorMessage('Incorrect email or password. Please try again.');
        } else if (error.message.includes('Email not confirmed')) {
          setErrorMessage('Please confirm your email address before signing in. Check your inbox.');
        } else if (error.status === 429) {
          setErrorMessage('Too many attempts. Please try again later.');
        } else {
          setErrorMessage(error.message);
        }
        setIsLoading(false);
        return;
      }

      if (data.user && data.session) {
        // Update local auth context
        const name = data.user.user_metadata?.full_name || data.user.email?.split('@')[0] || 'User';
        login(data.user.email || email, name);
        navigate('/');
      } else if (data.user && !data.session) {
        setErrorMessage('Please confirm your email address before signing in.');
        setIsLoading(false);
      }
    } catch (err: any) {
      setErrorMessage('Network error. Check your connection.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    clearErrors();
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin + '/',
        }
      });

      if (error) {
        throw error;
      }

      // Note: sign-in usually happens via redirect, but we handle standard errors here if any
    } catch (err: any) {
      if (err.message?.includes('popup_closed_by_user')) {
        setErrorMessage('Sign in cancelled');
      } else {
        setErrorMessage('Google sign-in failed. Please try again.');
      }
      setIsLoading(false);
    }
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
                onChange={handleEmailChange}
                placeholder="name@example.com"
                className={`w-full bg-black border ${errorMessage.includes('Email') ? 'border-red-500' : 'border-[#1DB679]'} rounded-lg px-4 py-4 text-white font-sans text-sm focus:border-[#00E5FF] focus:shadow-[0_0_15px_rgba(0,229,255,0.2)] outline-none transition-all placeholder:text-white/20`}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[10px] text-[#B0B0B0] font-black uppercase tracking-[0.3em] block">Password</label>
                <Link to="/auth/forgot" className="text-[10px] text-[#00E5FF] uppercase tracking-widest font-bold hover:underline">Forgot password?</Link>
              </div>
              <div className="relative">
                <input 
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter your password"
                  className={`w-full bg-black border ${errorMessage.includes('Password') ? 'border-red-500' : 'border-[#1DB679]'} rounded-lg px-4 py-4 text-white font-sans text-sm focus:border-[#00E5FF] focus:shadow-[0_0_15px_rgba(0,229,255,0.2)] outline-none transition-all placeholder:text-white/20 pr-12`}
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

            <div className="flex items-center">
              <input 
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-[#1DB679] bg-black text-[#1DB679] focus:ring-[#00E5FF]"
              />
              <label htmlFor="rememberMe" className="ml-2 text-[10px] text-[#B0B0B0] font-bold uppercase tracking-widest cursor-pointer">Remember me</label>
            </div>

            <div className="pt-4 space-y-4">
              <button 
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-3 bg-[#1DB679] text-white py-4 rounded-xl text-[12px] font-bold uppercase tracking-[0.2em] hover:shadow-[0_0_20px_rgba(29,182,121,0.3)] transition-all disabled:opacity-50"
              >
                {isLoading ? <Loader2 className="animate-spin" size={20} /> : 'Sign In'}
              </button>

              {errorMessage && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-[11px] font-bold text-center mt-4"
                >
                  {errorMessage}
                </motion.p>
              )}

              {successMessage && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[#1DB679] text-[11px] font-bold text-center mt-4"
                >
                  {successMessage}
                </motion.p>
              )}

              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-[10px] uppercase">
                  <span className="bg-[#0A0E27] px-2 text-[#B0B0B0] tracking-widest font-bold">Or continue with</span>
                </div>
              </div>

              <button 
                type="button"
                onClick={handleGoogleSignIn}
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-3 bg-white text-[#0A0E27] py-4 rounded-xl text-[12px] font-bold uppercase tracking-[0.2em] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all disabled:opacity-50"
              >
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                Continue with Google
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
