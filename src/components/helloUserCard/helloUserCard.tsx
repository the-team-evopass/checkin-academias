import imgHelloUserCard from '../../assets/imgs/svgs/img-hello-user-card.svg'
import '../../assets/styles/components/helloUserCard/styleHelloUserCard.css'

export function HelloUserCard () {
  return (
    <div className="hello-user-card">
        <section className='hello-user-content-text'>
          <h1>Olá, Usuário</h1>
          <p>Bem vindo a tela de checkin da evopass</p>    
        </section>
        <section className='hello-user-content-img'>
          <img src={imgHelloUserCard} alt="icon svg user" className='hello-user-card-img' />
        </section>
    </div>
  );
}