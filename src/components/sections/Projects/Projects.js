import './Projects.css';
import { Title } from '../../shared/Title/Title';
import { WrapperProjectCards } from '../../shared/WrapperProjectCards/WrapperProjectCards';

export const Projects = () => {
    return `
        <section id="projects">
            <div class="projects-container fix-width">
                ${Title('Projects')}
                ${WrapperProjectCards()}
            </div>
        </section>
    `
}