import './LanguageSkillsWrapper.css';
import { Title } from '../Title/Title';
import { LanguageSkill } from '../LanguageSkill/LanguageSkill';
import { DATA_CV } from '../../../data/data';

export const LanguageSkillsWrapper = () => {
    const { languageSkills } = DATA_CV;
    
    return `
        <div class="language-skills-container">
            ${Title('Language Skills')}
            <div class="language-skill-wrapper">
                ${languageSkills.map(languageSkill => {
                    return LanguageSkill(languageSkill)
                }).join('')}
            </div>
        </div>
    `
}