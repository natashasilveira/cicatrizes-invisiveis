import { Link } from 'react-router-dom'
import a4 from '../assets/a4.jpg'
import styles from './About.module.css'

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.info_content}>
        <h1>Sobre</h1>
        <p>O projeto "Pintando Cicatrizes Invisíveis" é uma exposição artístico-informativa com intuito de expor e elucidar, através de textos e ilustrações, conceitos relacionados à práticas de violência psicológica contra a mulher em relações afetivos afetivo-sexuais.</p>
      </div>

      <img src={a4} />
    </div>
  )
}

export default About;