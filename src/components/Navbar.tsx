import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Working', href: '#currently-working' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass shadow-lg' : 'py-6 bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2 cursor-pointer group"
                >
                    <span className="text-teal font-mono text-xl font-bold tracking-tighter group-hover:text-white transition-colors">
                        &lt;Nesar /&gt;
                    </span>
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    <ul className="flex space-x-8">
                        {navLinks.map((link, index) => (
                            <motion.li
                                key={link.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <a href={link.href} className="text-slate hover:text-teal font-mono text-sm transition-colors relative group">
                                    <span className="text-teal mr-1">0{index + 1}.</span>
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal transition-all group-hover:w-full"></span>
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                    <motion.a
                        href="/resume.pdf"
                        target="_blank"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-teal border border-teal px-4 py-2 rounded text-sm font-mono hover:bg-teal/10 transition-colors"
                    >
                        Resume
                    </motion.a>
                </div>

                {/* Mobile Nav Toggle */}
                <div className="md:hidden text-teal cursor-pointer z-50 hover:text-white transition-colors" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={30} /> : <Menu size={30} />}
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ ease: "easeInOut" }}
                        className="fixed inset-0 bg-navy/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden z-40"
                    >
                        <ul className="flex flex-col items-center space-y-8">
                            {navLinks.map((link, index) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                >
                                    <a
                                        href={link.href}
                                        className="text-slate-light hover:text-teal font-mono text-xl transition-colors flex flex-col items-center"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span className="text-teal text-sm mb-2">0{index + 1}.</span>
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                            <motion.li
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    className="text-teal border border-teal px-8 py-3 rounded text-lg font-mono hover:bg-teal/10 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Resume
                                </a>
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
