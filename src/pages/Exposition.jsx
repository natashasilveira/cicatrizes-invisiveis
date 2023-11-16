import 'react-slideshow-image/dist/styles.css'
import { Slide, Fade } from 'react-slideshow-image'
import styles from './Exposition.module.css'
import a4 from '../assets/a4.jpg'
import gaslighting from '../assets/gaslighting.jpeg'
import gaslighting2 from '../assets/gaslighting2.jpeg'
import gaslighting3 from '../assets/gaslighting3.jpeg'
import love_bombing from '../assets/love_bombing.jpeg'
import love_bombing2 from '../assets/love_bombing2.jpeg'
import love_bombing3 from '../assets/love_bombing3.jpeg'
import benching from '../assets/benching.jpeg'
import benching2 from '../assets/benching2.jpeg'
import benching3 from '../assets/benching3.jpeg'
import silent_treatment from '../assets/silent_treatment.jpeg'
import silent_treatment2 from '../assets/silent_treatment2.jpeg'
import silent_treatment3 from '../assets/silent_treatment3.jpeg'

function Exposition() {

  // const images = [
  //   "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  //   "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  //   "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  // ];

  return (
    <div className={styles.conteiner}>
      <Fade autoplay={false} className={styles.content} >
        {/* INÍCIO GASLIGHTING */}
        <div className={styles.each_slide_effect}>
          <div><div>
            {/* <img src={a4} /> */}
            <h1>Gaslighting</h1>
            <h2 className={styles.subtitle}>Distorção da Realidade</h2>
          </div></div>
        </div>
        <div className={styles.each_slide_effect}>
          <div>
            <img src={gaslighting} />
            <span className={styles.text_info}>
              Gaslighting consiste em manipular e confundir a vítima, fazendo com que ela passe a duvidar da própria sanidade e memória, perdendo o senso de percepção, identidade e autoestima. Dessa forma, o abusador pode exercer controle no comportamento e nas crenças da vítima. O parceiro abusivo age através de declarações e acusações baseadas em mentiras ou distorção da verdade, negação de fatos, podendo, por exemplo, questionar a memória da vítima, fingir não entender o que ela fala, sugerir ou declarar, explicitamente, que a vítima é ou está ficando “louca”.<br></br><br></br>
              O termo gaslighting tem origem no filme “Gas Light” de 1944, onde um homem tenta manipular sua esposa e fazê-la duvidar de sua própria sanidade, criando várias situações propositalmente, como forjar um furto para culpar a esposa e alterações na iluminação da casa, para deixá-la confusa. A tradução em português do nome do filme, é “Iluminação a gás”, que faz referência ao tipo de iluminação da casa do casal que possibilitaria a manipulação da intensidade da luz, o que era usado pelo marido como parte das situações que ele criava para deixar a esposa confusa e desestabilizá-la. No contexto deste trabalho, optamos por adotar o sentido aproximado, em português, de distorção da realidade, para melhor entendimento do público visitante da exposição desenvolvida.
            </span>
          </div>
        </div>
        <div className={styles.each_slide_effect}>
          <div>
            <img src={gaslighting2} />
            <span className={styles.text_info}>
              De acordo com uma pesquisa publicada na American Sociological Review, a manifestação do gaslighting demonstra uma estreita associação com padrões de desigualdade social, revelando-se como um mecanismo que se vale, frequentemente, de estereótipos negativos relacionados ao gênero, raça, etnia, orientação sexual, nacionalidade ou idade de uma pessoa, sendo empregado de forma intencional para manipular e controlar a vítima.<br></br><br></br>
              O gaslighting, acarreta uma série de consequências tanto para a saúde como para a vida social da vítima. Este padrão de manipulação pode resultar na perda da própria identidade, uma vez que induz a vítima a questionar sua própria percepção da realidade e como percebe sua própria existência. Além disso, está ligado ao isolamento social, pois a vítima pode ser levada a acreditar que é incompatível com o convívio social ou que não pode confiar nas outras pessoas. Como desdobramento, o gaslighting frequentemente desencadeia sérios problemas de saúde mental, incluindo depressão, transtorno de estresse pós-traumático e outras ramificações igualmente graves.
            </span>
          </div>
        </div>
        <div className={styles.each_slide_effect}>
          <div>
            <img src={gaslighting3} />
          </div>
        </div>
        {/* INÍCIO LOVE BOMBING */}
        <div className={styles.each_slide_effect}>
          <div><div>
            {/* <img src={a4} /> */}
            <h1>Bombardeio de Amor</h1>
            <h2 className={styles.subtitle}>Love Bombing</h2>
          </div></div>
        </div>
        <div className={styles.each_slide_effect}>
          <div>
            <img src={love_bombing} />
            <span className={styles.text_info}>
              Love bombing, ou bombardeio de amor, consiste em uma tática narcísica, caracterizada pelo excesso de atenção, comunicação, de demonstrações exageradas e excessivas de afeto, admiração e apego, como verbalizações como “Eu não sei viver sem você”, presentes exagerados ou muito caros e sem motivo especial, a fim de estabelecer poder e controle sobre a vítima. Está correlacionado com tendências narcisistas e estilos de apego inseguros e negativamente relacionado à autoestima, ou seja, pessoas que praticam tendem a comportamentos de grandiosidade, falta de empatia, baixa autoestima e falta de confiança nos outros.<br></br><br></br>
              Essa prática, inicialmente, faz com que a mulher fique encantada e se sinta a pessoa mais especial do mundo. Porém, como consequência de tanto amor, podem surgir expectativas, necessidade de reconhecimento, acusações e cobranças por parte do praticante, na tentativa de controlar e moldar a narrativa para que ele pareça o parceiro perfeito, levando a mulher a se sentir sobrecarregada, sufocada, em dívida com o abusador e presa ao relacionamento, seja pela dependência emocional ou pelo sentimento de culpa, por todo amor que acredita que recebe e não consegue retribuir a altura.
            </span>
          </div>
        </div>
        <div className={styles.each_slide_effect}>
          <div>
            <img src={love_bombing2} />
          </div>
        </div>
        <div className={styles.each_slide_effect}>
          <div>
            <img src={love_bombing3} />
          </div>
        </div>
        {/* INÍCIO BENCHING */}
        <div className={styles.each_slide_effect}>
          <div><div>
            {/* <img src={a4} /> */}
            <h1>Banco de Reserva</h1>
            <h2 className={styles.subtitle}>Benching</h2>
          </div></div>
        </div>
        <div className={styles.each_slide_effect}>
          <div>
            <img src={benching} />
            <span className={styles.text_info}>
              Benching, o ato de ser colocada no banco de reserva, é uma prática que também está associada ao narcisismo e acontece através da alternância de períodos de distanciamento e rejeição e períodos de demonstrações de interesse, diálogos frequentes, envolvendo atenção e entusiasmo, fazendo com que a vítima fique na expectativa da realização do encontro e da relação, que nunca acontece, causando incerteza, insegurança, podendo desencadear consequências mais sérias, como problema de autoestima, sentimentos de inadequação, insuficiência e dependência emocional. Basicamente, consiste em manter a outra pessoa em uma situação de espera constante, suspensa e disponível, onde seu interesse é conquistar a vítima, mas não desenvolver uma relação, para usar a pessoa como segunda opção.<br></br><br></br>
              O termo vem da palavra “bench”, que significa “banco” em inglês e faz referência ao contexto esportivo, onde o jogador é colocado no banco de reserva, como acontece no futebol, por exemplo. De acordo com Battaglia, a experiência do benching no esporte, quando experienciada como uma forma de punição, pode ser prejudicial para a autoestima e as relações dos atletas com seus treinadores e colegas de equipe.
            </span>
          </div>
        </div>
        <div className={styles.each_slide_effect}>
          <div>
            <img src={benching2} />
            <span className={styles.hl_phrase}>
              "...a expectativa da realização do encontro e da relação, que nunca acontece".
            </span>
          </div>
        </div>
        <div className={styles.each_slide_effect}>
          <div>
            <img src={benching3} />
          </div>
        </div>
        {/* INÍCIO TRATAMENTO DE SILÊNCIO */}
        <div className={styles.each_slide_effect}>
          <div><div>
            {/* <img src={a4} /> */}
            <h1>Tratamento de Silêncio</h1>
            <h2 className={styles.subtitle}>Silent Treatment</h2>
          </div></div>
        </div>
        <div className={styles.each_slide_effect}>
          <div>
            <img src={silent_treatment} />
            <span className={styles.text_info}>
              Tratamento de silêncio, ou silêncio punitivo, é caracterizado pela recusa a ouvir, falar ou responder à parceira, ignorando-a, com o objetivo de punir, fragilizar ou manipular. Em alguns casos, o abusador ignora totalmente a existência da parceira, por horas, dias ou, até mesmo, semanas. Quando o casal não mora junto, o abusador some, sem dar explicação, ignorando as tentativas de contato por parte da parceira, ligações e mensagens nas redes sociais.<br></br><br></br>
              Esse comportamento pode afetar a autoestima da vítima, levá-la a sentir-se ansiosa, confusa, insegura ou, até mesmo atormentada, já que, muitas vezes, não consegue ter ideia do motivo do silêncio do parceiro e acaba imaginando situações, reais ou não, que podem ter causado o comportamento. A vítima também pode experimentar sentimentos negativos, como o de humilhação, medo ou culpa e comportamentos inadequados, como autopunição, crises de ansiedade ou surtos
            </span>
          </div>
        </div>
        <div className={styles.each_slide_effect}>
          <div>
            <img src={silent_treatment2} />
          </div>
        </div>
        <div className={styles.each_slide_effect}>
          <div>
            <img src={silent_treatment3} />
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