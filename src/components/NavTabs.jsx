import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          style={currentPage === '/' ? { backgroundColor: 'purple'} : { backgroundColor: '#ffffff' }}
        > 
          <h2>Home</h2>
        </Link>
      </li>
      
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
          style={currentPage === '/Portfolio' ? { backgroundColor: 'purple'} : { backgroundColor: '#ffffff' }}
        >
          <h2>Portfolio</h2>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/Resume"
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
          style={currentPage === '/Resume' ? { backgroundColor: 'purple'} : { backgroundColor: '#ffffff' }}
        >
          <h2>Resume</h2>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
          style={currentPage === '/Contact' ? { backgroundColor: 'purple'} : { backgroundColor: '#ffffff' }}
        >
          <h2>Contact</h2>
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
