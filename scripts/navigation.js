// scripts/navigation.js
document.addEventListener('DOMContentLoaded', () => {
    // Content swapping
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function showSection(sectionId) {
        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Show selected section
        const activeSection = document.querySelector(sectionId);
        if (activeSection) activeSection.classList.add('active');
        
        // Update nav links
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === sectionId);
        });
    }
    
    // Handle nav clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href');
            showSection(sectionId);
            
            // Special case for home page
            if(sectionId === '#home') {
                // Reset camera position
                camera.position.set(0, 0.5, 2);
                controls.update();
            }
        });
    });
    
    // Handle initial hash
    const initialHash = window.location.hash || '#home';
    showSection(initialHash);
});

// Update main.js - Add this at the bottom
window.addEventListener('hashchange', () => {
    const sectionId = window.location.hash || '#home';
    document.querySelector(sectionId)?.classList.add('active');
});