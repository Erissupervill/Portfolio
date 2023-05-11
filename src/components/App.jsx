import React, { Component } from 'react'
import Hero from './Hero'
import Skills from './Skills'
import Resume from './Resume'
import About from './about'
import Projects from './Projects'

export default class App extends Component {
    render() {
        return (
            <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Resume />
            </>
        )
    }
}
