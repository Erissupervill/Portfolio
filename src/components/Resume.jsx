import React, { Component } from 'react'
import Christian from '../assets/files/Christian-Eris-Real-Resume.pdf'

export default class Resume extends Component {
    render() {
        return (
            <>
                <section id="resume-id" className='container section '>
                <div className='resume'>
                    <p className='resume-details'>Interested? Download the resume for more information</p>
                    <a href={Christian} className='btn' download>Resume</a>
                </div>
                </section>
            </>
        )
    }
}
