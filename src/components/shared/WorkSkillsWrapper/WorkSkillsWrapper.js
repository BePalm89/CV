import './WorkSkillsWrapper.css';
import { Title } from '../Title/Title';
import { DATA_CV } from '../../../data/data';
import { WorkSkill } from '../WorkSkill/WorkSkill';

export const WorkSkillsWrapper = () => {
    const { workSkills } = DATA_CV;

    return `
        <div class="work-skills-container">
            ${Title('Work Skills')}
            <div class="work-skill-wrapper">
                ${workSkills.map(workSkill => {
                    return WorkSkill(workSkill)
                }).join('')}
            </div>
        </div>
    `
}