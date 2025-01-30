// Initialize all modules when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize navigation
    initPageLoader();
    
    // Initialize custom cursor
    initCustomCursor();
    
    // Load project data
    loadProject();
});

const projects = {
    aparty: {
        title: "A Party",
        image: "apaimg.png",
        description: "Description for A Party project...",
        year: "2024",
        client: "Client Name",
        role: "Design, Development",
        url: "#"
    },
    riley: {
        title: "Riley Portfolio",
        image: "rilimg.png",
        description: "Description for Riley Portfolio...",
        year: "2024",
        client: "Riley",
        role: "Design, Development",
        url: "#"
    },
    isobel: {
        title: "Isobel Portfolio",
        image: "isoimg.png",
        description: "Description for Isobel Portfolio...",
        year: "2024",
        client: "Isobel",
        role: "Design, Development",
        url: "#"
    }
};

// Function to load project content
function loadProject() {
    try {
        // Get project from URL parameter
        const urlParams = new URLSearchParams(window.location.search);
        const projectId = urlParams.get('project');
        const project = projects[projectId];

        if (project) {
            // Update page content
            const mainHeading = document.querySelector('.main-heading');
            const projectImage = document.querySelector('.project-image');
            const projectTitle = document.querySelector('.project-title');
            const projectDesc = document.querySelector('.project-description');
            const visitSite = document.querySelector('.visit-site');
            const details = document.querySelector('.info-box:nth-child(2) .project-description');

            if (mainHeading) mainHeading.textContent = project.title;
            if (projectImage) projectImage.src = project.image;
            if (projectTitle) projectTitle.textContent = project.title;
            if (projectDesc) projectDesc.textContent = project.description;
            if (visitSite) visitSite.href = project.url;
            
            if (details) {
                details.innerHTML = `
                    Year: ${project.year}<br>
                    Client: ${project.client}<br>
                    Role: ${project.role}
                `;
            }

            // Update navigation - add 'current' class to current project
            document.querySelectorAll('.nav-item').forEach(item => {
                if (item.href.includes(`project=${projectId}`)) {
                    item.classList.add('current');
                } else {
                    item.classList.remove('current');
                }
            });
        }
    } catch (error) {
        console.error('Error loading project:', error);
    }
}