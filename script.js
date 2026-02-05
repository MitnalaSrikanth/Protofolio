// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close');
const hireMeBtn = document.getElementById('hireMeBtn');
const contactInfoBtn = document.getElementById('contactInfoBtn');
const additionalInfoBtn = document.getElementById('additionalInfoBtn');
const contactForm = document.getElementById('contactForm');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Modal Functions
function openModal(title, content) {
    modalTitle.textContent = title;
    modalBody.innerHTML = content;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking the X button
closeBtn.addEventListener('click', closeModal);

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Escape key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// Hire Me Button - Interactive Response
hireMeBtn.addEventListener('click', () => {
    const content = `
        <div style="text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🚀</div>
            <h4 style="color: #667eea; margin-bottom: 1rem;">Excited to Work With You!</h4>
            <p style="margin-bottom: 1.5rem;">I'm available for freelance projects, full-time positions, and consulting opportunities.</p>
            
            <div style="background: #f8f9fa; padding: 1rem; border-radius: 10px; margin-bottom: 1.5rem;">
                <h5 style="color: #333; margin-bottom: 0.5rem;">Why Hire Me?</h5>
                <ul style="text-align: left; color: #666;">
                    <li>✅ 5+ years of professional experience</li>
                    <li>✅ Proven track record of successful projects</li>
                    <li>✅ Strong problem-solving skills</li>
                    <li>✅ Excellent communication and teamwork</li>
                    <li>✅ Always learning and adapting to new technologies</li>
                </ul>
            </div>
            
            <div style="margin-bottom: 1.5rem;">
                <h5 style="color: #333; margin-bottom: 0.5rem;">Available For:</h5>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; justify-content: center;">
                    <span style="background: #667eea; color: white; padding: 0.3rem 0.8rem; border-radius: 15px; font-size: 0.8rem;">Web Development</span>
                    <span style="background: #667eea; color: white; padding: 0.3rem 0.8rem; border-radius: 15px; font-size: 0.8rem;">UI/UX Design</span>
                    <span style="background: #667eea; color: white; padding: 0.3rem 0.8rem; border-radius: 15px; font-size: 0.8rem;">Consulting</span>
                    <span style="background: #667eea; color: white; padding: 0.3rem 0.8rem; border-radius: 15px; font-size: 0.8rem;">Remote Work</span>
                </div>
            </div>
            
            <button onclick="closeModal(); document.getElementById('contact').scrollIntoView({behavior: 'smooth'});" 
                    style="background: linear-gradient(45deg, #667eea, #764ba2); color: white; border: none; padding: 12px 24px; border-radius: 25px; cursor: pointer; font-weight: 600;">
                Get In Touch
            </button>
        </div>
    `;
    openModal('Hire Me', content);
});

// Contact Info Button - Interactive Response
contactInfoBtn.addEventListener('click', () => {
    const content = `
        <div style="text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">📞</div>
            <h4 style="color: #667eea; margin-bottom: 1rem;">Let's Connect!</h4>
            <p style="margin-bottom: 1.5rem;">Feel free to reach out through any of these channels:</p>
            
            <div style="text-align: left; margin-bottom: 1.5rem;">
                <div style="display: flex; align-items: center; margin-bottom: 1rem; padding: 0.8rem; background: #f8f9fa; border-radius: 8px;">
                    <i class="fas fa-envelope" style="color: #667eea; margin-right: 1rem; width: 20px;"></i>
                    <div>
                        <strong>Email:</strong><br>
                        <a href="mailto:your.email@example.com" style="color: #667eea; text-decoration: none;">your.email@example.com</a>
                    </div>
                </div>
                
                <div style="display: flex; align-items: center; margin-bottom: 1rem; padding: 0.8rem; background: #f8f9fa; border-radius: 8px;">
                    <i class="fas fa-phone" style="color: #667eea; margin-right: 1rem; width: 20px;"></i>
                    <div>
                        <strong>Phone:</strong><br>
                        <a href="tel:+15551234567" style="color: #667eea; text-decoration: none;">+1 (555) 123-4567</a>
                    </div>
                </div>
                
                <div style="display: flex; align-items: center; margin-bottom: 1rem; padding: 0.8rem; background: #f8f9fa; border-radius: 8px;">
                    <i class="fab fa-linkedin" style="color: #667eea; margin-right: 1rem; width: 20px;"></i>
                    <div>
                        <strong>LinkedIn:</strong><br>
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" style="color: #667eea; text-decoration: none;">linkedin.com/in/yourprofile</a>
                    </div>
                </div>
                
                <div style="display: flex; align-items: center; margin-bottom: 1rem; padding: 0.8rem; background: #f8f9fa; border-radius: 8px;">
                    <i class="fab fa-github" style="color: #667eea; margin-right: 1rem; width: 20px;"></i>
                    <div>
                        <strong>GitHub:</strong><br>
                        <a href="https://github.com/yourusername" target="_blank" style="color: #667eea; text-decoration: none;">github.com/yourusername</a>
                    </div>
                </div>
                
                <div style="display: flex; align-items: center; padding: 0.8rem; background: #f8f9fa; border-radius: 8px;">
                    <i class="fas fa-map-marker-alt" style="color: #667eea; margin-right: 1rem; width: 20px;"></i>
                    <div>
                        <strong>Location:</strong><br>
                        Your City, Country
                    </div>
                </div>
            </div>
            
            <div style="background: #e8f4fd; padding: 1rem; border-radius: 8px; border-left: 4px solid #667eea;">
                <p style="margin: 0; color: #666; font-size: 0.9rem;">
                    <strong>Response Time:</strong> I typically respond within 24 hours during business days.
                </p>
            </div>
        </div>
    `;
    openModal('Contact Information', content);
});

// Additional Info Button - Interactive Response
additionalInfoBtn.addEventListener('click', () => {
    const content = `
        <div style="text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">💡</div>
            <h4 style="color: #667eea; margin-bottom: 1rem;">More About Me</h4>
            
            <div style="text-align: left; margin-bottom: 1.5rem;">
                <h5 style="color: #333; margin-bottom: 0.5rem;">🎯 Career Goals</h5>
                <p style="color: #666; line-height: 1.6;">
                    I aim to work on innovative projects that make a positive impact on people's lives. 
                    My goal is to continue growing as a developer while contributing to meaningful technology solutions.
                </p>
            </div>
            
            <div style="text-align: left; margin-bottom: 1.5rem;">
                <h5 style="color: #333; margin-bottom: 0.5rem;">🎨 Hobbies & Interests</h5>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
                    <span style="background: #f8f9fa; padding: 0.3rem 0.8rem; border-radius: 15px; font-size: 0.8rem;">📚 Reading</span>
                    <span style="background: #f8f9fa; padding: 0.3rem 0.8rem; border-radius: 15px; font-size: 0.8rem;">🎵 Music</span>
                    <span style="background: #f8f9fa; padding: 0.3rem 0.8rem; border-radius: 15px; font-size: 0.8rem;">🏃 Running</span>
                    <span style="background: #f8f9fa; padding: 0.3rem 0.8rem; border-radius: 15px; font-size: 0.8rem;">📷 Photography</span>
                    <span style="background: #f8f9fa; padding: 0.3rem 0.8rem; border-radius: 15px; font-size: 0.8rem;">🎮 Gaming</span>
                    <span style="background: #f8f9fa; padding: 0.3rem 0.8rem; border-radius: 15px; font-size: 0.8rem;">✈️ Travel</span>
                </div>
            </div>
            
            <div style="text-align: left; margin-bottom: 1.5rem;">
                <h5 style="color: #333; margin-bottom: 0.5rem;">🏆 Achievements</h5>
                <ul style="color: #666; line-height: 1.6;">
                    <li>🥇 Winner of Hackathon 2023</li>
                    <li>📜 AWS Certified Developer</li>
                    <li>🌟 Contributed to 50+ open source projects</li>
                    <li>📚 Technical blog with 10k+ monthly readers</li>
                    <li>🎤 Speaker at Tech Conference 2023</li>
                </ul>
            </div>
            
            <div style="text-align: left; margin-bottom: 1.5rem;">
                <h5 style="color: #333; margin-bottom: 0.5rem;">🌟 Fun Facts</h5>
                <ul style="color: #666; line-height: 1.6;">
                    <li>☕ I drink 3 cups of coffee daily</li>
                    <li>🐱 Cat person with 2 rescue cats</li>
                    <li>🌍 Visited 15+ countries</li>
                    <li>💻 Started coding at age 12</li>
                    <li>🎯 Can solve a Rubik's cube in under 2 minutes</li>
                </ul>
            </div>
            
            <div style="background: linear-gradient(45deg, #667eea, #764ba2); color: white; padding: 1rem; border-radius: 8px;">
                <p style="margin: 0; font-weight: 600;">
                    "The only way to do great work is to love what you do." - Steve Jobs
                </p>
            </div>
        </div>
    `;
    openModal('Additional Information', content);
});

// Contact Form Submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<span class="loading"></span> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual implementation)
    setTimeout(() => {
        // Show success message
        const content = `
            <div style="text-align: center;">
                <div style="font-size: 3rem; margin-bottom: 1rem;">✅</div>
                <h4 style="color: #28a745; margin-bottom: 1rem;">Message Sent Successfully!</h4>
                <p style="margin-bottom: 1rem;">Thank you for reaching out, ${name}!</p>
                <p style="color: #666; margin-bottom: 1.5rem;">
                    I've received your message and will get back to you within 24 hours. 
                    You can also expect a confirmation email at ${email}.
                </p>
                <div style="background: #f8f9fa; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem;">
                    <h5 style="color: #333; margin-bottom: 0.5rem;">Message Summary:</h5>
                    <p style="color: #666; margin: 0;"><strong>Subject:</strong> ${subject}</p>
                </div>
                <button onclick="closeModal(); contactForm.reset();" 
                        style="background: linear-gradient(45deg, #28a745, #20c997); color: white; border: none; padding: 12px 24px; border-radius: 25px; cursor: pointer; font-weight: 600;">
                    Close
                </button>
            </div>
        `;
        openModal('Success!', content);
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Reset form
        contactForm.reset();
    }, 2000);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.skill-category, .project-card, .section-title');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add typing effect to profile name
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const profileName = document.querySelector('.profile-info h2');
    if (profileName) {
        const originalText = profileName.innerHTML;
        setTimeout(() => {
            typeWriter(profileName, originalText, 50);
        }, 500);
    }
});

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Console welcome message
console.log('%c👋 Welcome to my portfolio!', 'font-size: 20px; color: #667eea; font-weight: bold;');
console.log('%cFeel free to explore my projects and get in touch!', 'font-size: 14px; color: #666;');
