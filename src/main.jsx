import React from 'react'
import ReactDOM from 'react-dom/client'


// CSS IMPORT
import './styles/modern-normalize.css'
import './styles/styles.css'
import './styles/utils.css'
import './styles/header.css'
import './styles/hero.css'
import './styles/about.css'
import './styles/skills.css'
import './styles/resume.css'
import './styles/projects.css'

import './styles/footer.css'


//Components
import Header from './components/Header.jsx'
import Footer from './components/Footer'
import App from './components/App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
)
