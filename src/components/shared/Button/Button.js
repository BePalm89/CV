import './Button.css';

export const Button = (label, style) => {
    return `
        <button class="btn ${style}">${label}</button>
    `
}