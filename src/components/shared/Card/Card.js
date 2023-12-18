import './Card.css';

export const Card = (data, style, icon) => {  
    return `
        <div class="card-container border-${style}">
            <div class="card-icon card-icon-${style}">
                <img src="/icons/${icon}.png" alt="${icon}-icon">
            </div>
            <div class="card-info">
                <p class="date-${style}" ${style}>${data.startDate} - ${data.endDate}</p>
                <div class="card-info-detail">
                    <h4 class="role-${style}">${data.role}</h4>
                    <p>${data.company} - ${data.location}</p>
                </div>
                <p class="description">${data.description}</p>
            </div>
        </div>
    `
}