
document.addEventListener('DOMContentLoaded', () => {

    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.nav-link');

    function showSection(sectionId) {

        sections.forEach(section => {
            section.classList.remove('active');
        });


        const activeSection = document.querySelector(sectionId);
        if (activeSection) activeSection.classList.add('active');


        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === sectionId);
        });
    }


    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href');
            showSection(sectionId);


            if (sectionId === '#home') {

                camera.position.set(0, 0.5, 2);
                controls.update();
            }
        });
    });


    const initialHash = window.location.hash || '#home';
    showSection(initialHash);
});


window.addEventListener('hashchange', () => {
    const sectionId = window.location.hash || '#home';
    document.querySelector(sectionId)?.classList.add('active');
});