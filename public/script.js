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
            <span style="color: #00ff88;">Name:</span> Vishwaraj Singh<br>
            <span style="color: #00ff88;">Role:</span> Software Engineer & AI Enthusiast<br>
            <span style="color: #00ff88;">Location:</span> Pune, India<br>
            <span style="color: #00ff88;">Experience:</span> 2 month internship
        </div>
        <div>
            I'm a passionate software engineer with expertise in full-stack development,
            artificial intelligence, and modern web technologies. I love building 
            innovative solutions that solve real-world problems and am always 
            exploring the latest in AI and machine learning.
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
            <div class="skill-list">Node.js, Express</div>
        </div>
        <div class="skill-category">
            <div class="skill-title">AI/ML:</div>
            <div class="skill-list">TensorFlow, PyTorch, OpenAI API, Langchain, Hugging Face</div>
        </div>
        <div class="skill-category">
            <div class="skill-title">Databases:</div>
            <div class="skill-list">PostgreSQL, MongoDB, Redis, MySQL</div>
        </div>
        <div class="skill-category">
            <div class="skill-title">Cloud & DevOps:</div>
            <div class="skill-list">AWS, Google Cloud</div>
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
            <div class="project-title">🤖 AI-Powered Chat Assistant</div>
            <div class="project-tech">Python • OpenAI • FastAPI • React • PostgreSQL</div>
            <div class="project-desc">
                Intelligent conversational AI with context awareness, 
                memory management, and custom knowledge base integration.
            </div>
            <div class="project-links">
                <a href="#" target="_blank">GitHub</a>
                <a href="#" target="_blank">Live Demo</a>
            </div>
        </div>
        
        <div class="project-item">
            <div class="project-title">📊 Real-time Analytics Dashboard</div>
            <div class="project-tech">React • Node.js • Socket.io • MongoDB • D3.js</div>
            <div class="project-desc">
                Interactive dashboard with real-time data visualization,
                custom metrics tracking, and automated reporting.
            </div>
            <div class="project-links">
                <a href="#" target="_blank">GitHub</a>
                <a href="#" target="_blank">Live Demo</a>
            </div>
        </div>
        
        <div class="project-item">
            <div class="project-title">🚀 E-Commerce Platform</div>
            <div class="project-tech">Next.js • TypeScript • Stripe • Prisma • AWS</div>
            <div class="project-desc">
                Full-stack e-commerce solution with payment processing,
                inventory management, and advanced analytics.
            </div>
            <div class="project-links">
                <a href="#" target="_blank">GitHub</a>
                <a href="#" target="_blank">Live Demo</a>
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
            <div class="education-school">Computer Science & Engineering</div>
            <div class="education-details">
                <span class="education-year">2021 - 2025</span>
                <span class="education-grade">CGPA: 8.2/10</span>
            </div>
            <div class="education-location">Pune, India</div>
        </div>
        
        <div class="education-item">
            <div class="education-degree">📚 12th Grade (Higher Secondary)</div>
            <div class="education-school">Science Stream (PCM + Computer Science)</div>
            <div class="education-details">
                <span class="education-year">2019 - 2021</span>
                <span class="education-grade">Percentage: 85.2%</span>
            </div>
            <div class="education-location">Rajasthan, India</div>
        </div>
        
        <div class="education-item">
            <div class="education-degree">📖 10th Grade (Secondary)</div>
            <div class="education-school">CBSE Board</div>
            <div class="education-details">
                <span class="education-year">2017 - 2019</span>
                <span class="education-grade">Percentage: 87.4%</span>
            </div>
            <div class="education-location">Rajasthan, India</div>
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
            <div class="experience-title">💼 Software Development Intern</div>
            <div class="experience-company">Tech Solutions Pvt Ltd</div>
            <div class="experience-duration">June 2024 - August 2024 (2 months)</div>
            <div class="experience-location">Pune, India</div>
            <div class="experience-description">
                • Developed and maintained web applications using React.js and Node.js<br>
                • Collaborated with senior developers on full-stack projects<br>
                • Implemented RESTful APIs and integrated third-party services<br>
                • Participated in code reviews and agile development practices<br>
                • Gained hands-on experience with modern development tools and workflows
            </div>
        </div>
        
        <div class="experience-item">
            <div class="experience-title">🚀 Freelance Developer</div>
            <div class="experience-company">Self-Employed</div>
            <div class="experience-duration">January 2024 - Present</div>
            <div class="experience-location">Remote</div>
            <div class="experience-description">
                • Built custom websites and web applications for small businesses<br>
                • Developed AI-powered chatbots and automation tools<br>
                • Created responsive designs with modern UI/UX principles<br>
                • Managed client relationships and project deliverables
            </div>
        </div>
        
        <div class="experience-item">
            <div class="experience-title">📚 Open Source Contributor</div>
            <div class="experience-company">Various Projects</div>
            <div class="experience-duration">2023 - Present</div>
            <div class="experience-location">Remote</div>
            <div class="experience-description">
                • Contributed to open-source Python and JavaScript projects<br>
                • Fixed bugs and implemented new features<br>
                • Improved documentation and code quality<br>
                • Engaged with developer communities on GitHub
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
            <div class="cert-title">🏆 AWS Certified Cloud Practitioner</div>
            <div class="cert-issuer">Amazon Web Services</div>
            <div class="cert-date">Issued: March 2024</div>
            <div class="cert-id">Credential ID: AWS-CCP-2024-VS</div>
        </div>
        
        <div class="cert-item">
            <div class="cert-title">🤖 Machine Learning Specialization</div>
            <div class="cert-issuer">Coursera - Stanford University</div>
            <div class="cert-date">Completed: January 2024</div>
            <div class="cert-id">Certificate ID: ML-SPEC-2024-001</div>
        </div>
        
        <div class="cert-item">
            <div class="cert-title">🌐 Full Stack Web Development</div>
            <div class="cert-issuer">freeCodeCamp</div>
            <div class="cert-date">Completed: November 2023</div>
            <div class="cert-id">Certificate ID: FCC-FSWD-2023</div>
        </div>
        
        <div class="cert-item">
            <div class="cert-title">🐍 Python for Data Science</div>
            <div class="cert-issuer">IBM - Coursera</div>
            <div class="cert-date">Completed: September 2023</div>
            <div class="cert-id">Certificate ID: IBM-PY4DS-2023</div>
        </div>
        
        <div class="cert-item">
            <div class="cert-title">⚛️ React.js Developer Certification</div>
            <div class="cert-issuer">Meta - Coursera</div>
            <div class="cert-date">Completed: August 2023</div>
            <div class="cert-id">Certificate ID: META-REACT-2023</div>
        </div>
        
        <div class="cert-item">
            <div class="cert-title">🔒 Cybersecurity Fundamentals</div>
            <div class="cert-issuer">Cisco Networking Academy</div>
            <div class="cert-date">Completed: June 2023</div>
            <div class="cert-id">Certificate ID: CISCO-CYBSEC-2023</div>
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
