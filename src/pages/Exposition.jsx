import 'react-slideshow-image/dist/styles.css'
import { Slide, Fade } from 'react-slideshow-image'
import styles from './Exposition.module.css'
import a4 from '../assets/a4.jpg'


function Exposition() {

  // const images = [
  //   "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  //   "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  //   "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  // ];

  return (
    <div className={styles.conteiner}>

    <Fade autoplay={false} className={styles.content} >
      <div className={styles.each_slide_effect}>
        <div>
          {/* <img src={a4} /> */}
          <span>Gaslighting</span>
        </div>
      </div>
      <div className={styles.each_slide_effect}>
        <div>
          <img src={a4} />
          <span className={styles.text_info}>No mundo atual, a necessidade de renovação processual assume importantes posições no estabelecimento das posturas dos órgãos dirigentes com relação às suas atribuições.</span>
        </div>
      </div>
      <div className={styles.each_slide_effect}>
        <div>
          <span>Love Bombing</span>
          <img src={a4} />
        </div>
      </div>
      <div className={styles.each_slide_effect}>
        <div>
          <img src={a4} />
          <span>Slide 3</span>
        </div>
      </div>
      {/* <div className={styles.each_slide_effect}>
        <div style={{ 'backgroundImage': `url(${images[1]})` }}>
          <span>Slide 2</span>
        </div>
      </div>
      <div className={styles.each_slide_effect}>
        <div style={{ 'backgroundImage': `url(${images[2]})` }}>
          <span>Slide 3</span>
        </div>
      </div> */}
    </Fade>
    </div>
  )
}

export default Exposition;