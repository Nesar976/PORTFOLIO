import { motion } from 'framer-motion';
import { Network, Cpu } from 'lucide-react';

const CurrentlyWorkingOn = () => {
    const works = [
        {
            title: 'Bitcoin Protocol & Tooling',
            icon: <Network className="w-8 h-8 text-teal mb-4" />,
            description: 'Researching UTXO management and script validation for scalable layer-2 solutions.'
        },
        {
            title: 'Solana Ecosystem Development',
            icon: <Cpu className="w-8 h-8 text-teal mb-4" />,
            description: 'Building high-performance on-chain programs and exploring Solana specific cryptographic primitives.'
        }
    ];

    return (
        <section id="currently-working" className="py-20 px-6 sm:px-12 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <span className="text-teal font-mono text-xl block mb-2">04.</span>
                <h2 className="text-3xl font-bold text-slate-light">Currently Working On</h2>
                <div className="w-20 h-1 bg-teal mx-auto mt-4 rounded-full"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
                {works.map((work, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        whileHover={{ scale: 1.02 }}
                        className="bg-navy-light/50 backdrop-blur-sm p-8 rounded-xl border border-navy-lighter/50 hover:border-teal/50 transition-all duration-300 relative overflow-hidden group"
                    >
                        <div className="relative z-10">
                            {work.icon}
                            <h3 className="text-xl font-semibold text-slate-light mb-3">{work.title}</h3>
                            <p className="text-slate">{work.description}</p>
                        </div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-teal/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-teal/10"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal/5 rounded-full blur-2xl -ml-12 -mb-12 transition-all duration-500 group-hover:bg-teal/10"></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default CurrentlyWorkingOn;
