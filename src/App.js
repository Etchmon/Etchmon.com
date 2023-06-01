import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function App() {

  const toggleNav = () => {
    document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
  }

  return (
    <section data-nav="false">
      <main></main>
      <nav id='nav'>
        <div className='nav-links' >
          <a className='nav-link' href="#">
            <h2 className='nav-link-label'>Home</h2>
            <img className='nav-link-image' src='' />
          </a>
          <a className='nav-link' href="#">
            <h2 className='nav-link-label'>Resume</h2>
            <img className='nav-link-image' src='' />
          </a>
          <a className='nav-link' href="#">
            <h2 className='nav-link-label'>Projects</h2>
            <img className='nav-link-image' src='' />
          </a>
          <a className='nav-link' href="#">
            <h2 className='nav-link-label'>Projects</h2>
            <img className='nav-link-image' src='' />
          </a>
          <a className='nav-link' href="#">
            <h2 className='nav-link-label'>Projects</h2>
            <img className='nav-link-image' src='' />
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
