import './Education.css';
import { Title } from '../../shared/Title/Title';
import { WrapperCards } from '../../shared/WrapperCards/WrapperCards';
import { ScrollingArrows } from '../../shared/ScrollingArrows/ScrollingArrows';
import { DATA_CV } from '../../../data/data';

export const Education = () => {

    const { education } = DATA_CV;

    return `
        <section id="education">
            <div class="education-container fix-width">
                ${Title('Education')}
                ${WrapperCards(education, 'secondary', 'study')}
            </div>
            ${ScrollingArrows('secondary')}
        </section>
    `
}