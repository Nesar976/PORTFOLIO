import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, Loader2 } from 'lucide-react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Close on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("https://formsubmit.co/ajax/nesarklavri24@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSuccess(true);
                setFormData({ name: '', email: '', message: '' });
                // Reset success state after 3 seconds
                setTimeout(() => {
                    setSuccess(false);
                    onClose();
                }, 3000);
            } else {
                console.error("Form submission failed");
            }
        } catch (error) {
            console.error("Error sending form:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-navy/80 backdrop-blur-md z-[60]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed inset-0 m-auto z-[70] w-full max-w-lg h-fit p-6 sm:p-0 pointer-events-none flex items-center justify-center"
                    >
                        <div className="bg-navy-light border border-teal/20 rounded-2xl shadow-2xl overflow-hidden w-full pointer-events-auto relative">
                            {/* Decorative glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-slate-light hover:text-teal transition-colors z-10"
                            >
                                <X size={24} />
                            </button>

                            <div className="p-8">
                                {!success ? (
                                    <>
                                        <h2 className="text-2xl font-bold text-slate-light mb-2">Get in Touch</h2>
                                        <p className="text-slate text-sm mb-6">
                                            Have a project in mind or simply want to say hello? Drop me a message below.
                                        </p>

                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="relative group">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full bg-navy border border-navy-lighter rounded-lg px-4 pt-6 pb-2 text-slate-light focus:outline-none focus:border-teal transition-all peer placeholder-transparent"
                                                    placeholder="Name"
                                                />
                                                <label
                                                    htmlFor="name"
                                                    className="absolute left-4 top-1 text-xs text-slate transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-xs peer-focus:text-teal"
                                                >
                                                    Name
                                                </label>
                                            </div>

                                            <div className="relative group">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full bg-navy border border-navy-lighter rounded-lg px-4 pt-6 pb-2 text-slate-light focus:outline-none focus:border-teal transition-all peer placeholder-transparent"
                                                    placeholder="Email"
                                                />
                                                <label
                                                    htmlFor="email"
                                                    className="absolute left-4 top-1 text-xs text-slate transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-xs peer-focus:text-teal"
                                                >
                                                    Email
                                                </label>
                                            </div>

                                            <div className="relative group">
                                                <textarea
                                                    name="message"
                                                    id="message"
                                                    required
                                                    rows={4}
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    className="w-full bg-navy border border-navy-lighter rounded-lg px-4 pt-6 pb-2 text-slate-light focus:outline-none focus:border-teal transition-all peer placeholder-transparent resize-none"
                                                    placeholder="Message"
                                                />
                                                <label
                                                    htmlFor="message"
                                                    className="absolute left-4 top-1 text-xs text-slate transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-xs peer-focus:text-teal"
                                                >
                                                    Message
                                                </label>
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={loading}
                                                className="w-full bg-teal/10 border border-teal text-teal font-semibold py-3 rounded-lg hover:bg-teal hover:text-navy transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {loading ? (
                                                    <Loader2 className="animate-spin" size={18} />
                                                ) : (
                                                    <>
                                                        Send Message <Send size={18} />
                                                    </>
                                                )}
                                            </button>
                                        </form>
                                    </>
                                ) : (
                                    <div className="flex flex-col items-center justify-center py-12 text-center">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                            className="text-teal mb-4"
                                        >
                                            <CheckCircle size={64} />
                                        </motion.div>
                                        <h3 className="text-2xl font-bold text-slate-light mb-2">Message Sent!</h3>
                                        <p className="text-slate">
                                            Thanks for reaching out, Nesar! I'll get back to you soon.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
