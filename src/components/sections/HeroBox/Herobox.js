import './Herobox.css';
import { DATA_CV } from '../../../data/data';

export const Herobox = () => {
    return `
        <section id="hero-box">
            <div class="hero-box-container fix-width">
                <div class="hero-box-info">
                    <h1>I'm ${DATA_CV.name}</h1>
                    <h3 class="typing"></h3>
                </div>
                <div class="hero-box-img">
                    <img src="https://res.cloudinary.com/dmrv2bogq/image/upload/v1701157098/Single%20page%20CV/profile-1.png" alt="profile picture">
                </div>
            </div>
        </section>
    `
}