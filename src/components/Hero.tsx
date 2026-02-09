import { motion } from 'framer-motion';
import { Github, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center px-6 sm:px-12 pt-20">
            <div className="max-w-5xl w-full">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-teal font-mono mb-5 text-lg"
                >
                    Hey! I'm
                </motion.p>

                <div className="flex items-center gap-4 sm:gap-6 mb-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="text-5xl sm:text-7xl font-bold text-white tracking-tight"
                    >
                        Nesar Kavri.
                    </motion.h1>

                    <motion.a
                        href="https://github.com/nesarkavri"
                        target="_blank"
                        rel="noreferrer"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className="text-teal hover:text-white transition-colors p-2"
                    >
                        <Github size={40} className="sm:w-16 sm:h-16" />
                    </motion.a>
                </div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="text-4xl sm:text-6xl font-bold text-slate mb-8"
                >
                    Open Source Contributor. <br className="hidden sm:block" />
                    Student Developer.
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="max-w-xl text-slate text-lg mb-12 leading-relaxed"
                >
                    <p>
                        I build accessible, pixel-perfect, and performant web experiences.
                        Currently focused on backend systems, open source contribution, and
                        creating cinematic digital interactions.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                >
                    <a
                        href="#contact"
                        className="group inline-flex items-center gap-2 border border-teal text-teal px-8 py-4 rounded font-mono text-sm hover:bg-teal/10 transition-colors"
                    >
                        Get In Touch
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            <ArrowRight size={18} />
                        </motion.span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
