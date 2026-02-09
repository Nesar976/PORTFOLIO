import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ onOpenContact }: { onOpenContact: () => void }) => {
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
        { name: 'Blog', href: '#blog' },
        { name: 'Skills', href: '#skills' },
    ];

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass shadow-lg' : 'py-6 bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="cursor-pointer group relative z-50"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        whileHover={{ scale: 1.1, filter: "drop-shadow(0 0 8px rgba(100, 255, 218, 0.5))" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {/* Minimal N Monogram */}
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 32V8L28 32V8"
                                className="stroke-teal stroke-[3] stroke-linecap-square stroke-linejoin-miter"
                            />
                        </svg>
                    </motion.div>

                    {/* NK Dropdown */}
                    <AnimatePresence>
                        {isDropdownOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-14 left-0 w-64 bg-navy-light/90 backdrop-blur-xl border border-teal/20 rounded-xl shadow-2xl overflow-hidden p-4 z-40"
                            >
                                <div className="flex items-center gap-2 mb-4 px-2">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-teal"></span>
                                    </span>
                                    <span className="text-xs font-mono text-teal">Open to collaboration</span>
                                </div>
                                <ul className="space-y-1">
                                    {navLinks.map((link) => (
                                        <li key={link.name}>
                                            <a
                                                href={link.href}
                                                className="block px-4 py-2 text-sm text-slate hover:text-teal hover:bg-teal/5 rounded-lg transition-colors font-mono"
                                                onClick={() => setIsDropdownOpen(false)}
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                    <li>
                                        <button
                                            onClick={() => {
                                                setIsDropdownOpen(false);
                                                onOpenContact();
                                            }}
                                            className="w-full text-left px-4 py-2 text-sm text-teal hover:bg-teal/10 rounded-lg transition-colors font-mono font-bold"
                                        >
                                            Contact Me
                                        </button>
                                    </li>
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center space-x-8">
                    <button
                        onClick={onOpenContact}
                        className="text-teal border border-teal px-4 py-2 rounded text-sm font-mono hover:bg-teal/10 transition-colors ml-4"
                    >
                        Get in Touch
                    </button>
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
                                <button
                                    onClick={() => { setIsOpen(false); onOpenContact(); }}
                                    className="text-teal border border-teal px-8 py-3 rounded text-lg font-mono hover:bg-teal/10 transition-colors"
                                >
                                    Get in Touch
                                </button>
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav >
    );
};

export default Navbar;
