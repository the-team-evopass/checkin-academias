import '../../assets/styles/components/comingSoonNotice/styleComingSoonNotice.css'
import animationDev from '../../../src/assets/imgs/svgs/development-animate.svg';

export default function ComingSoon() {

  return (
    <>
      <div className="comingsoon-container">
        <section className="comingsoon-container-section-text">
          <h1 className="comingsoon-title">Página em construção</h1>
          <p className="comingsoon-subtitle">
            Olá querido Evopasser. Nosso sistema está em fase de construção. Em
            breve você poderá acessar as funcionalidades que estão por vir.
          </p>
        </section>
        <section className="comingsoon-container-img">
          <img
            className="comingsoon-img"
            src={animationDev}
            alt="Gif: Site em construção"
          />
        </section>
      </div>
    </>
  );
}
