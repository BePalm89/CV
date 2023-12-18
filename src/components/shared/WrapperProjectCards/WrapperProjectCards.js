import './WrapperProjectCards.css';
import { DATA_CV } from '../../../data/data';
import { ProjectCard } from '../ProjectCard/ProjectCard';

export const WrapperProjectCards = () => {
    const { projects } = DATA_CV;

    return `
        <div class="cards-project-wrapper">
            ${projects.map((project) => {
                return ProjectCard(project)
            }).join('')}
        </div>
    `
}