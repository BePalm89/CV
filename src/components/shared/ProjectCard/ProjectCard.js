import './ProjectCard.css';

export const ProjectCard = (projects) => {
    const { id, name, technology, githubLink, website, img} = projects
    return `
        <div class="project-card-container card-${id}">
            <img class="project-img" src="${img}" alt="${name}">
            <div class="project-card-body">
                <div class="project-card-info">
                    <p>${name}</p>
                    <p>${technology.toUpperCase()}</p>
                </div>
                <div class="project-card-links">
                ${githubLink ? 
                    `<a href="${githubLink}" target="_blank">
                        <img src="/icons/github.png" alt="github-icon">
                    </a>` : ''}
                ${website ? 
                    `<a href="${website}" target="_blank">
                        <img src="/icons/link.png" alt="link-icon">
                    </a>` : ''}
                </div>
            </div>
        </div>
    `
}