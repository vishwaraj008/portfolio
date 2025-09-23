// Content sections for the portfolio
const sections = {
    help: `
<div class="section-content active">
    <div class="terminal-line">
        <span class="prompt">Vishwaraj@portfolio:~$</span>
        <span class="command"> help</span>
    </div>
    <div class="output">
        Available commands:<br>
        • help - Show this help menu<br>
        • about - Learn more about me<br>
        • skills - View my technical skills<br>
        • projects - Browse my projects<br>
        • experience - My work experience<br>
        • contact - Get in touch<br>
        • education - My educational background<br>
        • certifications - Professional certifications<br>
        • clear - Clear terminal<br>
        • sudo - Run as administrator
    </div>
</div>`,
    
    about: `
<div class="section-content active">
    <div class="terminal-line">
        <span class="prompt">Vishwaraj@portfolio:~$</span>
        <span class="command"> about</span>
    </div>
    <div class="output">
        <div style="margin-bottom: 15px;">
            <span style="color: #00ff88;">Name:</span> Vishwaraj Singh Chundawat<br>
            <span style="color: #00ff88;">Role:</span> Software Engineer & AI Enthusiast<br>
            <span style="color: #00ff88;">Location:</span> Pune, India<br>
            <span style="color: #00ff88;">Experience:</span> 4+ month internship
        </div>
        <div>
            Backend developer specializing in secure, high-performance systems and APIs, with
            expertise in database optimization and containerization. Enthusiastic about applying 
            AI to infrastructure and backend engineering to drive smarter, more resilient 
            enterprise-scale solutions.
        </div>
    </div>
</div>`,
    
    skills: `
<div class="section-content active">
    <div class="terminal-line">
        <span class="prompt">Vishwaraj@portfolio:~$</span>
        <span class="command"> skills</span>
    </div>
    <div class="output">
        <div class="skill-category">
            <div class="skill-title">Programming Languages:</div>
            <div class="skill-list">JavaScript, Python, C</div>
        </div>
        <div class="skill-category">
            <div class="skill-title">Frontend Technologies:</div>
            <div class="skill-list">HTML5, CSS3, Tailwind</div>
        </div>
        <div class="skill-category">
            <div class="skill-title">Backend Technologies:</div>
            <div class="skill-list">Node.js, Express.js</div>
        </div>
        <div class="skill-category">
            <div class="skill-title">AI/ML:</div>
            <div class="skill-list">TensorFlow, PyTorch, Sckit Learn, Pandas, Numpy, OpenAI API, Langchain, Qdrant, Hugging Face</div>
        </div>
        <div class="skill-category">
            <div class="skill-title">Databases:</div>
            <div class="skill-list">PostgreSQL, MongoDB, Redis, MySQL</div>
        </div>
        <div class="skill-category">
            <div class="skill-title">Tools:</div>
            <div class="skill-list">Git & GitHub, Postman, Vercel, phpMyAdmin, Sentry</div>
        </div>
        <div class="skill-category">
            <div class="skill-title">Cloud & DevOps:</div>
            <div class="skill-list">AWS, Google Cloud, Docker</div>
        </div>
    </div>
</div>`,
    
    projects: `
<div class="section-content active">
    <div class="terminal-line">
        <span class="prompt">Vishwaraj@portfolio:~$</span>
        <span class="command"> projects</span>
    </div>
    <div class="output">
        <div class="project-item">
            <div class="project-title">TradeBehavior</div>
            <div class="project-tech">Python • Sckit-Learn • Numpy • Pandas</div>
            <div class="project-desc">
                A trade behavior analyzer using clustering, regression, and statistical models on large-scale trading data.
                Designed pipelines in Python with Pandas/NumPy to process 200k+ trades, applying K-Means, linear regression, and correlation analysis to uncover sentiment-driven patterns.
                Achieved 70% faster insight generation with automated visualizations, improving anomaly detection and trading strategy evaluation.
            </div>
            <div class="project-links">
                <a href="https://github.com/vishwaraj008/Trader-Behavior-Insights.git" target="_blank">GitHub</a>
            </div>
        </div>
        
        <div class="project-item">
            <div class="project-title">SkyEyeManager</div>
            <div class="project-tech">React • Express.js • Socket.io • MySql • TypeScript</div>
            <div class="project-desc">
                A Drone Survey Management System for real-time mission planning, telemetry tracking, and fleet monitoring.
                Designed and implemented geospatial features such as flight path visualization, polygon-based survey areas, and live telemetry
                updates to support efficient drone operations.
                Improved monitoring efficiency by 40% and reduced mission planning time by 30%, enabling more reliable decision-making and seamless
                coordination across multiple drones.
            </div>
            <div class="project-links">
                <a href="https://github.com/vishwaraj008/Drone-management-system.git" target="_blank">GitHub</a>
            </div>
        </div>

         <div class="project-item">
            <div class="project-title">Solthar/mcp</div>
            <div class="project-tech">Express.js • MCP • MySql • LLM</div>
            <div class="project-desc">
                Designed and deployed a scalable MCP server to unify multiple proprietary tools under a single, secure API endpoint. Implemented a
                modular, high-availability architecture with fault tolerance and strong security, providing centralized, reliable access to critical services for
                seamless operations.
                This design reduced integration time by 60% and enabled rapid deployment of new tools in under 30 minutes, enhancing incident
                readiness, operational efficiency, and adaptability in fast-paced network and infrastructure environments.
            </div>
            <div class="project-links">
                <a href="https://github.com/vishwaraj008/Solthar-mcp.git" target="_blank">GitHub</a>
            </div>
        </div>

        <div class="project-item">
            <div class="project-title">WhatsappMicroServic</div>
            <div class="project-tech">Express.js</div>
            <div class="project-desc">
                Built a Node.js microservice that uploads media files (images, videos, documents) to the WhatsApp Business Cloud API and returns a unique
                container ID for messaging use. Integrated robust validation, retry logic with exponential backoff, and automatic file cleanup for reliable,
                production-ready performance.
                Improved media handling efficiency by 50% and enabled seamless integration across multiple client systems for secure, scalable
                WhatsApp communication.
            </div>
            <div class="project-links">
                <a href="https://github.com/vishwaraj008/whatsAppMicroService.git" target="_blank">GitHub</a>
            </div>
        </div>

        <div class="project-item">
            <div class="project-title">Git-Backup (VS Code Extension)</div>
            <div class="project-tech">Express.js • TyperScript • VS Code • Asuze</div>
            <div class="project-desc">
                Custom-built Visual Studio Code extension that lets developers instantly back up any local project or directory with one click. Designed to
                improve code safety and version assurance by automating backups directly within the IDE.
                Achieved a 70% reduction in manual backup efforts and improved recovery reliability across local development workflows.
            </div>
            <div class="project-links">
                <a href="https://github.com/vishwaraj008/git-backup.git" target="_blank">GitHub</a>
            </div>
        </div>

        <div class="project-item">
            <div class="project-title">TuneMatch</div>
            <div class="project-tech">Python • Sckit-Learn • Numpy • Pandas</div>
            <div class="project-desc">
                A personalized music suggester using user preferences, song similarity, and ML models.
                Designed and implemented a recommendation engine using algorithms like KNN and content-based filtering to suggest songs based on user
                behavior.
                Achieved 85% user satisfaction accuracy during testing, improving the relevance of recommendations and user engagement.
            </div>
            <div class="project-links">
                <a href="https://gist.github.com/e80537569057ccbd60b4c7827fa76bb8.git" target="_blank">GitHub</a>
            </div>
        </div>

        <div class="project-item">
            <div class="project-title">Moad(Mother Of All Documantation)</div>
            <div class="project-tech">Express.js • LLM</div>
            <div class="project-desc">
                Built a Node.js tool that generates clean, structured markdown documentation for JavaScript projects by parsing source code and preserving
                the original folder hierarchy. Enhanced with natural language logic summaries, making it ideal for onboarding, handovers, and codebase
                maintainability.
                Reduced documentation time by over 60%, improving onboarding speed and code comprehension across teams.
            </div>
            <div class="project-links">
                <a href="https://github.com/vishwaraj008/MoadV2.git" target="_blank">GitHub</a>
            </div>
        </div>
        
        <div class="project-item">
            <div class="project-title">Athena/RAG</div>
            <div class="project-tech">Express.js • LangChain • LLM • Embeddings • Vector DB</div>
            <div class="project-desc">
                Developed a LangChain-powered platform capable of real-time, context-aware responses by integrating embeddings with vector search.
                Designed a secure retrieval pipeline that supports rapid data access and ensures integrity, aligning with SOC requirements for quick,
                Jul 2025 - Aug 2025
                accurate information analysis.
                The system reduced query response time by 40% and improved accuracy by 35%, enabling faster incident investigation, enhanced
                decision-making, and reliable information delivery for security and network operations.
            </div>
            <div class="project-links">
                <a href="https://github.com/vishwaraj008/Athena.git" target="_blank">GitHub</a>
            </div>
        </div>
    </div>
</div>`,
    
    contact: `
<div class="section-content active">
    <div class="terminal-line">
        <span class="prompt">Vishwaraj@portfolio:~$</span>
        <span class="command"> contact</span>
    </div>
    <div class="output">
        <div class="contact-item">
            <span class="contact-label">Email:</span>
            <a href="mailto:vishwarajchundawat008@gmail.com">vishwarajchundawat008@gmail.com</a>
         </div>
        <div class="contact-item">
            <span class="contact-label">GitHub:</span> <a href="https://github.com/vishwaraj008" target="_blank">https://github.com/vishwaraj008</a>

        </div>
        <div class="contact-item">
        <span class="contact-label">LinkedIn:</span>
            <a href="https://www.linkedin.com/in/vishwaraj-chundawat-9791b5376" target="_blank">
             https://www.linkedin.com/in/vishwaraj-chundawat-9791b5376
             </a>
        </div>

        
        <div class="contact-item">
            <span class="contact-label">Instagram:</span> vishwa_raj_008
        </div>
        <div class="contact-item">
            <span class="contact-label">Location:</span> Pune, India
        </div>
        
        <div style="margin-top: 25px; border-top: 1px solid #333; padding-top: 20px;">
            <div class="output" style="color: #00ff88; margin-bottom: 15px;">Send me an inquiry:</div>
            <form id="contactForm" class="contact-form">
                <div class="form-group">
                    <label for="fullName">Full Name:</label>
                    <input type="text" id="fullName" name="fullName" required>
                </div>
                <div class="form-group">
                    <label for="mobile">Mobile Number:</label>
                    <input type="tel" id="mobile" name="mobile" required>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                </div>
                <button type="submit" class="submit-btn">Send Inquiry</button>
            </form>
            <div id="formMessage"></div>
        </div>
    </div>
</div>`,

    education: `
<div class="section-content active">
    <div class="terminal-line">
        <span class="prompt">Vishwaraj@portfolio:~$</span>
        <span class="command"> education</span>
    </div>
    <div class="output">
        <div class="education-item">
            <div class="education-degree">🎓 Bachelor of Technology (B.Tech)</div>
            <div class="education-school">Computer Science & Business System</div>
            <div class="education-details">
                <span class="education-year">2022 - 2026</span>
                <span class="education-grade">CGPA: 8.4/10</span>
            </div>
            <div class="education-location">Pune, India</div>
        </div>
        
        <div class="education-item">
            <div class="education-degree">📚 12th Grade (Higher Secondary)</div>
            <div class="education-school">Science Stream (PCM + Computer Science)</div>
            <div class="education-details">
                <span class="education-year">2021 - 2022</span>
                <span class="education-grade">Percentage: 81.2%</span>
            </div>
            <div class="education-location">Udaipur, Rajasthan, India</div>
        </div>
        
        <div class="education-item">
            <div class="education-degree">📖 10th Grade (Secondary)</div>
            <div class="education-school">CBSE Board</div>
            <div class="education-details">
                <span class="education-year">2019 - 2020</span>
                <span class="education-grade">Percentage: 85.6%</span>
            </div>
            <div class="education-location">Udaipur, Rajasthan, India</div>
        </div>
    </div>
</div>`,

    experience: `
<div class="section-content active">
    <div class="terminal-line">
        <span class="prompt">Vishwaraj@portfolio:~$</span>
        <span class="command"> experience</span>
    </div>
    <div class="output">
        <div class="experience-item">
            <div class="experience-title">Software Development Intern</div>
            <div class="experience-company">nDimension Studio</div>
            <div class="experience-duration">June 2025 - August 2025 (2 months)</div>
            <div class="experience-location">Udaipur, India</div>
            <div class="experience-description">
                   • Developed and maintained RESTful APIs for backend systems, improving application performance by 30%.
                   • Designed optimized database schemas and queries, reducing response times by 25%.
                   • Enhanced internal tools for better system monitoring and workflow efficiency (20% improvement).
                   • Implemented automated testing, achieving 90% coverage and reducing regressions by 50%.
            </div>
        </div>
        
        <div class="experience-item">
            <div class="experience-title">Backend Intern </div>
            <div class="experience-company">FBSPL</div>
            <div class="experience-duration">June 2025 - August 2025 (2 months)</div>
            <div class="experience-location">Remote</div>
            <div class="experience-description">
                   • Integrated secure third-party APIs, expanding service capabilities by 15%.
                   • Resolved backend performance issues, achieving under-24-hour average resolution time.
                   • Introduced distributed logging, improving error detection and reducing downtime by 25%.
                   • Executed migration from monolithic to containerised architecture, lowering infrastructure costs by 40%.
            </div>
        </div>
        
        <div class="experience-item">
            <div class="experience-title">AI Intern</div>
            <div class="experience-company">Arealis</div>
            <div class="experience-duration">2025 September - Present</div>
            <div class="experience-location">Hybrid</div>
            <div class="experience-description">
                   • Applied SALMA architecture to develop scalable, agentic AI-driven systems and intelligent workflows.
                   • Built and optimised AI workflows and agents by working on data preprocessing, model integration, and pipeline optimisation.
                   • Designed retrieval and prediction workflows to enhance reasoning, adaptability, and performance.
                   • Contributed to multilingual AI capabilities, focusing on clarity, scalability, and user-centric outcomes.
                   • Improved pipeline efficiency by 25% through optimization of preprocessing and integration workflows.
                   • Increased retrieval accuracy by 18%, enhancing reasoning quality in AI agents.
            </div>
        </div>
    </div>
</div>`,

    certifications: `
<div class="section-content active">
    <div class="terminal-line">
        <span class="prompt">Vishwaraj@portfolio:~$</span>
        <span class="command"> certifications</span>
    </div>
    <div class="output">
        <div class="cert-item">
            <div class="cert-title">AWS Certified Cloud Practitioner</div>
            <div class="cert-issuer">Amazon Web Services</div>
            <div class="cert-date">Issued: March 2024</div>
            <div class="cert-id">Credential ID: AWS-CCP-2024-VS</div>
        </div>
        
        <div class="cert-item">
            <div class="cert-title">IIT Kharagpur Certified Cloud Computing</div>
            <div class="cert-issuer">IIT Kharagpur </div>
            <div class="cert-date">Completed: April 2025</div>
            <div class="cert-id">Certificate ID: NPTEL25CS11S1055204328</div>
        </div>
        
        <div class="cert-item">
            <div class="cert-title">IIT Kharagpur Certified Database Management System</div>
            <div class="cert-issuer">IIT Kharagpur</div>
            <div class="cert-date">Completed: April 2024</div>
            <div class="cert-id">Certificate ID: NPTEL24CS21S650701897</div>
        </div>
    </div>
</div>`
};

// Function to handle contact form submission
function handleContactForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = {
                fullName: document.getElementById('fullName').value,
                mobile: document.getElementById('mobile').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };
            
            const messageDiv = document.getElementById('formMessage');
            messageDiv.innerHTML = '<div style="color: #00ff88;">Sending inquiry...</div>';
            
            try {
                const response = await fetch('http://localhost:3000/send-inquiry', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                
                if (response.ok) {
                    messageDiv.innerHTML = '<div style="color: #00ff88;">✅ Inquiry sent successfully! I will get back to you soon.</div>';
                    form.reset();
                } else {
                    messageDiv.innerHTML = '<div style="color: #ff6b6b;">❌ Error sending inquiry. Please try again.</div>';
                }
            } catch (error) {
                console.error('Error:', error);
                messageDiv.innerHTML = '<div style="color: #ff6b6b;">❌ Error sending inquiry. Please check if the server is running.</div>';
            }
        });
    }
}

// Function to show different sections
function showSection(sectionName) {
    const content = document.getElementById('sectionContent');
    content.innerHTML = sections[sectionName] || sections['help'];
    
    // Add command line
    const commandLine = document.createElement('div');
    commandLine.innerHTML = `
        <div class="terminal-input" style="margin-top: 20px;">
            <span class="input-prompt">Vishwaraj@portfolio:~$</span>
            <input type="text" class="command-input" autofocus>
            <div class="cursor"></div>
        </div>
    `;
    content.appendChild(commandLine);
    
    // Focus the new input
    const newInput = commandLine.querySelector('.command-input');
    newInput.focus();
    
    // Add event listener
    newInput.addEventListener('keypress', handleCommand);
    
    // If contact section, set up form handler
    if (sectionName === 'contact') {
        setTimeout(handleContactForm, 100);
    }
}

// Function to run special commands
function runCommand(cmd) {
    if (cmd === 'clear') {
        document.getElementById('sectionContent').innerHTML = '';
    } else if (cmd === 'sudo') {
        const content = document.getElementById('sectionContent');
        content.innerHTML = `
            <div class="terminal-line">
                <span class="prompt">Vishwaraj@portfolio:~$</span>
                <span class="command"> sudo whoami</span>
            </div>
            <div class="output" style="color: #ff6b6b;">
                root<br>
                Access granted! You now have admin privileges.
            </div>
        `;
    }
}

// Function to handle command input
function handleCommand(e) {
    if (e.key === 'Enter') {
        const command = e.target.value.toLowerCase().trim();
        
        if (sections[command]) {
            showSection(command);
        } else if (command === 'clear') {
            runCommand('clear');
        } else if (command === 'sudo' || command === 'sudo whoami') {
            runCommand('sudo');
        } else if (command !== '') {
            const content = document.getElementById('sectionContent');
            content.innerHTML = `
                <div class="terminal-line">
                    <span class="prompt">Vishwaraj@portfolio:~$</span>
                    <span class="command"> ${e.target.value}</span>
                </div>
                <div class="output" style="color: #ff6b6b;">
                    Command not found: ${e.target.value}<br>
                    Type 'help' to see available commands.
                </div>
            `;
        }
        
        e.target.value = '';
    }
}

// Function to update time in status bar
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleString();
    document.querySelector('.status-bar span:last-child').textContent = timeString;
}

// 3D Card Interactive Animation
let isFlipped = false;

function init3DCard() {
    const card = document.getElementById('idCard');
    const container = document.querySelector('.card-container');
    
    if (!card || !container) return;

    // Mouse move handler for 3D rotation
    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const rotateX = (e.clientY - centerY) / 10;
        const rotateY = (centerX - e.clientX) / 10;
        
        if (!isFlipped) {
            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        } else {
            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY + 180}deg)`;
        }
    });

    // Mouse leave handler - return to center
    container.addEventListener('mouseleave', () => {
        if (!isFlipped) {
            card.style.transform = 'rotateX(0deg) rotateY(0deg)';
        } else {
            card.style.transform = 'rotateX(0deg) rotateY(180deg)';
        }
    });

    // Click handler for card flip
    card.addEventListener('click', () => {
        isFlipped = !isFlipped;
        if (isFlipped) {
            card.style.transform = 'rotateY(180deg)';
        } else {
            card.style.transform = 'rotateY(0deg)';
        }
    });

    // Add subtle floating animation
    let floatDirection = 1;
    let floatPosition = 0;
    
    setInterval(() => {
        floatPosition += 0.5 * floatDirection;
        if (floatPosition > 3 || floatPosition < -3) {
            floatDirection *= -1;
        }
        container.style.transform = `translateY(${floatPosition}px)`;
    }, 100);
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize command input handler
    document.getElementById('commandInput').addEventListener('keypress', handleCommand);
    
    // Start time updates
    setInterval(updateTime, 1000);
    updateTime();
    
    // Initialize 3D card
    setTimeout(init3DCard, 100);
});
