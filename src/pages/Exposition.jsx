import 'react-slideshow-image/dist/styles.css'
import { Slide, Fade } from 'react-slideshow-image'
import styles from './Exposition.module.css'
import a4 from '../assets/a4.jpg'
import benching from '../assets/benching.png'
import benching2 from '../assets/benching2.png'
import benching3 from '../assets/benching3.png'
import breadcrumbing from '../assets/breadcrumbing.png'
import breadcrumbing2 from '../assets/breadcrumbing2.png'
import breadcrumbing3 from '../assets/breadcrumbing3.png'
import gaslighting from '../assets/gaslighting.png'
import gaslighting2 from '../assets/gaslighting2.png'
import gaslighting3 from '../assets/gaslighting3.png'
import love_bombing from '../assets/love_bombing.png'
import love_bombing2 from '../assets/love_bombing2.png'
import love_bombing3 from '../assets/love_bombing3.png'
import negging from '../assets/negging.png'
import negging2 from '../assets/negging2.png'
import negging3 from '../assets/negging3.png'
import silent_treatment from '../assets/silent_treatment.png'
import silent_treatment2 from '../assets/silent_treatment2.png'
import silent_treatment3 from '../assets/silent_treatment3.png'
import audio_teste from '../assets/audio_teste.mp3'
import audio_benching from '../assets/audio_benching.mp3'

function Exposition() {

  const indicators = () => (
    <div className={styles.indicator}></div>
  )

  return (
    <div>
      {/* ### DESKTOP ### */}
      <div className={styles.container_desktop}>
        <Fade indicators={indicators} autoplay={false} className={styles.content} >
          {/* 1 -- INÍCIO BENCHING */}
          <div className={styles.each_slide_effect}>
            <div className={styles.intro_slide}>
              <h1>Banco de Reserva</h1>
              <h2 className={styles.subtitle}>Benching</h2>
            </div>
          </div>
          <div className={styles.each_slide_effect}>
            <div className={styles.audio_slide}>
              <img src={benching} />
              <div>
                <audio src={audio_benching} controls controlsList='noplaybackrate nodownload' />
                <span className={styles.text_info}>
                  Banco de Reserva, ou Benching, é uma prática que está associada ao narcisismo e consiste em manter a outra pessoa em uma situação de espera constante, suspensa e disponível, onde seu interesse é conquistar a vítima, mas não desenvolver uma relação, para usar a pessoa como segunda opção. Na prática, acontece através da alternância de períodos de distanciamento e rejeição e períodos de demonstrações de interesse e diálogos frequentes, envolvendo atenção e entusiasmo. Esse comportamento faz com que a vítima fique na expectativa da realização do encontro e da relação, que nunca acontece, causando incerteza, insegurança e podendo desencadear consequências mais sérias, como problemas de autoestima, sentimentos de inadequação, insuficiência e dependência emocional. <br></br><br></br>
                  O termo vem da palavra “bench”, que significa “banco” em inglês e faz referência ao contexto esportivo, onde o jogador é colocado no banco de reserva, como acontece no futebol, por exemplo. A experiência de ser colocado no banco de reservas, no esporte, quando experienciada como uma forma de punição, pode ser prejudicial para a autoestima e as relações dos atletas com seus treinadores e colegas de equipe.
                </span>
              </div>
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
          {/* 2 -- INÍCIO NEGGING */}
          <div className={styles.each_slide_effect}>
            <div className={styles.intro_slide}>
              <h1>Elogio Dissimulado</h1>
              <h2 className={styles.subtitle}>Negging</h2>
            </div>
          </div>
          <div className={styles.each_slide_effect}>
            <div className={styles.audio_slide}>
              <img src={negging} />
              <div>
                <audio src={audio_teste} controls controlsList='noplaybackrate nodownload' />
                <span className={styles.text_info}>
                  Elogio Dissimulado, é uma técnica inventiva que tem como objetivo minar a autoestima da vítima, para que ela se sinta insegura e dependente emocional de aprovação e elogios vindos do abusador. Na prática, esta violência se dá através de falas que desqualificam a vítima, como comentários negativos e depreciativos sobre sua aparência ou personalidade, comparação negativa com outras mulheres ou insultos. É muito comum o uso de elogios com sentidos dúbios ou um elogio seguido de uma crítica.
                  <br></br><br></br>
                  Essa prática estabelece na vítima um sentimento de insuficiência, onde ela passa a pensar que não é boa o suficiente e precisa se comportar de modo a buscar a aprovação do abusador. A expressão "Elogio Dissimulado" é uma tradução aproximada para o termo Negging, que vem do inglês e não tem uma tradução direta no português.
                </span>
              </div>
            </div>
          </div>
          <div className={styles.each_slide_effect}>
            <div className={styles.audio_slide}>
              <img src={negging2} />
              <div>
                <audio src={audio_teste} controls controlsList='noplaybackrate nodownload' />
                <span className={styles.text_info}>
                  Essa técnica de manipulação psicológica, é difundida e considerada, por muitos praticantes, uma técnica de sedução e conquista, com o foco em vulnerabilizar a mulher, reduzindo sua autoestima e aumentando a atratividade do abusador, para que o mesmo obtenha a aceitação de sua investida sexual.<br></br><br></br>
                  Existem vários movimentos coletivos masculinos no mundo, nos quais, seus integrantes, conhecidos como PUAs, ou “Pick-up Artist” (Artista da Sedução), se dedicam ao estudo e aprimoramento de habilidades de como seduzir e dormir com mulheres, sendo o Elogio Dissimulado uma das práticas estimuladas e ensinadas por essas comunidades como tática de sedução. Erik Von Markovik, PUA que introduziu o termo negging, descreve a prática como “inofensiva, envolvente e divertida”. Além do estímulo de práticas abusivas, esses grupos, frequentemente, defendem outras ideias e práticas misóginas.
                </span>
              </div>
            </div>
          </div>
          <div className={styles.each_slide_effect}>
            <div>
              <img src={negging3} />
            </div>
          </div>
          {/* 3 -- INÍCIO LOVE BOMBING */}
          <div className={styles.each_slide_effect}>
            <div className={styles.intro_slide}>
              <h1>Bombardeio de Amor</h1>
              <h2 className={styles.subtitle}>Love Bombing</h2>
            </div>
          </div>

          <div className={styles.each_slide_effect}>
            <div className={styles.audio_slide}>
              <img src={love_bombing} />
              <div>
                <audio src={audio_teste} controls controlsList='noplaybackrate nodownload' />
                <span className={styles.text_info}>
                  Bombardeio de Amor, ou Love Bombing, é caracterizado pelo excesso de atenção, comunicação e de demonstrações exageradas e excessivas de afeto, admiração e apego, como, por exemplo, verbalizações como “eu não sei viver sem você”, presentes exagerados ou muito caros e sem motivo especial, a fim de estabelecer poder e controle sobre a vítima. Está correlacionado com tendências narcisistas e estilos de apego inseguros e, negativamente, relacionado à autoestima, ou seja, pessoas que praticam tendem a comportamentos de grandiosidade, falta de empatia, baixa autoestima e falta de confiança nos outros.<br></br><br></br>
                  Essa prática, inicialmente, faz com que a mulher fique encantada e se sinta a pessoa mais especial do mundo. Porém, como consequência de tanto amor, podem surgir expectativas, necessidade de reconhecimento, acusações e cobranças por parte do praticante, na tentativa de controlar e moldar a narrativa para que ele pareça o parceiro perfeito, levando a mulher a se sentir sobrecarregada, sufocada, em dívida com o abusador e presa ao relacionamento, seja pela dependência emocional ou pelo sentimento de culpa, por todo amor que acredita que recebe e não consegue retribuir à altura.
                </span>
              </div>
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
              <span className={styles.hl_phrase}>
                "...se sentir sobrecarregada, sufocada, em dívida com o abusador e presa ao relacionamento, seja pela dependência emocional ou pelo sentimento de culpa".
              </span>
            </div>
          </div>
          {/* 4 -- INÍCIO BREADCRUMBING */}
          <div className={styles.each_slide_effect}>
            <div className={styles.intro_slide}>
              <h1>Migalhas de Pão</h1>
              <h2 className={styles.subtitle}>Breadcrumbing</h2>
            </div>
          </div>
          <div className={styles.each_slide_effect}>
            <div className={styles.audio_slide}>
              <img src={breadcrumbing} />
              <div>
                <audio src={audio_teste} controls controlsList='noplaybackrate nodownload' />
                <span className={styles.text_info}>
                  Breadcrumbing, cujo termo vem de bread crumb que significa “migalha de pão”, em inglês, e faz alusão à história de João e Maria, que são guiados por uma trilha de migalhas de pão para uma armadilha. No contexto da violência psicológica, o breadcrumbing é entendido como o ato de manter um relacionamento dando “migalhas de pão”, ou seja, oferecendo o mínimo, mantendo afastamento, com pouca comunicação, falta de compromisso e com comportamentos evasivos e evitativos em interações desconfortáveis ou negativas.
                  <br></br><br></br>
                  A vítima, fica submetida a uma relação desconfortável, sem conexão com o parceiro, se sentindo solitária, confusa, mas muitas vezes não consegue sair da relação por dependência emocional e por achar que o parceiro vai mudar e a relação melhorar. Pode ocasionar consequências como afetar a autoestima, diminuição da capacidade de agir com empatia, aumento de medo e insegurança, podendo afetar, ainda, relacionamentos futuros.
                </span>
              </div>
            </div>
          </div>
          <div className={styles.each_slide_effect}>
            <div className={styles.audio_slide}>
              <img src={breadcrumbing2} />
              <div>
                <audio src={audio_teste} controls controlsList='noplaybackrate nodownload' />
                <span className={styles.text_info}>
                Essa prática está relacionada com a intenção do praticante de se sentir atraente, importante e desejado pela outra pessoa. Essa é a principal motivação da continuidade da relação, e não o vínculo em si, por isso a pessoa que pratica não dá espaço para que o relacionamento se desenvolva. <br></br><br></br>
                É uma forma de manipulação sutil em relacionamentos que sempre existiu, porém, aumentou com o surgimento e aumento do uso de dispositivos eletrônicos e aplicativos de comunicação, já que esses meios de comunicação foram incorporados nos relacionamentos, inclusive sendo usados como formas de procurar parceiros, iniciar, manter e terminar relacionamentos. A tecnologia transformou profundamente as formas de se relacionar, proporcionando vantagens e a melhora na dinâmicas das relações, em muitos aspectos, mas também trouxe novos desafios, desvantagens e uma série de possibilidades de formas diferentes de praticar violências.
                </span>
              </div>
            </div>
          </div>
          <div className={styles.each_slide_effect}>
            <div>
              <img src={breadcrumbing3} />
              <span className={styles.hl_phrase}>
                "...oferecendo o mínimo, mantendo afastamento, com pouca comunicação, falta de compromisso e com comportamentos evasivos e evitativos em interações desconfortáveis ou negativas".
              </span>
            </div>
          </div>
          {/* 5 -- INÍCIO GASLIGHTING */}
          <div className={styles.each_slide_effect} key={0}>
            <div className={styles.intro_slide}>
              <h1>Distorção da Realidade</h1>
              <h2 className={styles.subtitle}>Gaslighting</h2>
            </div>
          </div>
          <div className={styles.each_slide_effect}>
            <div className={styles.audio_slide}>
              <img src={gaslighting} />
              <div>
                <audio src={audio_teste} controls controlsList='noplaybackrate nodownload' />
                <span className={styles.text_info}>
                  Gaslighting consiste em manipular e confundir a vítima, fazendo com que ela passe a duvidar da própria sanidade e memória, perdendo o senso de percepção, identidade e autoestima. Dessa forma, o abusador pode exercer controle no comportamento e nas crenças da vítima. O parceiro abusivo age através de declarações e acusações baseadas em mentiras ou distorção da verdade, negação de fatos, podendo, por exemplo, questionar a memória da vítima, fingir não entender o que ela fala, sugerir ou declarar, explicitamente, que a vítima é ou está ficando “louca”.<br></br><br></br>
                  O termo gaslighting tem origem no filme “Gas Light” de 1944, onde um homem tenta manipular sua esposa e fazê-la duvidar de sua própria sanidade, criando várias situações propositalmente, como forjar um furto para culpar a esposa e alterações na iluminação da casa, para deixá-la confusa. A tradução em português do nome do filme, é “Iluminação a gás”, que faz referência ao tipo de iluminação da casa do casal que possibilitaria a manipulação da intensidade da luz, o que era usado pelo marido como parte das situações que ele criava para deixar a esposa confusa e desestabilizá-la. No contexto deste trabalho, optamos por adotar o sentido aproximado, em português, de distorção da realidade, para melhor entendimento do público visitante da exposição desenvolvida.
                </span>

              </div>
            </div>
          </div>
          <div className={styles.each_slide_effect}>
            <div>
              <img src={gaslighting2} />
              {/* <audio src={audio_teste} controls controlsList='noplaybackrate nodownload' /> */}
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
          {/* 6 -- INÍCIO TRATAMENTO DE SILÊNCIO */}
          <div className={styles.each_slide_effect}>
            <div className={styles.intro_slide}>
              <h1>Tratamento de Silêncio</h1>
              <h2 className={styles.subtitle}>Silent Treatment</h2>
            </div>
          </div>
          <div className={styles.each_slide_effect}>
            <div className={styles.audio_slide}>
              <img src={silent_treatment} />
              <div>
                <audio src={audio_teste} controls controlsList='noplaybackrate nodownload' />
                <span className={styles.text_info}>
                  Tratamento de silêncio, ou silêncio punitivo, é caracterizado pela recusa a ouvir, falar ou responder à parceira, ignorando-a, com o objetivo de punir, fragilizar ou manipular. Em alguns casos, o abusador ignora totalmente a existência da parceira, por horas, dias ou, até mesmo, semanas. Quando o casal não mora junto, o abusador some, sem dar explicação, ignorando as tentativas de contato por parte da parceira, ligações e mensagens nas redes sociais.<br></br><br></br>
                  Esse comportamento pode afetar a autoestima da vítima, levá-la a sentir-se ansiosa, confusa, insegura ou, até mesmo atormentada, já que, muitas vezes, não consegue ter ideia do motivo do silêncio do parceiro e acaba imaginando situações, reais ou não, que podem ter causado o comportamento. A vítima também pode experimentar sentimentos negativos, como o de humilhação, medo ou culpa e comportamentos inadequados, como autopunição, crises de ansiedade ou surtos.
                </span>
              </div>
            </div>
          </div>
          <div className={styles.each_slide_effect}>
            <div>
              <img src={silent_treatment2} />
              <span className={styles.hl_phrase}>
                "...recusa a ouvir, falar ou responder à parceira, ignorando-a, com o objetivo de punir, fragilizar ou manipular".
              </span>
            </div>
          </div>
          <div className={styles.each_slide_effect}>
            <div>
              <span className={styles.hl_phrase}>
                "Esse comportamento pode afetar a autoestima da vítima, levá-la a sentir-se ansiosa, confusa, insegura ou, até mesmo atormentada".
              </span>
              <img src={silent_treatment3} />
            </div>
          </div>

        </Fade>
      </div>

      {/* ### MOBILE ### */}

      <div className={styles.container_mobile}>
        <Fade indicators={indicators} autoplay={false} className={styles.content} >
          {/* 1 -- INÍCIO BENCHING */}
          <div className={styles.each_slide_effect}>
            <div className={styles.intro_slide}>
              <h1>Banco de Reserva</h1>
              <h2 className={styles.subtitle}>Benching</h2>
            </div>
          </div>
          <div className={styles.each_slide_effect}>
            <div className={styles.audio_slide}>
              <img src={benching} />
              <audio src={audio_teste} controls controlsList='noplaybackrate nodownload' />
            </div>
          </div>
          <div className={styles.each_slide_effect}>
            <div>
              <span className={styles.text_info}>
                Banco de Reserva, ou Benching, é uma prática que está associada ao narcisismo e consiste em manter a outra pessoa em uma situação de espera constante, suspensa e disponível, onde seu interesse é conquistar a vítima, mas não desenvolver uma relação, para usar a pessoa como segunda opção. Na prática, acontece através da alternância de períodos de distanciamento e rejeição e períodos de demonstrações de interesse e diálogos frequentes, envolvendo atenção e entusiasmo. Esse comportamento faz com que a vítima fique na expectativa da realização do encontro e da relação, que nunca acontece, causando incerteza, insegurança e podendo desencadear consequências mais sérias, como problemas de autoestima, sentimentos de inadequação, insuficiência e dependência emocional. <br></br><br></br>
                O termo vem da palavra “bench”, que significa “banco” em inglês e faz referência ao contexto esportivo, onde o jogador é colocado no banco de reserva, como acontece no futebol, por exemplo. A experiência de ser colocado no banco de reservas, no esporte, quando experienciada como uma forma de punição, pode ser prejudicial para a autoestima e as relações dos atletas com seus treinadores e colegas de equipe.
              </span>
            </div>
          </div>
          <div className={styles.each_slide_effect}>
            <div>
              <img src={benching2} />
            </div>
          </div>
          <div className={styles.each_slide_effect}>
            <div>
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
          {/* 2 -- INÍCIO NEGGING */}
          <div className={styles.each_slide_effect}>
            <div className={styles.intro_slide}>
              <h1>Elogio Dissimulado</h1>
              <h2 className={styles.subtitle}>Negging</h2>
            </div>
          </div>
          <div className={styles.each_slide_effect}>
            <div className={styles.audio_slide}>
              <img src={negging} />
              <audio src={audio_teste} controls controlsList='noplaybackrate nodownload' />
            </div>
          </div>
          <div className={styles.each_slide_effect}>
            <div>
              <span className={styles.text_info}>
                Elogio Dissimulado, é uma técnica inventiva que tem como objetivo minar a autoestima da vítima, para que ela se sinta insegura e dependente emocional de aprovação e elogios vindos do abusador. Na prática, esta violência se dá através de falas que desqualificam a vítima, como comentários negativos e depreciativos sobre sua aparência ou personalidade, comparação negativa com outras mulheres ou insultos. É muito comum o uso de elogios com sentidos dúbios ou um elogio seguido de uma crítica.
                <br></br><br></br>
                Essa prática estabelece na vítima um sentimento de insuficiência, onde ela passa a pensar que não é boa o suficiente e precisa se comportar de modo a buscar a aprovação do abusador. A expressão "Elogio Dissimulado" é uma tradução aproximada para o termo Negging, que vem do inglês e não tem uma tradução direta no português.
              </span>
            </div>
          </div>
          <div className={styles.each_slide_effect}>
            <div>
              <img src={negging2} />
            </div>
          </div>
          <div className={styles.each_slide_effect}>
            <div>
              <span className={styles.text_info}>
                Essa técnica de manipulação psicológica, é difundida e considerada, por muitos praticantes, uma técnica de sedução e conquista, com o foco em vulnerabilizar a mulher, reduzindo sua autoestima e aumentando a atratividade do abusador, para que o mesmo obtenha a aceitação de sua investida sexual.<br></br><br></br>
                Existem vários movimentos coletivos masculinos no mundo, nos quais, seus integrantes, conhecidos como PUAs, ou “Pick-up Artist” (Artista da Sedução), se dedicam ao estudo e aprimoramento de habilidades de como seduzir e dormir com mulheres, sendo o Elogio Dissimulado uma das práticas estimuladas e ensinadas por essas comunidades como tática de sedução. Erik Von Markovik, PUA que introduziu o termo negging, descreve a prática como “inofensiva, envolvente e divertida”. Além do estímulo de práticas abusivas, esses grupos, frequentemente, defendem outras ideias e práticas misóginas.
              </span>
            </div>
          </div>
          <div className={styles.each_slide_effect}>
            <div>
              <img src={negging3} />
            </div>
          </div>
          {/* 3 -- INÍCIO LOVE BOMBING */}
          <div className={styles.each_slide_effect}>
            <div className={styles.intro_slide}>
              <h1>Bombardeio de Amor</h1>
              <h2 className={styles.subtitle}>Love Bombing</h2>
            </div>
          </div>

          <div className={styles.each_slide_effect}>
            <div className={styles.audio_slide}>
              <img src={love_bombing} />
              <audio src={audio_teste} controls controlsList='noplaybackrate nodownload' />
            </div>
          </div>
          <div className={styles.each_slide_effect}>
            <div>
              <span className={styles.text_info}>
                Bombardeio de Amor, ou Love Bombing, é caracterizado pelo excesso de atenção, comunicação e de demonstrações exageradas e excessivas de afeto, admiração e apego, como, por exemplo, verbalizações como “eu não sei viver sem você”, presentes exagerados ou muito caros e sem motivo especial, a fim de estabelecer poder e controle sobre a vítima. Está correlacionado com tendências narcisistas e estilos de apego inseguros e, negativamente, relacionado à autoestima, ou seja, pessoas que praticam tendem a comportamentos de grandiosidade, falta de empatia, baixa autoestima e falta de confiança nos outros.<br></br><br></br>
                Essa prática, inicialmente, faz com que a mulher fique encantada e se sinta a pessoa mais especial do mundo. Porém, como consequência de tanto amor, podem surgir expectativas, necessidade de reconhecimento, acusações e cobranças por parte do praticante, na tentativa de controlar e moldar a narrativa para que ele pareça o parceiro perfeito, levando a mulher a se sentir sobrecarregada, sufocada, em dívida com o abusador e presa ao relacionamento, seja pela dependência emocional ou pelo sentimento de culpa, por todo amor que acredita que recebe e não consegue retribuir à altura.
              </span>
            </div>
          </div>
          <div className={styles.each_slide_effect}>
            <div>
              <img src={love_bombing2} />
            </div>
          </div>
          <div className={styles.each_slide_effect}>
            <span className={styles.hl_phrase}>
              "...se sentir sobrecarregada, sufocada, em dívida com o abusador e presa ao relacionamento, seja pela dependência emocional ou pelo sentimento de culpa".
            </span>
          </div>
          <div className={styles.each_slide_effect}>
            <div>
              <img src={love_bombing3} />
            </div>
          </div>

          {/* 5 -- INÍCIO GASLIGHTING */}
          <div className={styles.each_slide_effect} key={0}>
            <div className={styles.intro_slide}>
              <h1>Distorção da Realidade</h1>
              <h2 className={styles.subtitle}>Gaslighting</h2>
            </div>
          </div>

          <div className={styles.each_slide_effect}>
            <div className={styles.audio_slide}>
              <img src={gaslighting} />
              <audio src={audio_teste} controls controlsList='noplaybackrate nodownload' />
            </div>
          </div>
          <div className={styles.each_slide_effect}>
            <span className={styles.text_info}>
              Gaslighting consiste em manipular e confundir a vítima, fazendo com que ela passe a duvidar da própria sanidade e memória, perdendo o senso de percepção, identidade e autoestima. Dessa forma, o abusador pode exercer controle no comportamento e nas crenças da vítima. O parceiro abusivo age através de declarações e acusações baseadas em mentiras ou distorção da verdade, negação de fatos, podendo, por exemplo, questionar a memória da vítima, fingir não entender o que ela fala, sugerir ou declarar, explicitamente, que a vítima é ou está ficando “louca”.<br></br><br></br>
              O termo gaslighting tem origem no filme “Gas Light” de 1944, onde um homem tenta manipular sua esposa e fazê-la duvidar de sua própria sanidade, criando várias situações propositalmente, como forjar um furto para culpar a esposa e alterações na iluminação da casa, para deixá-la confusa. A tradução em português do nome do filme, é “Iluminação a gás”, que faz referência ao tipo de iluminação da casa do casal que possibilitaria a manipulação da intensidade da luz, o que era usado pelo marido como parte das situações que ele criava para deixar a esposa confusa e desestabilizá-la. No contexto deste trabalho, optamos por adotar o sentido aproximado, em português, de distorção da realidade, para melhor entendimento do público visitante da exposição desenvolvida.
            </span>
          </div>
          <div className={styles.each_slide_effect}>
            <div>
              <img src={gaslighting2} />
            </div>
          </div>
          <div className={styles.each_slide_effect}>
            <div>
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
          {/* 6 -- INÍCIO SILENT TREATMENT */}
          <div className={styles.each_slide_effect}>
            <div className={styles.intro_slide}>
              <h1>Tratamento de Silêncio</h1>
              <h2 className={styles.subtitle}>Silent Treatment</h2>
            </div>
          </div>
          <div className={styles.each_slide_effect}>
            <div className={styles.audio_slide}>
              <img src={silent_treatment} />
              <audio src={audio_teste} controls controlsList='noplaybackrate nodownload' />
            </div>
          </div>
          <div className={styles.each_slide_effect}>
            <div>
              <span className={styles.text_info}>
                Tratamento de silêncio, ou silêncio punitivo, é caracterizado pela recusa a ouvir, falar ou responder à parceira, ignorando-a, com o objetivo de punir, fragilizar ou manipular. Em alguns casos, o abusador ignora totalmente a existência da parceira, por horas, dias ou, até mesmo, semanas. Quando o casal não mora junto, o abusador some, sem dar explicação, ignorando as tentativas de contato por parte da parceira, ligações e mensagens nas redes sociais.<br></br><br></br>
                Esse comportamento pode afetar a autoestima da vítima, levá-la a sentir-se ansiosa, confusa, insegura ou, até mesmo atormentada, já que, muitas vezes, não consegue ter ideia do motivo do silêncio do parceiro e acaba imaginando situações, reais ou não, que podem ter causado o comportamento. A vítima também pode experimentar sentimentos negativos, como o de humilhação, medo ou culpa e comportamentos inadequados, como autopunição, crises de ansiedade ou surtos.
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
              <span className={styles.hl_phrase}>
                "...recusa a ouvir, falar ou responder à parceira, ignorando-a, com o objetivo de punir, fragilizar ou manipular".
              </span>
            </div>
          </div>
          <div className={styles.each_slide_effect}>
            <div>
              <img src={silent_treatment3} />
            </div>
          </div>
          <div className={styles.each_slide_effect}>
            <div>
              <span className={styles.hl_phrase}>
                "Esse comportamento pode afetar a autoestima da vítima, levá-la a sentir-se ansiosa, confusa, insegura ou, até mesmo atormentada".
              </span>
            </div>
          </div>

        </Fade>
      </div >
    </div >
  )
}

export default Exposition;