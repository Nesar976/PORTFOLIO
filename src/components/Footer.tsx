import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="py-8 text-center text-slate text-sm font-mono">
            <div className="flex justify-center gap-6 mb-6">
                {[Github, Linkedin, Twitter, Instagram].map((Icon, index) => (
                    <motion.a
                        key={index}
                        href="#"
                        whileHover={{ y: -5, color: '#64ffda' }}
                        className="text-slate-light hover:text-teal transition-colors"
                    >
                        <Icon size={20} />
                    </motion.a>
                ))}
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <a
                    href="https://github.com/nesarkavri"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-teal transition-colors"
                >
                    Designed & Built by Nesar Kavri
                </a>
            </motion.div>
        </footer>
    );
};

export default Footer;
