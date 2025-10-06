import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      zIndex: 1000,
      background: 'rgba(0, 0, 0, 0.7)',
      padding: '10px',
      borderRadius: '5px'
    }}>
      <Link to="/" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>
        Original Version
      </Link>
      <Link to="/copy" style={{ color: 'white', textDecoration: 'none' }}>
        Copy Version
      </Link>
    </nav>
  );
};

export default Navigation;
