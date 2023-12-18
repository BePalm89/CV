import './Skills.css';
import { WorkSkillsWrapper } from '../../shared/WorkSkillsWrapper/WorkSkillsWrapper';
import { LanguageSkillsWrapper } from '../../shared/LanguageSkillsWrapper/LanguageSkillsWrapper';

export const Skills = () => {
    return `
        <section id="skills">
            <div class="skills-container fix-width">
                ${WorkSkillsWrapper()}
                ${LanguageSkillsWrapper()}
            </div>
        </section>
    `
}