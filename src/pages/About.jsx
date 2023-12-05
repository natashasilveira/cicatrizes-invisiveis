import { Link } from 'react-router-dom'
import heart from '../assets/heart.png'
import styles from './About.module.css'

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.info_content}>
        <h1>Sobre</h1>
        <p>A Exposição Cicatrizes Invisíveis, desenvolvida em 2023, por Natasha da Silveira, faz parte do seu trabalho de conclusão de curso em Engenharia de Software, pela Universidade Federal do Ceará, Campus Quixadá e visa usar a arte e a tecnologia como ferramentas para contribuir com o enfrentamento da violência contra a mulher, através da produção e apresentação de desenhos e textos sobre violência psicológica contra a mulher em relações heterossexuais.</p>
      
        <p><b>Práticas de violência psicológicas abordadas:</b> Banco de Reserva (Benching), Elogio Dissimulado (Negging), Bombardeio de Amor (Love Bombing), Migalhas de Pão (Breadcrumbing), Distorção da Realidade (Gaslighting), Tratamento de Silêncio (Silent Treatment), Sumiço Repentino (Ghosting) e REaproximação Manipulativa (Hoovering).
        </p>

        <p><b>Orientador: </b>Valdemir Queiroz</p>
        <p>Todos os desenhos contidos na exposição foram produzidos pela autora deste trabalho.</p><p>O texto completo, com mais detalhes da produção deste trabalho, metodologia, resultados e referências, está disponível e pode ser acessado através do botão abaixo.
        </p>
        <a className={styles.btn} href='https://drive.google.com/file/d/1vh8b2RDKrNJ_mnovgbl5A2YtQ0HeWvE9' target='_blank'>Acessar Texto do Projeto</a>

      </div>
      <img src={heart} />
    </div>
  )
}

export default About;