import { Link } from 'react-router-dom'
import a4 from '../assets/a4.jpg'
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.info_content}>
        <h1>Cicatrizes Invisíveis</h1>
        <p>O projeto "Cicatrizes Invisíveis" é uma exposição artístico-informativa com intuito de expor e elucidar, através de textos e ilustrações, conceitos relacionados à práticas de violência psicológica contra a mulher em relações afetivos afetivo-sexuais.</p>
        <Link className={styles.btn} to='/exposition'>Ver Exposição</Link>
      </div>

      <img src={a4} />
    </div>
  )
}

export default Home;