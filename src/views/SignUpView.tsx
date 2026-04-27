import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Check, AlertCircle, Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useError } from '../context/ErrorContext';
import { ErrorCode } from '../types/errors';

export function SignUpView() {
  const navigate = useNavigate();
  const { signup, isAuthenticated } = useAuth();
  const { addError } = useError();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailStatus, setEmailStatus] = useState<{ available: boolean | null; message: string }>({ available: null, message: '' });
  
  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    numberOrSpecial: false
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/profile');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    setPasswordValidation({
      length: password.length >= 8,
      numberOrSpecial: /[0-9!@#$%^&*]/.test(password)
    });
  }, [password]);

  const validateEmail = (e: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  };

  const handleEmailBlur = async () => {
    if (!validateEmail(email)) return;
    
    // Mocking an API call to check email availability
    setIsLoading(true);
    setTimeout(() => {
      if (email === 'taken@example.com') {
        setEmailStatus({ available: false, message: 'Email already in use. Sign in instead?' });
      } else {
        setEmailStatus({ available: true, message: '✓ Email available' });
      }
      setIsLoading(false);
    }, 800);
  };

  const getPasswordStrength = () => {
    const met = Object.values(passwordValidation).filter(Boolean).length;
    if (met === 0) return { color: '#FF6B6B', label: 'Weak', width: '25%' };
    if (met === 1) return { color: '#FFB800', label: 'Medium', width: '50%' };
    return { color: '#00F5B8', label: 'Strong', width: '100%' };
  };

  const strength = getPasswordStrength();

  const isFormValid = () => {
    return (
      validateEmail(email) &&
      emailStatus.available !== false &&
      Object.values(passwordValidation).every(Boolean) &&
      password === confirmPassword &&
      agreeToTerms
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) return;

    setIsLoading(true);
    
    try {
      const fullName = email.split('@')[0]; // Default name if we don't have a name field yet
      const { error } = await signup(email, password, fullName.charAt(0).toUpperCase() + fullName.slice(1));

      if (error) {
        if (error.message.includes('already registered')) {
          addError(ErrorCode.EMAIL_ALREADY_EXISTS);
        } else if (error.message.includes('password')) {
          addError(ErrorCode.WEAK_PASSWORD);
        } else {
          addError(ErrorCode.AUTH_SIGNUP_FAILED, error.message);
        }
        setIsLoading(false);
        return;
      }

      // Success - redirect to profile
      navigate('/profile');
    } catch (error) {
      addError(
        ErrorCode.AUTH_SIGNUP_FAILED,
        error instanceof Error ? error.message : 'Unknown error'
      );
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1A0809] pt-32 pb-20 px-6 flex items-center justify-center">
      <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Brand Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block space-y-8"
        >
          <div className="space-y-4">
            <h1 className="font-serif text-8xl text-[#C8A49F] italic leading-none">GlowSkin</h1>
            <p className="font-serif text-3xl text-white italic opacity-80">Preserve Your Ritual.</p>
          </div>
          <div className="w-[400px] h-[400px] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
            <img 
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80" 
              alt="Botanical Still Life"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Right: Signup Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-[500px] mx-auto"
        >
          <div className="bg-[#0A0E27] border border-[#1DB679] p-8 md:p-12 rounded-2xl shadow-2xl">
            <div className="mb-8">
              <h2 className="font-serif text-3xl text-white italic mb-2">Sign Up</h2>
              <p className="font-sans text-sm text-[#B0B0B0]">Create your account to join our collective.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <label className="text-[12px] text-[#B0B0B0] font-bold uppercase tracking-widest block">Email</label>
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailStatus({ available: null, message: '' });
                  }}
                  onBlur={handleEmailBlur}
                  placeholder="your@email.com"
                  className={`w-full bg-black border ${emailStatus.available === false ? 'border-[#FF6B6B]' : emailStatus.available === true ? 'border-[#00F5B8]' : 'border-[#1DB679]'} rounded-lg px-4 py-3 text-white font-sans text-sm focus:border-[#00E5FF] focus:shadow-[0_0_10px_rgba(0,229,255,0.2)] outline-none transition-all`}
                  required
                />
                {emailStatus.message && (
                  <p className={`text-[11px] font-bold ${emailStatus.available === false ? 'text-[#FF6B6B]' : 'text-[#00F5B8]'}`}>
                    {emailStatus.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-[12px] text-[#B0B0B0] font-bold uppercase tracking-widest block">Password</label>
                <div className="relative">
                  <input 
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-black border border-[#1DB679] rounded-lg px-4 py-3 text-white font-sans text-sm focus:border-[#00E5FF] focus:shadow-[0_0_10px_rgba(0,229,255,0.2)] outline-none transition-all pr-12"
                    required
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#B0B0B0] hover:text-[#00E5FF]"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                {/* Password Strength */}
                <div className="pt-2 space-y-2">
                  <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-bold">
                    <span className="text-[#B0B0B0]">Strength: <span style={{ color: strength.color }}>{strength.label}</span></span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: strength.width }}
                      style={{ backgroundColor: strength.color }}
                      className="h-full"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
                    <Requirement met={passwordValidation.length} text="8+ characters" />
                    <Requirement met={passwordValidation.numberOrSpecial} text="Numbers or special" />
                  </div>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <label className="text-[12px] text-[#B0B0B0] font-bold uppercase tracking-widest block">Confirm Password</label>
                <div className="relative">
                  <input 
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`w-full bg-black border ${confirmPassword && password !== confirmPassword ? 'border-[#FF6B6B]' : confirmPassword && password === confirmPassword ? 'border-[#00F5B8]' : 'border-[#1DB679]'} rounded-lg px-4 py-3 text-white font-sans text-sm focus:border-[#00E5FF] focus:shadow-[0_0_10px_rgba(0,229,255,0.2)] outline-none transition-all pr-12`}
                    required
                  />
                  <button 
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#B0B0B0] hover:text-[#00E5FF]"
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {confirmPassword && password !== confirmPassword && (
                  <p className="text-[11px] text-[#FF6B6B] font-bold italic">✗ Passwords do not match</p>
                )}
                {confirmPassword && password === confirmPassword && (
                  <p className="text-[11px] text-[#00F5B8] font-bold italic">✓ Passwords match</p>
                )}
              </div>

              {/* Terms Checkbox */}
              <label className="flex items-start gap-3 cursor-pointer group mt-4">
                <div className="relative flex items-center justify-center mt-0.5">
                  <input 
                    type="checkbox"
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 border rounded transition-all flex items-center justify-center ${agreeToTerms ? 'bg-[#00E5FF] border-[#00E5FF]' : 'border-[#1DB679] group-hover:border-[#00E5FF]'}`}>
                    {agreeToTerms && <Check size={14} className="text-black font-bold" />}
                  </div>
                </div>
                <span className="text-[12px] text-[#B0B0B0] font-sans leading-relaxed">
                  I agree to the <Link to="/legal/terms" target="_blank" rel="noopener noreferrer" className="text-[#00E5FF] underline underline-offset-4">Terms of Service</Link> and <Link to="/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-[#00E5FF] underline underline-offset-4">Privacy Policy</Link>
                </span>
              </label>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={!isFormValid() || isLoading}
                className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl text-[14px] font-bold uppercase tracking-[0.2em] transition-all relative overflow-hidden ${isFormValid() && !isLoading ? 'bg-[#00E5FF] text-black hover:shadow-[0_0_25px_rgba(0,229,255,0.4)] hover:-translate-y-0.5' : 'bg-[#B0B0B0]/20 text-[#B0B0B0] cursor-not-allowed'}`}
              >
                {isLoading ? <Loader2 className="animate-spin" size={20} /> : 'Sign Up'}
              </button>

              <div className="text-center pt-4">
                <p className="text-[12px] text-[#B0B0B0]">
                  Already have an account? <Link to="/auth/signin" className="text-[#00E5FF] font-bold hover:underline">Sign In</Link>
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Requirement({ met, text }: { met: boolean; text: string }) {
  return (
    <div className={`flex items-center gap-1.5 text-[10px] uppercase tracking-tighter ${met ? 'text-[#00F5B8]' : 'text-white/20'}`}>
      <span className="mb-0.5">{met ? '✓' : '✗'}</span>
      <span>{text}</span>
    </div>
  );
}
