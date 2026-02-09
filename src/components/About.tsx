import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 px-6 sm:px-12 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 mb-12"
            >
                <span className="text-teal font-mono text-xl">01.</span>
                <h2 className="text-3xl font-bold text-slate-light">About Me</h2>
                <div className="h-px bg-navy-lighter flex-grow max-w-xs ml-4"></div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="md:col-span-2 text-slate text-lg leading-relaxed space-y-4"
                >
                    <p>
                        Hello! My name is Nesar and I enjoy creating things that live on the internet.
                        My interest in web development started back in high school when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS is pretty fun!
                    </p>
                    <p>
                        Fast-forward to today, and I've had the privilege of building software for fun and learning.
                        I am currently a student at <span className="text-teal text-bold">Medhavi Skills University</span>, focused on backend technologies,
                        open source contribution, and building scalable systems.
                    </p>
                    <p>
                        Here are a few technologies I've been working with recently:
                    </p>
                    <ul className="grid grid-cols-2 gap-2 font-mono text-sm mt-4">
                        {['JavaScript (ES6+)', 'Python', 'Go', 'Node.js', 'React', 'SQL'].map(tech => (
                            <li key={tech} className="flex items-center gap-2">
                                <span className="text-teal">▹</span> {tech}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="md:col-span-1 relative"
                >
                    {/* Vertical Gradient Accent */}
                    <div className="absolute -right-6 top-10 w-2 h-32 bg-gradient-to-b from-teal to-transparent rounded-full opacity-50 blur-[2px]"></div>

                    {/* Focus Card */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="relative z-10 bg-navy-light/60 backdrop-blur-md border border-navy-lighter hover:border-teal/30 p-6 rounded-xl shadow-2xl group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

                        <h3 className="text-teal font-mono text-sm mb-2">Current Focus</h3>
                        <h4 className="text-slate-light font-bold text-xl mb-4">
                            Engineering Resilient Systems
                        </h4>

                        <p className="text-slate text-sm leading-relaxed mb-6">
                            Architecting scalable backend solutions, optimizing Kubernetes clusters, and contributing to the open-source ecosystem.
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {['Kubernetes', 'Open Source', 'Backend Systems'].map((tag, i) => (
                                <span key={i} className="text-xs font-mono text-teal bg-teal/10 px-3 py-1 rounded-full border border-teal/20">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
