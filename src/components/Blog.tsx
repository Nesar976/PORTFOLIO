import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen } from 'lucide-react';

const Blog = () => {
    return (
        <section id="blog" className="py-20 px-6 sm:px-12 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 mb-12"
            >
                <span className="text-teal font-mono text-xl">05.</span>
                <h2 className="text-3xl font-bold text-slate-light">Latest Writing</h2>
                <div className="h-px bg-navy-lighter flex-grow max-w-xs ml-4"></div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group relative bg-navy-light/50 backdrop-blur-sm border border-navy-lighter hover:border-teal/50 rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
                <div className="absolute top-6 right-6 text-slate-light group-hover:text-teal transition-colors">
                    <ArrowUpRight size={24} />
                </div>

                <div className="flex items-center gap-2 text-teal font-mono text-xs mb-4">
                    <BookOpen size={14} />
                    <span>Featured Article</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-light mb-3 group-hover:text-teal transition-colors">
                    Start Small, Scale Huge: Understanding Cilium and eBPF in Today’s Kubernetes
                </h3>

                <p className="text-slate mb-6 leading-relaxed max-w-2xl">
                    A deep dive into how Cilium leverages eBPF to provide high-performance networking, security, and observability for Kubernetes clusters. Explore the architecture that powers modern cloud-native infrastructure.
                </p>

                <div className="flex items-center justify-between mt-auto">
                    <span className="text-slate-light font-mono text-xs">
                        By Nesar Kavri
                    </span>
                    <a
                        href="/cilium-ebpf-blog.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-teal font-mono text-sm border border-teal/50 px-4 py-2 rounded hover:bg-teal/10 transition-colors"
                    >
                        Read Blog
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Blog;
