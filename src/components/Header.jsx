import React, { Component, useState, useEffect } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import { SvgIcon } from '@mui/material';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';

export default function Header() {

    const [isLight, setIsLight] = useState(localStorage.getItem('theme'));

    useEffect(() => {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        setIsLight(storedTheme);
        document.body.classList.toggle('light-mode', storedTheme === 'light-mode');
      }
    }, []);
  
    function handleLightMode() {
      const lightMode = document.body.classList.toggle('light-mode');
      const theme = lightMode ? 'light-mode' : null;
  
      localStorage.setItem('theme', theme);
      setIsLight(theme);
    }

    return (
        <section id="home">
            <nav>
                <ul className='header-menu'>
                    <li>
                        <a href="#home" className='header-anchor'>Home</a>
                    </li>
                    <li>
                        <a href="#about" className='header-anchor'>About</a>
                    </li>
                    <li>
                        <a href="#skills" className='header-anchor'>Skills</a>
                    </li>
                    <li>
                        <a href="#resume-id" className='header-anchor'>Resume</a>
                    </li>
                    <li className='header-line'></li>
                    <li >
                        <button className='header-light' onClick={handleLightMode}><SvgIcon ><LightModeIcon /></SvgIcon></button>
                    </li>
                </ul>
                <button className="header-selection"><SvgIcon fontSize='large'><MenuSharpIcon /></SvgIcon></button>
            </nav>
        </section>
    )
}

