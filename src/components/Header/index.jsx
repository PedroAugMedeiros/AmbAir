import * as S from './styles'
import AmbientAirIcon from '../../icons/ambientAir.svg';
import MenuIcon from '../../icons/Menu.png';

function Header() {
  return (
    <S.Header>
      <img className='AAIcon' src={AmbientAirIcon}></img>
      <img MenuIcon='MenuIcon' src={MenuIcon}></img>
    </S.Header>
  );
}

export default Header;
