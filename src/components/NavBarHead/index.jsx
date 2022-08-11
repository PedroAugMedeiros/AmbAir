import * as C from './styles'
import SocialNet from '../../icons/SocialNet.png';
import WhatsIcon from '../../icons/whatsIcon.png';
import TelefoneIcon from '../../icons/TelefoneIcon.png';
import CartIcon from '../../icons/CartIcon.png';


function NavBarHead() {
  return (
    <C.NavBarHead>
      <div className='topDiv'>
        <div className='leftTopDiv'>
          <p>Redes Sociais</p>
          <img alt='img' src={SocialNet}></img>
        </div>
        <div className='rigthTopDiv'>
          <img alt='img' src={CartIcon}></img>
          <spam>Acessar Loja</spam>
        </div>
      </div>
      <div className='botDiv'>
        <div className='leftBotDiv'>   <img alt='img' src={TelefoneIcon} ></img>
          <p>Telefone<b> (21) 2560 - 6000</b></p>
        </div>
        <div className='rigthBotDiv'>   <img alt='img' src={WhatsIcon}></img>
          <p><b>(21) 2560 - 6000</b></p></div>
      </div>
    </C.NavBarHead>

  );
}

export default NavBarHead;
