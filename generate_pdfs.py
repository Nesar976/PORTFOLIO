from fpdf import FPDF

# --- Resume Content Generator ---
def create_resume(filename):
    pdf = FPDF()
    pdf.add_page()
    pdf.set_font("Arial", 'B', 16)
    pdf.cell(0, 10, "Nesar Kavri", ln=True, align="C")
    
    pdf.set_font("Arial", '', 12)
    pdf.cell(0, 10, "Software Engineer | Backend & Systems | Kubernetes", ln=True, align="C")
    pdf.ln(10)
    
    # About
    pdf.set_font("Arial", 'B', 14)
    pdf.cell(0, 10, "About", ln=True)
    pdf.set_font("Arial", '', 11)
    pdf.multi_cell(0, 6, "Focused on backend technologies, open source contribution, and building scalable systems. Experienced in architecting RESTful APIs, optimizing database queries, and developing robust backend services using Python and Go.")
    pdf.ln(5)

    # Experience
    pdf.set_font("Arial", 'B', 14)
    pdf.cell(0, 10, "Experience", ln=True)
    
    pdf.set_font("Arial", 'B', 12)
    pdf.cell(0, 8, "Software Engineering Projects | Independent & Academic", ln=True)
    pdf.set_font("Arial", '', 11)
    pdf.multi_cell(0, 6, "- Architected and deployed scalable RESTful APIs handling concurrent requests.\n- Engineered robust backend systems using Python and Go.\n- Integrated complex frontend features with backend services.")
    pdf.ln(3)
    
    pdf.set_font("Arial", 'B', 12)
    pdf.cell(0, 8, "Open Source Engineering | Community Contributions", ln=True)
    pdf.set_font("Arial", '', 11)
    pdf.multi_cell(0, 6, "- Contributed core feature implementations and critical bug fixes to high-impact repositories.\n- Engaged in technical design discussions and code reviews.\n- Developed and maintained developer tooling to streamline workflows.")
    pdf.ln(5)

    # Projects
    pdf.set_font("Arial", 'B', 14)
    pdf.cell(0, 10, "Projects", ln=True)
    
    pdf.set_font("Arial", 'B', 12)
    pdf.cell(0, 8, "Local Package Dependency Visualizer", ln=True)
    pdf.set_font("Arial", '', 11)
    pdf.multi_cell(0, 6, "A Python tool to analyze and visualize local package dependencies. Generates interactive dependency graphs to identify bottlenecks.")
    pdf.ln(3)

    pdf.set_font("Arial", 'B', 12)
    pdf.cell(0, 8, "Kubernetes Cluster Scalability Benchmarking", ln=True)
    pdf.set_font("Arial", '', 11)
    pdf.multi_cell(0, 6, "Cluster scalability and performance benchmarking using Kube-Burner. Analyzes control plane performance and resource usage under high load scenarios.")
    pdf.ln(5)

    # Skills
    pdf.set_font("Arial", 'B', 14)
    pdf.cell(0, 10, "Technical Skills", ln=True)
    pdf.set_font("Arial", '', 11)
    pdf.multi_cell(0, 6, "Languages: Python, Go, TypeScript, JavaScript, React, SQL\nBackend: Node.js, FastAPI, PostgreSQL, MongoDB, Redis\nCloud & Ops: Docker, Kubernetes, AWS, Terraform, Linux\nTooling: Git, GitHub Actions, Prometheus, Grafana")

    pdf.output(filename)

# --- Blog Content Generator ---
def create_blog(filename):
    pdf = FPDF()
    pdf.add_page()
    
    # Title
    pdf.set_font("Arial", 'B', 20)
    pdf.multi_cell(0, 10, "Start Small, Scale Huge: Understanding Cilium and eBPF in Today's Kubernetes", align="C")
    pdf.ln(10)
    
    # Author
    pdf.set_font("Arial", 'I', 12)
    pdf.cell(0, 10, "By Nesar Kavri", ln=True, align="C")
    pdf.ln(10)

    # Body
    pdf.set_font("Arial", '', 11)
    
    body = """
    In the rapidly evolving landscape of cloud-native infrastructure, traditional networking and security models often struggle to keep pace with the dynamic nature of Kubernetes. Enter Cilium, an open-source project that has revolutionized how we think about container networking, security, and observability. At its core lies eBPF (Extended Berkeley Packet Filter), a powerful technology that allows us to run sandboxed programs in the Linux kernel without changing kernel source code or loading modules.
    
    Why eBPF matters? Traditionally, networking and security policies were implemented using iptables, which can become a bottleneck at scale due to linear rule processing. eBPF changes the game by enabling efficient, programmable packet processing at the kernel level. This allows Cilium to provide high-performance networking (CNI), transparent load balancing, and deep visibility into API calls without the overhead of sidecar proxies.
    
    Furthermore, observability is no longer an afterthought. With Hubble, built on top of Cilium, engineers gain deep insights into network flows, service dependencies, and security policy enforcement in real-time. By leveraging eBPF, Hubble provides this visibility with minimal performance impact, making it an essential tool for debugging complex microservices architectures.
    
    As organizations scale their Kubernetes footprint, the need for a robust, scalable, and secure networking layer becomes critical. Cilium, powered by eBPF, offers a compelling solution that not only meets these demands but also simplifies the operational complexity of managing large-scale clusters. It's time to move beyond legacy limitations and embrace the future of cloud-native networking.
    """
    
    pdf.multi_cell(0, 6, body.strip())
    
    pdf.output(filename)

if __name__ == "__main__":
    create_resume("public/resume.pdf")
    create_blog("public/cilium-ebpf-blog.pdf")
    print("Content-rich PDFs created successfully.")
