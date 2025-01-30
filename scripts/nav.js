// Initialize nav when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Nav JS loaded'); // Debug

    // Work dropdown functionality
    const workLink = document.querySelector('.work-link');
    const workDropdown = document.querySelector('.work-dropdown');
    
    console.log('Work link:', workLink); // Debug
    console.log('Work dropdown:', workDropdown); // Debug
    
    if (workLink && workDropdown) {
        workLink.addEventListener('click', (e) => {
            e.preventDefault();
            workDropdown.classList.toggle('active');
            console.log('Dropdown clicked, active state:', workDropdown.classList.contains('active')); // Debug
        });
    }

    // Handle active states for other links
    const navLinks = document.querySelectorAll('.nav-links a:not(.work-link)');
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });

    // Mobile menu functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    const subscribe = document.querySelector('.subscribe');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinksContainer.classList.toggle('active');
            subscribe.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Contact tab functionality (if present)
    const contactTabToggle = document.querySelector('.contact-tab-toggle');
    const contactTab = document.querySelector('.contact-tab');
    
    if (contactTabToggle && contactTab) {
        contactTabToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            contactTab.classList.toggle('active');
        });
    }

    // Close menus when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav') && !e.target.closest('.mobile-menu-toggle')) {
            navLinksContainer?.classList.remove('active');
            subscribe?.classList.remove('active');
            mobileMenuToggle?.classList.remove('active');
            contactTab?.classList.remove('active');
        }
    });
});