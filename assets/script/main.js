const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


(function() {
 
  emailjs.init('uMvW7rBIsvmoYhOUP');
})();

function PageTransitions() {
  // Optimized control button click handling
  sectBtn.forEach((btn, index) => {
    btn.addEventListener('click', function () {
      // Remove active class from current button
      const currentBtn = document.querySelector('.active-btn');
      if (currentBtn) {
        currentBtn.classList.remove('active-btn');
      }
      
      // Add active class to clicked button
      this.classList.add('active-btn');
      
      // Get the target section id
      const targetId = this.getAttribute('data-id');
      
      // Hide all sections with smooth transition
      sections.forEach((section) => {
        section.classList.remove('active');
      });
      
      // Show target section with smooth transition
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        // Small delay for smoother transition
        setTimeout(() => {
          targetSection.classList.add('active');
        }, 50);
      }
    });
  });

  // Optimized section click handling (for better performance)
  allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
      // Remove active class from all buttons
      sectBtn.forEach((btn) => {
        btn.classList.remove('active-btn');
      });

      // Add active class to clicked button
      e.target.classList.add('active-btn');
      
      // Hide all sections
      sections.forEach((section) => {
        section.classList.remove('active');
      });

      // Show target section with smooth transition
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.classList.add('active');
        }, 50);
      }
    }
  });
}

// Contact Form Handling
function handleContactForm() {
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Show loading state
      const originalText = submitBtn.querySelector('.btn-text').textContent;
      submitBtn.querySelector('.btn-text').textContent = 'Sending...';
      submitBtn.disabled = true;
      
      // Get form data
      const formData = {
        user_name: this.user_name.value,
        user_email: this.user_email.value,
        message: this.message.value,
        to_email: 'louiepable23@gmail.com'
      };
      
      // Send email using EmailJS
      emailjs.send('service_x76mjz8', 'template_iudaz2b', formData)
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          
          // Show success message
          showNotification('Message sent successfully!', 'success');
          
          // Reset form
          contactForm.reset();
        }, function(error) {
          console.log('FAILED...', error);
          
          // Show error message
          showNotification('Failed to send message. Please try again.', 'error');
        })
        .finally(function() {
          // Reset button state
          submitBtn.querySelector('.btn-text').textContent = originalText;
          submitBtn.disabled = false;
        });
    });
  }
}

// Notification function
function showNotification(message, type) {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  
  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 20px;
    border-radius: 5px;
    color: white;
    font-weight: 500;
    z-index: 1000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    ${type === 'success' ? 'background-color: #4CAF50;' : 'background-color: #f44336;'}
  `;
  
  // Add to page
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 5000);
}

// Initialize page transitions
PageTransitions();

// Initialize contact form
handleContactForm();

// Add smooth scrolling for better UX
document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scrolling to all internal links
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
