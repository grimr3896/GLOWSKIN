import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle, X } from 'lucide-react';
import { useError } from '../context/ErrorContext';

export function ErrorToastContainer() {
  const { errors, removeError } = useError();

  return (
    <div className="fixed bottom-8 right-8 space-y-4 pointer-events-none z-[1000]">
      <AnimatePresence mode="popLayout">
        {errors.map((error) => (
          <motion.div
            key={error.timestamp}
            layout
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.9 }}
            className="bg-[#0A0E27] text-white px-6 py-4 rounded-2xl shadow-2xl border border-[#FF6B6B] max-w-sm pointer-events-auto"
          >
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-[#FF6B6B]/10 rounded-full flex items-center justify-center flex-shrink-0 border border-[#FF6B6B]/20">
                <AlertCircle size={18} className="text-[#FF6B6B]" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-xs uppercase tracking-widest text-[#FF6B6B] mb-1">Error Occurred</p>
                <p className="text-xs font-sans font-medium text-white/90 leading-relaxed">{error.message}</p>
                {error.details && (
                  <p className="text-[10px] uppercase tracking-tighter text-[#B0B0B0] mt-2 font-bold">{error.details}</p>
                )}
              </div>
              <button
                onClick={() => removeError(error.timestamp)}
                className="flex-shrink-0 text-[#B0B0B0] hover:text-white transition-colors p-1"
              >
                <X size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
