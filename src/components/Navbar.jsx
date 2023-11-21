import { useState, useEffect } from 'react';
import styles from './Navbar.module.css'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {

  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientY } = event;
      const isMouseInUpperCorner = clientY <= 50;
      const isHomeOrAboutRoute = location.pathname === "/" || location.pathname === "/about";

      setShowNavbar(isHomeOrAboutRoute || isMouseInUpperCorner);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [location]);

  useEffect(() => {
    const handleMouseLeave = () => {
      setShowNavbar(false);
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <nav className={showNavbar ? styles.navbar : styles.hidden}>
      <p className={styles.navbar_title}>Cicatrizes Invisíveis</p>
      <ul className={styles.nav_list}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/exposition'>Exposição</Link>
        </li>
        <li>
          <Link to='/about'>Sobre</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;