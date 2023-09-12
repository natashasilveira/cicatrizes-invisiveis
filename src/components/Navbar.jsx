import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <p>Logo</p>
      <ul className={styles.nav_list}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/exposition'>Exposição</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;