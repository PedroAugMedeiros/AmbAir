import * as C from './styles'
import buttonIcon from '../../icons/buttonIcon.png';

function NavBarFoot() {
  return (
    <C.NavBarFoot>
      <div className='firstDiv'>
        <h1>Nossa Loja</h1>
        <button><img className='imgButton' alt='img' src={buttonIcon} />
        </button>
      </div>
      <div className='secondDiv'>
        <h1>Trabalhe Conosco</h1>
        <button><img className='imgButton' alt='img' src={buttonIcon} />
        </button>
      </div>
      <div className='thirdDiv'>
        <h1>Contato</h1>
        <button><img className='imgButton' alt='img' src={buttonIcon} />
        </button>
      </div>
      <div className='foursthDiv'>
        <p> &nbsp; A primeira em climatização.</p>
        <p className='theChosen'> &nbsp; A primeira em climatização.</p>
        <p> &nbsp; A primeira em climatização.</p>
      </div>
      <div className='fiverDiv'>
        <h4>Política de Privacidade | Aviso de Cookies | Termos de Uso</h4>
        <h5>AmbientAir © Todos os direitos reservados.</h5>
      </div>
      <div className='lastDiv'>
      </div>
    </C.NavBarFoot>
  );
}

export default NavBarFoot;
