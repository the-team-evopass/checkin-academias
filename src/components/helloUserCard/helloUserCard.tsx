import imgHelloUserCard from '../../assets/imgs/svgs/img-hello-user-card.svg'
import '../../assets/styles/components/helloUserCard/styleHelloUserCard.css'

export function HelloUserCard () {
  return (
    <div className="hello-user-card">
      <h3 className='hello-user-title'>Olá, Usuário</h3>
        <section className='hello-user-content'>
          <p>Bem vindo a tela de checkin da evopass</p>    
          <img src={imgHelloUserCard} alt="icon svg user" className='hello-user-card-img' />
        </section>
    </div>
  );
}