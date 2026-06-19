import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  isVisible: boolean;
  onClose: () => void;
}

export function ToastNotification({ message, type, isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className={`fixed bottom-8 right-8 z-50 flex items-center gap-3 px-4 py-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] backdrop-blur-md ${
            type === 'success' ? 'shadow-[0_0_20px_rgba(0,255,213,0.3)]' : 'shadow-[0_0_20px_rgba(244,114,182,0.3)]'
          }`}
        >
          {type === 'success' ? (
            <CheckCircle className="text-[var(--biolum-primary)]" size={20} />
          ) : (
            <AlertCircle className="text-[var(--biolum-pink)]" size={20} />
          )}
          <span className="text-[var(--text-primary)] font-inter text-sm">
            {message}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
