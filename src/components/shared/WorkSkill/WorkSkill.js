import './WorkSkill.css';

export const WorkSkill = (workSkillsData) => {
    
    const { technology, level } = workSkillsData;

    // Add animation when scrolling

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const handleScrollAnimation = () => {
        const skillInnerBar = document.querySelectorAll('.skill-inner-bar');
        skillInnerBar.forEach((skill) => {
            if (isInViewport(skill)) {
                skill.classList.add('animate');
            } else {
                skill.classList.remove('animate');
            }
        })
    };

    window.addEventListener('scroll', handleScrollAnimation);

    return `
        <div class="skill-box">
            <div class="skill-title">
                <p>${technology}</p>
                <p>${level}%</p>
            </div>
            <div class="skills-outer-bar">
                <div class="skill-inner-bar" style="width: ${level}%;"></div>
            </div>
        </div>
    `;
};
