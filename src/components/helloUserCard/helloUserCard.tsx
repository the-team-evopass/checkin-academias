import '../../assets/styles/components/helloUserCard/styleHelloUserCard.css'
import amicoImg from '../../assets/imgs/img-card/amico.png'
const HelloUserCard = () => {
  return (
    <div className="hello-user-card">
      <h1>Olá, Usuário</h1>
        <div className='hello-user-content'>
          <p>Bem vindo a tela de checkin da evopass</p>    
          <img src={amicoImg} alt="Amico" className='amico' />
        </div>
    </div>
  );
};

export default HelloUserCard;



