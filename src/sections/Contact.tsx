import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Code2, Briefcase, Mail, Loader2 } from 'lucide-react';
import { ToastNotification } from '../components/ui/ToastNotification';
import { ScrollReveal } from '../components/ui/ScrollReveal';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();
  const [toast, setToast] = useState<{ isVisible: boolean; message: string; type: 'success' | 'error' }>({
    isVisible: false,
    message: '',
    type: 'success'
  });

  const onSubmit = async (data: FormData) => {
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.error("EmailJS environment variables are missing.");
        setToast({ isVisible: true, message: 'Configuration missing — please try email directly', type: 'error' });
        return;
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_name: 'Abhigyan',
        },
        publicKey
      );
      
      setToast({ isVisible: true, message: 'Transmission received 🌊', type: 'success' });
      reset();
    } catch (error) {
      console.error(error);
      setToast({ isVisible: true, message: 'Failed to send — please try email directly', type: 'error' });
    }
  };

  return (
    <section id="contact" className="bg-[var(--bg-deep)] py-[120px] px-6 mt-12 relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 md:gap-[80px]">
          
          {/* Left Info */}
          <ScrollReveal direction="right" className="w-full md:w-1/2">
            <div className="text-[var(--biolum-secondary)] tracking-[0.1em] text-xs font-inter mb-4 uppercase">
              // contact.init
            </div>
            <h2 className="text-4xl md:text-5xl font-syne font-bold text-[var(--text-primary)] mb-6" style={{ textShadow: '0 0 30px rgba(0,255,213,0.3)' }}>
              Let's Build Something
            </h2>
            
            <p className="text-[var(--text-secondary)] font-inter text-lg leading-[1.8] mb-12">
              Whether it's a research collaboration, a product idea, or just a conversation about AI and the web — I'm always interested in what's on the horizon.
            </p>

            <div className="flex flex-col gap-6">
              <a href="mailto:sinhaabhigyan0910@gmail.com" className="flex items-center gap-4 group">
                <Mail className="text-[var(--biolum-primary)] group-hover:drop-shadow-[0_0_8px_var(--biolum-primary)] transition-all" size={24} />
                <span className="text-[var(--text-secondary)] font-inter group-hover:text-[var(--biolum-primary)] transition-colors text-lg">sinhaabhigyan0910@gmail.com</span>
              </a>
              <a href="https://github.com/Abhigyan-git09" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <Code2 className="text-[var(--biolum-primary)] group-hover:drop-shadow-[0_0_8px_var(--biolum-primary)] transition-all" size={24} />
                <span className="text-[var(--text-secondary)] font-inter group-hover:text-[var(--biolum-primary)] transition-colors text-lg">github.com/Abhigyan-git09</span>
              </a>
              <a href="https://www.linkedin.com/in/abhigyan-sinha-b00914276/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <Briefcase className="text-[var(--biolum-primary)] group-hover:drop-shadow-[0_0_8px_var(--biolum-primary)] transition-all" size={24} />
                <span className="text-[var(--text-secondary)] font-inter group-hover:text-[var(--biolum-primary)] transition-colors text-lg">LinkedIn</span>
              </a>
            </div>
          </ScrollReveal>

          {/* Right Form */}
          <ScrollReveal direction="left" className="w-full md:w-1/2">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-lg px-4 py-3.5 text-[var(--text-primary)] placeholder:text-[var(--text-dim)] font-inter focus:outline-none focus:border-[var(--biolum-primary)] focus:shadow-[0_0_0_3px_rgba(0,255,213,0.1)] transition-all"
                  {...register("name", { required: true })} 
                />
                {errors.name && <span className="text-[var(--biolum-pink)] text-xs font-inter ml-1">Name is required</span>}
              </div>

              <div className="flex flex-col gap-2">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-lg px-4 py-3.5 text-[var(--text-primary)] placeholder:text-[var(--text-dim)] font-inter focus:outline-none focus:border-[var(--biolum-primary)] focus:shadow-[0_0_0_3px_rgba(0,255,213,0.1)] transition-all"
                  {...register("email", { required: true, pattern: /^\S+@\S+$/i })} 
                />
                {errors.email && <span className="text-[var(--biolum-pink)] text-xs font-inter ml-1">Valid email is required</span>}
              </div>

              <div className="flex flex-col gap-2">
                <textarea 
                  rows={5}
                  placeholder="Message" 
                  className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-lg px-4 py-3.5 text-[var(--text-primary)] placeholder:text-[var(--text-dim)] font-inter focus:outline-none focus:border-[var(--biolum-primary)] focus:shadow-[0_0_0_3px_rgba(0,255,213,0.1)] transition-all resize-none"
                  {...register("message", { required: true })} 
                />
                {errors.message && <span className="text-[var(--biolum-pink)] text-xs font-inter ml-1">Message is required</span>}
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-gradient-to-br from-[#00ffd5] to-[#00b4d8] text-[#020810] font-semibold font-inter px-8 py-3.5 rounded-lg hover:shadow-[var(--glow-primary)] transition-all duration-250 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting && <Loader2 className="animate-spin" size={20} />}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>

      <ToastNotification 
        isVisible={toast.isVisible} 
        message={toast.message} 
        type={toast.type} 
        onClose={() => setToast({ ...toast, isVisible: false })} 
      />
    </section>
  );
}
