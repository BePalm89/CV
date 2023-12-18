import './Navbar.css';

export const Navbar = () => {
    return `
        <header>
            <nav id="desktop-nav" class="fix-width">
                <h1>BePalm.</h1>
                <ul>
                    <li><a href="#hero-box">Home</a></li>
                    <li><a href="#about-me">About me</a></li>
                    <li><a href="#infos">Infos</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#projects">Portfolio</a></li>
                    <li><a href="#contact">Contact me</a></li>
                </ul>
                <div id="menu">
                    <img src="/icons/menu.png" alt="menu-icon" />
                </div>
            </nav>
            <nav id="small-device-nav">
                <ul>
                    <li><a href="#hero-box">Home</a></li>
                    <li><a href="#about-me">About me</a></li>
                    <li><a href="#infos">Infos</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#projects">Portfolio</a></li>
                    <li><a href="#contact">Contact me</a></li>
                </ul>
            </nav>
        </header>
    `
}