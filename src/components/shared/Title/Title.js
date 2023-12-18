import './Titla.css';

export const Title = (label) => {
    return `
        <div class="title-container">
            <h2>${label}
                <div class="title-circle"></div>
            </h2>
        </div>
    `
}