import './Projects.css';
import { Title } from '../../shared/Title/Title';
import { Filter } from '../../shared/Filters/Fitler';

export const Projects = () => {

    return `
        <section id="projects">
            <div class="projects-container fix-width">
                ${Title('Projects')}
                ${Filter()}
            </div>
        </section>
    `
}