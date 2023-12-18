import './Experience.css';
import { Title } from '../../shared/Title/Title';
import { WrapperCards } from '../../shared/WrapperCards/WrapperCards';
import { ScrollingArrows } from '../../shared/ScrollingArrows/ScrollingArrows';
import { DATA_CV } from '../../../data/data';

export const Experiece = () => {
    const { experiences } = DATA_CV;
    
    return `
        <section id="experience">
            <div class="experience-container fix-width">
                ${Title('Experience')}
                ${WrapperCards(experiences, 'primary', 'briefcase')}
            </div>
            ${ScrollingArrows('primary')}
        </section>
    `
}