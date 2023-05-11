import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    const today = new Date();
    const currentYear = today.getFullYear()
    return (
        <>
          <section className='container section footer-section'>
            <div>
              <h5>Copyright © Christian Real @ {currentYear} </h5>
            </div>
          </section>
        </>
    )
  }
}
