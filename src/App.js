import React, { useRef } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import imgSrc from '../src/images/keira.jpg';

function App() {

  const scrollableRef = useRef(null);

  const toggleNav = () => {
    document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
  };

  const handleWheel = (event) => {
    scrollableRef.current.scrollLeft += event.deltaY + event.deltaX;
  };

  return (
    <section data-nav="false">
      <main>
        <header>
          <h1><span>James</span> Etchells</h1>
          <h3>Full-Stack Software Engineer</h3>
          <ul>
            <li>
              <a href='https://github.com/Etchmon' target='_blank'>Github</a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/james-etchells-240816164/' target='_blank'>LinkedIn</a>
            </li>
            <li>
              <a href='mailto:jaw.etch@gmail.com' target='_blank'>Email</a>
            </li>
          </ul>
        </header>
        <div></div>
      </main>

      <nav id='nav'>
        <div id='nav-links' className='scrollbar-hidden' onWheel={handleWheel} ref={scrollableRef}>
          <a className='nav-link' href="#">
            <h2 className='nav-link-label'>Home</h2>
            <img className='nav-link-image' src={imgSrc} />
          </a>
          <a className='nav-link' href="#">
            <h2 className='nav-link-label'>Skills</h2>
            <img className='nav-link-image' src={imgSrc} />
          </a>
          <a className='nav-link' href="#">
            <h2 className='nav-link-label'>Projects</h2>
            <img className='nav-link-image' src={imgSrc} />
          </a>
          <a className='nav-link' href="#">
            <h2 className='nav-link-label'>Resume</h2>
            <img className='nav-link-image' src={imgSrc} />
          </a>
          <a className='nav-link' href="#">
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
