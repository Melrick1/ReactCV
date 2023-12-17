import '../assets/css/Hero.css'
import React, { useEffect } from 'react';
import Typed from 'typed.js';

const Hero = () => {
    useEffect(() => {
        // Initialize Typed.js after the component has mounted
        const options = {
            strings: ["Designer", "Developer", "Freelancer", "Photographer"],
            typeSpeed: 75,
            backSpeed: 60,
            loop: true,
            onLastStringBackspaced: (self) => {
                // Pause for 3000 milliseconds (3 seconds) between loops
                setTimeout(() => {
                    self.start();
                }, 3000);
            },
        };

        const typed = new Typed('.typed', options);

        // Cleanup the Typed instance when the component unmounts
        return () => {
            typed.destroy();
        };
    }, []); // Empty dependency array to run the effect only once

    return(
        <div className='hero'>
            <div className='hero-container' data-aos='fade-in'>
                <h1>Melrick</h1>
                <p>I'm a <span className='typed'></span></p>
                <div className='social-links'>
                    <a href="#" class="github"><i class="bi bi-github"></i></a>
                    <a href="#" class="youtube"><i class="bi bi-youtube"></i></a>
                    <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                    <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                    <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Hero;