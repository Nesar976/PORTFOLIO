import { motion } from 'framer-motion';

const LookingFor = ({ onOpenContact }: { onOpenContact: () => void }) => {
    return (
        <section id="looking-for" className="py-20 px-6 sm:px-12 max-w-4xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-navy-light/30 backdrop-blur-sm border border-teal/20 rounded-2xl p-8 md:p-12 relative overflow-hidden"
            >
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <h2 className="text-3xl font-bold text-slate-light mb-6 relative z-10">What I'm Looking For</h2>

                <p className="text-slate text-lg leading-relaxed mb-8 max-w-2xl mx-auto relative z-10">
                    I’m actively looking for opportunities to contribute to
                    <span className="text-teal"> open-source projects</span>,
                    work on <span className="text-teal">backend and systems-level problems</span>,
                    and collaborate with engineers who value clean, maintainable code.
                </p>

                <motion.button
                    onClick={onOpenContact}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-transparent border-2 border-teal text-teal px-8 py-3 rounded font-mono font-semibold hover:bg-teal/10 transition-colors relative z-10"
                >
                    Get in Touch
                </motion.button>
            </motion.div>
        </section>
    );
};

export default LookingFor;
