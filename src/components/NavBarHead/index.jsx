import * as C from './styles'
import FBIcon from '../../icons/facebook.png'
import XD from '../../icons/xd.svg';

function NavBarHead() {
  return (
    <C.NavBarHead>
      <div className='topDiv'>
        <div className='leftTopDiv'>
          <p>Redes Sociais</p>
          <img src={FBIcon}></img>
          <img src={FBIcon}></img>
          <img src={FBIcon}></img>
        </div>
        <div className='rigthTopDiv'>
          <img src={FBIcon}></img>
          <spam>Acessar Loja</spam>
        </div>
      </div>
      <div className='botDiv'>
        <div className='leftBotDiv'>   <img src={FBIcon}></img>
          <p>Telefone (21) 2560 - 6000</p>
        </div>
        <div className='rigthBotDiv'>   <img src={XD}></img>
          <p>Telefone (21) 2560 - 6000</p></div>
      </div>
    </C.NavBarHead>

  );
}

export default NavBarHead;
