import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-6 sm:px-12 max-w-4xl mx-auto text-center mb-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <p className="text-teal font-mono text-lg mb-4">06. What's Next?</p>
                <h2 className="text-4xl sm:text-5xl font-bold text-slate-light mb-6">Get In Touch</h2>
                <p className="text-slate text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                    I'm currently looking for new opportunities and my inbox is always open.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <motion.a
                    href="mailto:nesar.kavri@example.com"
                    whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(100, 255, 218, 0.2)' }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block border-2 border-teal text-teal px-8 py-4 rounded font-mono text-sm hover:bg-teal/10 transition-colors"
                >
                    Say Hello
                </motion.a>
            </motion.div>
        </section>
    );
};

export default Contact;
