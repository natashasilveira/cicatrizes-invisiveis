import { Link } from 'react-router-dom'
import heart from '../assets/heart.png'
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.info_content}>
        <h1>Cicatrizes Invisíveis</h1>
        <p>O projeto "Cicatrizes Invisíveis" é uma exposição artístico-informativa com intuito de expor e elucidar, através de textos e ilustrações, conceitos relacionados à 8 práticas de violência psicológica contra a mulher em relações heterossexuais.</p>
        <p>Alerta de Gatilho de Conteúdo Sensível: Violência Psicológica Contra Mulher, incluindo representações de manipulação emocional, controle, isolamento e outras formas de abuso psicológico. Se você sentir que isso pode desencadear desconforto emocional ou lembranças dolorosas, recomendamos a cautela ao continuar.</p>
        <Link className={styles.btn} to='/exposition'>Ver Exposição</Link>
      </div>
      <img src={heart} />
    </div>
  )
}

export default Home;