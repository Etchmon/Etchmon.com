import React, { useRef, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import imgSrc from '../src/images/keira.jpg';
import Home from '../src/components/home';
import Skills from '../src/components/skills';
import Projects from './components/projects';

function App() {

  const scrollableRef = useRef(null);
  const [activeComponent, setActiveComponent] = useState('home');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'home':
        return <Home />
      case 'skills':
        return <Skills />
      case 'projects':
        return <Projects />
      case 'resume':
        return // resume
      case 'about':
        return // about
      default:
        return null;
    }
  }

  const toggleNav = () => {
    document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
  };

  const handleWheel = (event) => {
    scrollableRef.current.scrollLeft += event.deltaY + event.deltaX;
  };

  return (
    <section data-nav="false">
      <main>
        {renderComponent()}
        <div className='bg-overlay'></div>
      </main>

      <nav id='nav'>
        <div id='nav-links' className='scrollbar-hidden' onWheel={handleWheel} ref={scrollableRef}>
          <a className='nav-link' onClick={() => setActiveComponent('home')}>
            <h2 className='nav-link-label'>Home</h2>
            <img className='nav-link-image' src={imgSrc} />
          </a>
          <a className='nav-link' onClick={() => setActiveComponent('skills')}>
            <h2 className='nav-link-label'>Skills</h2>
            <img className='nav-link-image' src={imgSrc} />
          </a>
          <a className='nav-link' onClick={() => setActiveComponent('projects')}>
            <h2 className='nav-link-label'>Projects</h2>
            <img className='nav-link-image' src={imgSrc} />
          </a>
          <a className='nav-link' onClick={() => setActiveComponent('resume')}>
            <h2 className='nav-link-label'>Resume</h2>
            <img className='nav-link-image' src={imgSrc} />
          </a>
          <a className='nav-link' onClick={() => setActiveComponent('about')}>
            <h2 className='nav-link-label'>About</h2>
            <img className='nav-link-image' src={imgSrc} />
          </a>
        </div>
      </nav>
      <button id="nav-toggle" type="button" onClick={toggleNav}>
        <MenuIcon className='open i' />
        <CloseIcon className='close i' />
      </button>
    </section>

  );
}

export default App;
