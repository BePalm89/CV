import './LanguageSkill.css';

export const LanguageSkill = (languageSkillsData) => {
    
    const { language, level, proficency } = languageSkillsData;
 
    const createProficencyCircles = (count, className) => {
        return Array.from({ length: count }, (_, i) =>
            `<div class="${className}" key="${i}"></div>`
        ).join('')
    }

    const filledCircles = createProficencyCircles(proficency, "filled-circle");
    const outlineCircles = createProficencyCircles(5-proficency, "outline-circle");

    return `
        <div class="language-box">
            <p>${language} <span>${level}</span></p>
            <div class="circle-container">
                ${filledCircles} ${outlineCircles}
            </div>
        </div>
    `
}



