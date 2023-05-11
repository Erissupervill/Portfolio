import React, { Component } from 'react'
import aboutPicture from '../assets/images/about-picture.jpg'

export default class About extends Component {
    render() {
        return (
            <>
                <section id="about" className='container section'>
                    <h1>About</h1>
                    <div className='about-container margin-top'>
                        <div>
                        <p className='about-text' >I am an aspiring developer with expertise in CodeIgniter, PHP, React, Angular, and Magento 2. I am passionate about creating high-quality web applications that meet the needs of businesses and users alike. With experience working on various projects, I have honed my skills in front-end and back-end development, as well as database management and server-side scripting.</p>
                        <p className='about-text margin-top'>
                            In my portfolio, you will find examples of my work, including websites, web applications, and e-commerce platforms. Each project showcases my ability to design and develop custom solutions that meet the unique needs of my clients. From responsive design to intuitive user interfaces, I strive to create web experiences that are both visually appealing and user-friendly.
                        </p>
                        <p className='about-text margin-top'>
                            Whether you're looking for a developer to help build your next web project or seeking guidance on how to improve your existing web presence, I am confident that my skills and expertise can help you achieve your goals. Thank you for considering me as your web developer.
                        </p>
                        </div>
                        <div>
                            <img src={aboutPicture} alt="About Picture" srcSet={aboutPicture} className='about-image'/>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
