import { motion } from 'framer-motion';

const Experience = () => {
    const jobs = [
        {
            role: 'Software Engineering Projects',
            company: 'Independent & Academic',
            points: [
                'Architected and deployed scalable RESTful APIs handling concurrent requests with optimized database queries.',
                'Engineered robust backend systems using Python and Go, focusing on performance and maintainability.',
                'Integrated complex frontend features with backend services, ensuring seamless data flow and user experience.'
            ]
        },
        {
            role: 'Open Source Engineering',
            company: 'Community Contributions',
            points: [
                'Contributed core feature implementations and critical bug fixes to high-impact open source repositories.',
                'Engaged in technical design discussions and code reviews to maintain high code quality standards.',
                'Developed and maintained developer tooling to streamline workflows and improve productivity.'
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 px-6 sm:px-12 max-w-3xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 mb-12"
            >
                <span className="text-teal font-mono text-xl">02.</span>
                <h2 className="text-3xl font-bold text-slate-light">Experience</h2>
                <div className="h-px bg-navy-lighter flex-grow max-w-xs ml-4"></div>
            </motion.div>

            <div className="space-y-12">
                {jobs.map((job, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="pl-6 border-l-2 border-navy-lighter hover:border-teal transition-colors"
                    >
                        <h3 className="text-xl font-bold text-slate-light mb-1">
                            {job.role} <span className="text-teal">@ {job.company}</span>
                        </h3>
                        <ul className="space-y-2 mt-4">
                            {job.points.map((point, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-teal mt-1.5 flex-shrink-0">▹</span>
                                    <span className="text-slate">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
