import { motion } from 'framer-motion';
import { Code, Server, Cloud, Terminal } from 'lucide-react';
import { FaPython, FaGolang, FaReact, FaNodeJs, FaDocker, FaLinux, FaGitAlt, FaAws } from 'react-icons/fa6';
import { SiTypescript, SiJavascript, SiPostgresql, SiMongodb, SiKubernetes, SiTerraform, SiFastapi, SiRedis } from 'react-icons/si';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            icon: <Code className="w-6 h-6 text-teal" />,
            skills: [
                { name: 'Python', icon: <FaPython className="text-blue-400" /> },
                { name: 'Go', icon: <FaGolang className="text-cyan-400" /> },
                { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
                { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
                { name: 'React', icon: <FaReact className="text-cyan-400" /> },
                { name: 'SQL', icon: <SiPostgresql className="text-blue-300" /> }
            ]
        },
        {
            title: 'Backend & Systems',
            icon: <Server className="w-6 h-6 text-teal" />,
            skills: [
                { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
                { name: 'FastAPI', icon: <SiFastapi className="text-teal" /> },
                { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-300" /> },
                { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
                { name: 'Redis', icon: <SiRedis className="text-red-500" /> }
            ]
        },
        {
            title: 'Cloud & Kubernetes',
            icon: <Cloud className="w-6 h-6 text-teal" />,
            skills: [
                { name: 'Kubernetes', icon: <SiKubernetes className="text-blue-500" /> },
                { name: 'Docker', icon: <FaDocker className="text-blue-400" /> },
                { name: 'AWS', icon: <FaAws className="text-orange-400" /> },
                { name: 'Terraform', icon: <SiTerraform className="text-purple-400" /> }
            ]
        },
        {
            title: 'Tooling & DevOps',
            icon: <Terminal className="w-6 h-6 text-teal" />,
            skills: [
                { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
                { name: 'Linux', icon: <FaLinux className="text-slate-300" /> },
                { name: 'Bash', icon: <Terminal className="text-green-400" /> },
                { name: 'CI/CD', icon: <Server className="text-slate-400" /> }
            ]
        }
    ];

    return (
        <section id="skills" className="py-20 px-6 sm:px-12 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16 text-center"
            >
                <span className="text-teal font-mono text-xl block mb-2">06.</span>
                <h2 className="text-3xl font-bold text-slate-light">Technical Arsenal</h2>
                <div className="h-1 w-20 bg-teal mx-auto mt-4 rounded-full"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-teal/10 rounded-lg">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-slate-light">{category.title}</h3>
                        </div>

                        <div className="flex flex-col gap-3">
                            {category.skills.map((skill, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-3 p-3 rounded bg-navy-light/50 border border-navy-lighter hover:border-teal/50 hover:bg-navy-light transition-all cursor-default group"
                                >
                                    <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                                        {skill.icon}
                                    </span>
                                    <span className="text-slate-light/90 font-mono text-sm group-hover:text-teal transition-colors">
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
