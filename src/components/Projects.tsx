import { motion } from 'framer-motion';
import { Folder, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Local Package Dependency Visualizer',
            description: 'A Python tool to analyze and visualize local package dependencies for better dependency management. Generates interactive dependency graphs to identify bottlenecks.',
            tags: ['Python', 'Dependency Graphs', 'Visualization'],
            links: {
                external: 'https://pypi.org/project/local-package-visualizer/0.1.3/',
                github: '#' // Assuming no GitHub link provided for this specific pypi project in prompt, but usually there is one. I will use the pypi link for external.
            }
        },
        {
            title: 'Kubernetes Cluster Scalability Benchmarking',
            description: 'Cluster scalability and performance benchmarking using Kube-Burner. Analyzes control plane performance and resource usage under high load scenarios.',
            tags: ['Kubernetes', 'Kube-Burner', 'Cloud Infrastructure'],
            links: {
                github: 'https://github.com/Nesar976/Kubernetes-Cluster-Scalability-Benchmarking',
                external: 'https://github.com/Nesar976/Kubernetes-Cluster-Scalability-Benchmarking'
            }
        }
    ];

    return (
        <section id="projects" className="py-20 px-6 sm:px-12 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 mb-12"
            >
                <span className="text-teal font-mono text-xl">03.</span>
                <h2 className="text-3xl font-bold text-slate-light">Some Things I've Built</h2>
                <div className="h-px bg-navy-lighter flex-grow max-w-xs ml-4"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <motion.a
                        href={project.links.external || project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="group bg-navy-light p-8 rounded shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-transparent hover:border-teal/30 relative overflow-hidden cursor-pointer"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <Folder size={40} className="text-teal" />
                            <div className="flex gap-4 z-10">
                                {project.links.github !== '#' && (
                                    <span className="text-slate hover:text-teal transition-colors">
                                        <Github size={20} />
                                    </span>
                                )}
                                <span className="text-slate hover:text-teal transition-colors">
                                    <ExternalLink size={20} />
                                </span>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-slate-light mb-2 group-hover:text-teal transition-colors">
                            {project.title}
                        </h3>

                        <p className="text-slate mb-6 flex-grow">
                            {project.description}
                        </p>

                        <ul className="flex flex-wrap gap-3 font-mono text-xs text-slate-light/60 mt-auto">
                            {project.tags.map(tag => (
                                <li key={tag}>{tag}</li>
                            ))}
                        </ul>

                        <div className="absolute inset-0 bg-gradient-to-br from-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default Projects;
